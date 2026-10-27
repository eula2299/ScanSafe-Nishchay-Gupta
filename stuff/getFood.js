import { getLocales } from "expo-localization";
import { builtInFoods, countryTags } from "./foodData";
import { noAccents, findClaims, combineClaims, wait, timeoutSig, isValidBarcode, sameCode, codeVersions, getShopLink, hasDrinkCat, getNutrient, getServingNutrient, howHigh, checkFood, findCheckedRecord, nonFoodInfo, storeFoods, guessCategory, checkDiet, categorySearch, trimCode, sameFood, searchSaved, onlyStrings, strOr } from "./helpers";
import { getUpcItem, getBrandClaims, searchWeb } from "./scraper";
import { needsPhotoRead, isLonger, photoIngredients, photoNutrition, photoClaims, photoAllergens } from "./labels";

const CACHE_TIME = 6 * 60 * 60 * 1000;

let offWaitUntil = 0

const MAX_SAVED = 100;
const TIMEOUT = 8000;

const USER_AGENT = "ScanSafe/1.0 (food scanner app)";


const offCache = new Map();

const loadingNow = new Map();

let cacheVersion = 0;

function looksLikeBarcode(code) {
  return /^(?:\d{8}|\d{12}|\d{13}|\d{14})$/.test(code);
}

function offKey(code) {
  return looksLikeBarcode(code) ? code.replace(/^0+/, "") || "0" : code;
}

function copy(value) {
  return JSON.parse(JSON.stringify(value));
}
async function getOffProduct(code, fieldList){
  if (!code.trim()) throw new Error("Missing product barcode");
  const selectedFields = fieldList.trim() === "*" ? "*" : [...new Set(["code", ...fieldList.split(",").map(str => str.trim()).filter(Boolean)])].sort().join(",")
  const key = offKey(code) + "|" + selectedFields;
  const now=Date.now();
  for (const [id, rec] of offCache) if (rec.expiresAt <= now) offCache.delete(id);

  const found = offCache.get(key);
  if (found) {
    offCache.delete(key);
    offCache.set(key, found);
    return copy(found.value);
  }

  let request = loadingNow.get(key);
  if (!request) {
    const startedGeneration = cacheVersion
    async function loadIt() {
      let response;
      for (let attempt = 0; attempt < 5; attempt++) {
        const waitFor = offWaitUntil - Date.now();
        if (waitFor > 0) await wait(Math.min(waitFor, 20000));
        try {
          response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json${selectedFields === "*" ? "" : "?fields=" + encodeURIComponent(selectedFields)}`, {
            signal: timeoutSig(TIMEOUT),
            headers: { "User-Agent": USER_AGENT, Accept: "application/json" }
          });
        } catch(error) {
          if (attempt >= 2) throw error;
          await wait(1500 * (attempt + 1));
          continue;
        }
        if (response.status !== 503 && response.status !== 429 && response.status < 500) break;
        if (attempt === 4) break;
        offWaitUntil = Date.now() + [3000, 8000, 15000, 20000][attempt];
      }
      if (response.status === 404) return { status: 0, status_verbose: "product not found" }

      if (!response.ok) throw new Error(`Product source returned ${response.status}`);
      const body = await response.json();
      const returnedCode = String(body?.product?.code ?? "");
      if (startedGeneration === cacheVersion && body?.status === 1 && looksLikeBarcode(code) && looksLikeBarcode(returnedCode) && offKey(returnedCode) === offKey(code)) {
        offCache.set(key, {
          value: copy(body),
          expiresAt: Date.now() + CACHE_TIME
        })
        while (offCache.size > MAX_SAVED) offCache.delete(offCache.keys().next().value)
      }

      return body;
    }
    request = loadIt();
    loadingNow.set(key, request);
    const activeRequest = request;
    const remove = () => {
      if (loadingNow.get(key) === activeRequest) loadingNow.delete(key);
    };
    request.then(remove, remove)
  }
  return copy(await request);
}

function clearOffCache() {
  cacheVersion++;
  offCache.clear();
  loadingNow.clear();
}

const usdaCache = new Map()
let usdaWait = 0;

const usdaIds = {
  1003: "proteins",
  1004: "fat",
  1005: "carbohydrates",
  1050: "carbohydrates",
  1079: "fiber",
  2000: "sugars", 
  1063: "sugars",
  1235: "added-sugars",
  1258: "saturated-fat",
  1257: "trans-fat",
  1253: "cholesterol",
  1093: "sodium",
  1087: "calcium",
  1089: "iron",
  1092: "potassium"
};

const usdaCats = [{
  pattern: /popcorn/i,
  tags: ["en:snacks", "en:salty-snacks", "en:popcorn"]
}, {
  pattern: /peanuts|seeds|nuts/i,
  tags: ["en:snacks", "en:nuts"]
}, {
  pattern: /chips|pretzels|snack/i,
  tags: ["en:snacks", "en:salty-snacks", "en:chips-and-fries", "en:crisps"]
}, {
  pattern: /cereal/i,
  tags: ["en:breakfasts", "en:breakfast-cereals"]
}, {
  pattern: /granola|bars/i,
  tags: ["en:snacks", "en:sweet-snacks", "en:bars", "en:cereal-bars"]
}, {
  pattern: /cookies|biscuits/i,
  tags: ["en:snacks", "en:sweet-snacks", "en:biscuits-and-cakes", "en:biscuits"]
}, {
  pattern: /crackers/i,
  tags: ["en:snacks", "en:salty-snacks", "en:crackers"]
}, {
  pattern: /cakes|pastries|donuts|muffins/i,
  tags: ["en:snacks", "en:sweet-snacks", "en:biscuits-and-cakes", "en:cakes"]
}, {
  pattern: /chocolate/i,
  tags: ["en:snacks", "en:sweet-snacks", "en:cocoa-and-its-products", "en:chocolates"]
}, {
  pattern: /candy|confection/i,
  tags: ["en:snacks", "en:sweet-snacks", "en:confectioneries", "en:candies"]
}, {
  pattern: /soda|soft drink/i,
  tags: ["en:beverages", "en:carbonated-drinks", "en:sodas"]
}, {
  pattern: /juice/i,
  tags: ["en:beverages", "en:fruit-juices"]
}, {
  pattern: /water/i,
  tags: ["en:beverages", "en:waters"]
}, {
  pattern: /energy|sport|protein.*drink|recovery/i,
  tags: ["en:beverages", "en:energy-drinks"]
}, {
  pattern: /coffee|tea/i,
  tags: ["en:beverages", "en:hot-beverages"]
}, {
  pattern: /plant based milk|non dairy|nondairy/i,
  tags: ["en:beverages", "en:plant-milks"]
}, {
  pattern: /yogurt/i,
  tags: ["en:dairies", "en:fermented-foods", "en:yogurts"]
}, {
  pattern: /cheese/i,
  tags: ["en:dairies", "en:cheeses"]
}, {
  pattern: /ice cream|frozen yogurt|frozen dessert/i,
  tags: ["en:frozen-foods", "en:desserts", "en:ice-creams"]
}, {
  pattern: /milk|cream/i,
  tags: ["en:dairies", "en:milks"]
}, {
  pattern: /bread|buns|rolls|bagels|tortilla/i,
  tags: ["en:cereals-and-potatoes", "en:breads"]
}, {
  pattern: /pasta|noodles/i,
  tags: ["en:cereals-and-potatoes", "en:pastas"]
}, {
  pattern: /ketchup/i,
  tags: ["en:condiments", "en:sauces", "en:ketchup"]
}, {
  pattern: /dressing|mayonnaise/i,
  tags: ["en:condiments", "en:sauces", "en:salad-dressings"]
}, {
  pattern: /salsa|dips?\b/i,
  tags: ["en:condiments", "en:sauces", "en:dips"]
}, {
  pattern: /sauce|gravy|marinade/i,
  tags: ["en:condiments", "en:sauces"]
}, {
  pattern: /nut.*butter|peanut butter|seed butter/i,
  tags: ["en:spreads", "en:nut-butters"]
}, {
  pattern: /jam|jelly|fruit spread|preserves/i,
  tags: ["en:spreads", "en:jams"]
}, {
  pattern: /soup|broth/i,
  tags: ["en:meals", "en:soups"]
}, {
  pattern: /pizza/i,
  tags: ["en:meals", "en:pizzas"]
}, {
  pattern: /frozen dinner|entree|prepared|meal/i,
  tags: ["en:meals"]
}, {
  pattern: /cereal|oat/i,
  tags: ["en:breakfast-cereals"]
}, {
  pattern: /canned.*vegetable|vegetable/i,
  tags: ["en:plant-based-foods", "en:vegetables"]
}, {
  pattern: /fruit/i,
  tags: ["en:plant-based-foods", "en:fruits"]
}, {
  pattern: /pickles|olives|relish/i,
  tags: ["en:condiments", "en:pickles"]
}, {
  pattern: /sausage|hot dog|bacon|deli|meat/i,
  tags: ["en:meats", "en:prepared-meats"]
}, {
  pattern: /fish|seafood/i,
  tags: ["en:seafood"]
}];

function getUsdaCats(foodCategory, name) {
  const cat = String(foodCategory || "");
  for(const rule of usdaCats) {
    if (rule.pattern.test(cat)) return rule.tags;
  }
  const fromName = guessCategory(String(name || ""));
  if (fromName) return [fromName]
  return [];
}

function usdaCodes(code) {
  const bare = code.replace(/^0+/, "");
  let forms = [];
  if (bare.length <= 12) forms.push(bare.padStart(12, "0"));
  if(bare.length <= 14) forms.push(bare.padStart(14, "0"));
  if (bare.length <= 13) forms.push(bare.padStart(13, "0"));
  forms.push(code);
  let out = [];
  for (const f of forms) {
    if (!out.includes(f)) out.push(f);
  }
  return out;
}

function fixCaps(value) {
  const v = String(value || "").trim();
  if (!v || /[a-z]/.test(v)) return v;
  const lower = v.toLowerCase();
  return lower.replace(/(^|[.!?]\s+|:\s*)([a-z])/g, (m, a, b) => a + b.toUpperCase());
}
function addUsdaNumber(nutrients, n) {
  if (n.value === undefined || n.value === null || String(n.value).trim() === "") return;
  const value = Number(n.value);
  const unitName = String(n.unitName).toUpperCase();
  const id = Number(n.nutrientId);
  if (!Number.isFinite(value) || value < 0) return;
  const key = usdaIds[id]
  if (key && (unitName === "G" || unitName === "MG")) {
    let grams = value;
    if (unitName === "MG") grams = value / 1000;
    if (grams <= 100 && nutrients[key + "_100g"] === undefined){
      nutrients[key + "_100g"] = Math.round(grams * 10000) / 10000;
    } 
  }
  if ((id == 1008 || id == 2047 || id == 2048) && unitName === "KCAL" && nutrients["energy-kcal_100g"] === undefined) {
    nutrients["energy-kcal_100g"] = value;
  }
  if (id === 1062 && unitName === "KJ" && nutrients["energy-kj_100g"] === undefined) {
    nutrients["energy-kj_100g"] = value;
  }
}

function usdaToFood(x, query, barcode) {
  let nutrients = {};
  const servingSize = Number(x.servingSize);
  const unit = String(x.servingSizeUnit || "").toLowerCase();
  const liquid = /^(ml|mlt|fl oz|floz)$/.test(unit);
  const all = x.foodNutrients || [];
  for (const n of all) {
    if (n.nutrientId !== 2000) addUsdaNumber(nutrients, n);
  }

  for (const n of all) {
    if (n.nutrientId === 2000) addUsdaNumber(nutrients, n)
  }
  if (nutrients.sodium_100g !== undefined && nutrients.salt_100g === undefined) {
    nutrients.salt_100g = Math.round(nutrients.sodium_100g * 2.5 * 10000) / 10000;
  }
  let serving;
  if (Number.isFinite(servingSize) && servingSize > 0 && /^(g|grm|ml|mlt)$/.test(unit)) {
    let u = "g"
    if (unit == "ml" || unit == "mlt") u = "ml";
    serving = Math.round(servingSize * 10) / 10 + " " + u
    if (x.householdServingFullText) serving += " (" + String(x.householdServingFullText).trim() + ")";
    const keys = Object.keys(nutrients)
    for (const k of keys) {
      if (k.endsWith("_100g")) {
        nutrients[k.replace(/_100g$/, "_serving")] = Math.round(nutrients[k] * servingSize / 100 * 10000) / 10000;
      }
    }
  }
  const name = fixCaps(x.description) || query;
  const cats = getUsdaCats(x.foodCategory || x.brandedFoodCategory, name);
  const ingredients = fixCaps(x.ingredients);
  const src = {
    name: "USDA FoodData Central",
    url: "https://fdc.nal.usda.gov/food-details/" + x.fdcId + "/nutrients",
    updated: x.modifiedDate || x.publishedDate
  };
  let code = "usda-" + x.fdcId;
  if (x.gtinUpc) code = String(x.gtinUpc);

  return {
    code: code,
    name: name,
    brand: fixCaps(x.brandName || x.brandOwner || ""),
    kind: "food",
    category: cats[cats.length - 1] || "",
    nutritionBasis: liquid ? "100ml" : "100g",
    categories: cats,
    ingredients: ingredients,
    ingredientListKind: ingredients ? "label" : undefined,
    ingredientTags: [],
    additiveTags: [],
    allergens: [],
    traces: [],
    labels: [],
    labelClaims: findClaims(ingredients, [], src),
    countries: ["en:united-states"],
    serving: serving,
    nutrients: nutrients,
    sources: [src],
    match: barcode ? "barcode" : "selected"
  };
}

async function searchUsda(query) {
  const key = process.env.EXPO_PUBLIC_USDA_API_KEY || "DEMO_KEY";
  const url = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=" + encodeURIComponent(key) + "&query=" + encodeURIComponent(query) + "&dataType=Branded&pageSize=25";
  let r
  for (let tries = 0; tries < 3; tries++) {
    try {
      r = await fetch(url, {
        signal: timeoutSig(10000)
      });
      if (r.status < 500) break;
    } catch (error) {
      if (tries === 2) throw error;
    }
    await wait(1500 * (tries + 1));
  }
  if (r.status === 429) {
    usdaWait = Date.now() + 600000;
    throw Error("USDA rate limit");
  }
  if (!r.ok) throw Error("USDA unavailable");
  const j = await r.json();
  if (Array.isArray(j.foods)) return j.foods;
  return [];
}

function newestFirst(a, b) {
  const one = String(a.modifiedDate || a.publishedDate || "");
  const two = String(b.modifiedDate || b.publishedDate || "")
  return two.localeCompare(one);
}

async function getUsda(query) {
  query = String(query || "").trim();

  if (!query) return [];

  const barcode = /^\d{8,14}$/.test(query);
  let cacheKey = query.toLowerCase();
  if (barcode) cacheKey = query.replace(/^0+/, "");

  const cached = usdaCache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return cached.value.map(p => JSON.parse(JSON.stringify(p)));
  }
  if (Date.now() < usdaWait) throw Error("USDA rate limit");
  let foods = []
  if (barcode){
    for (const form of usdaCodes(query)) {
      const res = await searchUsda(form);
      let found = [];
      for (const x of res) {
        if (sameCode(String(x.gtinUpc || ""), query)) found.push(x);
      }
      if(found.length > 0) {
        foods = found;
        break;
      }
    }
  } else {
    foods = await searchUsda(query)
  }
  foods.sort(newestFirst);

  let value = [];
  let seenCodes = [];
  for (const x of foods) {
    if(x.gtinUpc) {
      const c = String(x.gtinUpc).replace(/^0+/, "")
      if (seenCodes.includes(c)) continue;
      seenCodes.push(c);
    }
    value.push(usdaToFood(x, query, barcode))
  }

  let howLong = 3600000;
  if(value.length > 0) howLong = 86400000
  usdaCache.set(cacheKey, {
    value: value,
    expires: Date.now() + howLong
  });
  while (usdaCache.size > 200) {
    usdaCache.delete(usdaCache.keys().next().value);
  }
  return value.map(p => JSON.parse(JSON.stringify(p)));
}

function builtInEntry(code, now = Date.now()) {
  if (typeof code !== "string" || !isValidBarcode(code) || !Number.isFinite(now)) return null;
  const entry = builtInFoods.find(thing => sameCode(thing.code, code));
  if (!entry) return null;
  return JSON.parse(JSON.stringify(entry));
}

function builtInFood(code, makeIt, es = false, now = Date.now()) {
  const entry = builtInEntry(code, now);
  if(!entry) return null;
  const product = makeIt(entry.raw, es);
  if (!sameCode(product.code, entry.code)) return null;
  return {
    ...product,
    sources: entry.sources,
    labelClaims: (product.labelClaims || []).map(claim => ({
      ...claim,
      checkedAt: entry.observedAt
    })),
    catalogueObservedAt: entry.observedAt,
    catalogueExpiresAt: entry.expiresAt,
    match: "barcode"
  };
}

function allBuiltIn(makeIt, es = false, now = Date.now()) {
  const products = [];
  for (const entry of builtInFoods) {
    const product = builtInFood(entry.code, makeIt, es, now);
    if (product) products.push(product);
  }
  return products;
}

const offSites = [["world.openfoodfacts.org", "Open Food Facts", "food"]];

const OFF_FIELDS = "*";
function goodNumbers(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  let nums = {}
  for (const [name, amount] of Object.entries(value)) {
    if (typeof amount !== "number" && typeof amount !== "string") continue;
    if (String(amount).trim() === "" || !Number.isFinite(Number(amount)) || Number(amount) < 0) continue;
    nums = {
      ...nums,
      [name]: amount
    };
  }
  return nums
}

function pickLang(raw, stem, es){
  const preferred = es ? "es" : "en";
  const main=strOr(raw.lang);

  const keys = [stem + "_" + preferred, stem, stem + "_" + main, ...Object.keys(raw).filter(k => new RegExp("^" + stem + "_[a-z]{2}(?:_[a-z]{2})?$").test(k)).sort()];
  for (const key of [...new Set(keys)]) {
    const value = strOr(raw[key]).trim();
    if (value) return {
      value,
      language: key === stem ? main : key.slice(stem.length + 1)
    };
  }

  return { value: "", language: main };
}

function ingredientsToText(value, depth = 0) {
  if (!Array.isArray(value) || depth > 5) return "";
  return value.map(i => {
    if (!i || typeof i !== "object") return "";
    const name = strOr(i.text).trim();
    const children = ingredientsToText(i.ingredients, depth + 1);
    if (name) {
      if (children) {
        return name + " (" + children + ")";
      }
      return name;
    }
    return children;
  }).filter(Boolean).join(", ");
}

function ingredientIds(value, depth = 0) {
  if (!Array.isArray(value) || depth > 5) return [];
  const ingredientNames = [];
  for (const thing of value) {
    if (!thing || typeof thing !== "object") continue;
    const name = strOr(thing.id);
    if (name) ingredientNames.push(name);
    ingredientNames.push(...ingredientIds(thing.ingredients, depth + 1));
  }
  return ingredientNames;
}

function getTags(p, name) {
  const tagged = onlyStrings(p[name + "_tags"]);
  return tagged.length ? tagged : onlyStrings(p[name]);
}

function brandText(brands){
  if (!Array.isArray(brands)) return strOr(brands);
  let out = [];
  for (const b of onlyStrings(brands)) {
    if (/[A-Z]/.test(b)){
      out.push(b);
    } else {
      out.push(b.replace(/^[a-z]{2}:/, "").replace(/-/g, " ").replace(/(^|\s)(\p{L})/gu, (m, a, letter) => a + letter.toUpperCase()));
    }
  }
  return out.join(", ");
}

function makeFood(raw, es = false) {
  const p = raw && typeof raw === "object" ? raw : {};
  const cats = getTags(p, "categories").filter(c => !/(undefined|unknown|null)$/.test(c));
  const liquid = hasDrinkCat(cats);

  const updated = Number(p.last_modified_t);
  const src = {
    name: "Open Food Facts",
    url: `https://world.openfoodfacts.org/product/${encodeURIComponent(String(p.code || ""))}`,
    updated: Number.isFinite(updated) && updated > 0 && updated <= 8640000000000 ? new Date(updated * 1000).toISOString().slice(0, 10) : undefined
  };
  const ingredients = pickLang(p, "ingredients_text", es);
  const structured = ingredientsToText(p.ingredients);
  const nonFood = nonFoodInfo(String(p.code || ""));
  return {
    code: String(p.code || ""),
    name: nonFood?.name || pickLang(p, "product_name", es).value || String(p.code || ""),
    brand: nonFood && nonFood.brand || brandText(p.brands),
    category: cats[cats.length - 1] || "",
    kind: nonFood ? "product" : "food",
    image: strOr(p.image_front_small_url) || undefined,
    ingredients: ingredients.value || structured,
    ingredientListKind: ingredients.value ? "label" : structured ? "structured" : undefined,
    ingredientTags: [...new Set([...onlyStrings(p.ingredients_tags), ...ingredientIds(p.ingredients)])],
    additiveTags: getTags(p, "additives"),
    ingredientLanguage: ingredients.language || strOr(p.ingredients_lc),
    allergens: getTags(p, "allergens"),
    traces: getTags(p, "traces"),
    labels: getTags(p, "labels"),
    countries: getTags(p, "countries"),
    popularity: Number(p.unique_scans_n) || Number(p.popularity_key) || 0,
    nutritionBasis: p.nutrition_data_per === "100ml" || liquid ? "100ml" : "100g",
    nutrients: goodNumbers(p.nutriments),
    nutritionGrade: /^[abcde]$/i.test(strOr(p.nutrition_grades) || strOr(p.nutriscore_grade)) ? (strOr(p.nutrition_grades) || strOr(p.nutriscore_grade)).toLowerCase() : undefined,
    labelClaims: findClaims("", getTags(p, "labels"), src),
    allergenStatement: strOr(p.allergens) || undefined,
    serving: strOr(p.serving_size) || undefined,
    categories: cats,
    sources: nonFood ? [src, nonFood.source] : [src],
    match: "selected"
  };
}
function has100g(p) {
  return Object.entries(p.nutrients || {}).some(([k, v]) => k.endsWith("_100g") && !/^(?:fruits|nova|nutrition-score|carbon)/.test(k) && Number.isFinite(Number(v)));
}

function fillGaps(primary, extra) {
  if (primary.code !== extra.code && !sameCode(primary.code, extra.code)) return primary;

  const base = has100g(primary) ? primary : {
    ...primary,
    nutritionBasis: extra.nutritionBasis || primary.nutritionBasis
  };
  const mixed = mergeFoods(base, extra);
  if (!primary.serving && extra.serving) mixed.serving = extra.serving;

  return mixed
}

export function mergeFoods(primary, extra) {
  if (primary.code !== extra.code && !sameCode(primary.code, extra.code)) return primary

  const union = (a, b) => [...new Set([...(a || []), ...(b || [])])];
  const ingredients = primary.ingredients.trim() ? primary : extra;

  let nums = {};
  const theirs = goodNumbers(extra.nutrients);
  const sameBasis = (primary.nutritionBasis || "100g") === (extra.nutritionBasis || "100g");

  let sameServing = !primary.serving;
  if (primary.serving && extra.serving) {
    sameServing = primary.serving.toLowerCase().replace(/\s/g, "") === extra.serving.toLowerCase().replace(/\s/g, "");
  }
  for (const k in theirs) {
    if(k.endsWith("_serving")) {
      if (sameServing) nums[k] = theirs[k];
    } else if (sameBasis) {
      nums[k] = theirs[k];
    }
  }
  const mine = goodNumbers(primary.nutrients);
  for(const k in mine) nums[k] = mine[k];

  return {
    ...primary,
    name: primary.name && primary.name !== primary.code ? primary.name : extra.name,
    brand: primary.brand || extra.brand,
    image: primary.image || extra.image,
    shop: primary.shop || extra.shop,
    labelClaims: combineClaims(primary.labelClaims, extra.labelClaims),
    allergenStatement: [primary.allergenStatement, extra.allergenStatement].filter(Boolean).join(". "),
    serving: primary.serving || extra.serving,
    ingredients: ingredients.ingredients,
    ingredientListKind: ingredients.ingredientListKind,
    ingredientLanguage: ingredients.ingredientLanguage,
    ingredientTags: union(primary.ingredientTags, extra.ingredientTags),
    additiveTags: union(primary.additiveTags, extra.additiveTags),
    allergens: union(primary.allergens, extra.allergens),
    traces: union(primary.traces, extra.traces),
    labels: union(primary.labels, extra.labels),
    countries: union(primary.countries, extra.countries),
    popularity: Math.max(primary.popularity || 0, extra.popularity || 0),
    categories: primary.categories.length ? primary.categories : extra.categories,
    category: primary.category || extra.category,
    nutrients: nums,
    nutritionGrade: /^[abcde]$/i.test(primary.nutritionGrade || "") ? primary.nutritionGrade : extra.nutritionGrade || primary.nutritionGrade,
    sources: [...primary.sources, ...extra.sources.filter(str => !primary.sources.some(p => p.url === str.url))]
  };
}

function mergeWebFood(primary, extra) {
  if (!sameCode(primary.code, extra.code)) return primary;
  const recipe = str => str.toLowerCase().replace(/^\s*(?:ingredients?|ingredientes|ingrédients|zutaten)\s*:\s*/i, "").replace(/[^\p{L}\p{N}]/gu, "");
  let fromBrandLabel = false;
  for (const x of extra.sources) {
    if (x.kind === "brand-product-label") fromBrandLabel = true;
  }
  const extraHasPanel = getNutrient(extra, "sugars") !== null && getNutrient(extra, "saturated-fat") !== null && getNutrient(extra, "salt") !== null;
  if(primary.kind === "food" && primary.match !== "label" && extra.kind === "food" && extra.ingredients.trim() && fromBrandLabel && extraHasPanel) {
    const sameRecipe = !!primary.ingredients.trim() && recipe(primary.ingredients) === recipe(extra.ingredients);
    const labelClaims = sameRecipe ? combineClaims(extra.labelClaims, primary.labelClaims) : extra.labelClaims;
    const srcs = [...extra.sources];
    for (const claim of labelClaims || []) {
      if (!srcs.some(src => src.url === claim.source.url)) srcs.push(claim.source);
    }
    return {
      ...extra,
      labelClaims,
      sources: srcs,
      code: primary.code,
      match: primary.match,
      image: primary.image || extra.image,
      category: extra.category || primary.category,
      categories: extra.categories.length ? extra.categories : primary.categories,
      shop: extra.shop || primary.shop,
      scannedAt: primary.scannedAt,
      downloadedAt: primary.downloadedAt,
      enrichmentCheckedAt: primary.enrichmentCheckedAt
    };
  }
  if (extra.kind !== "food" || primary.ingredients && extra.ingredients && recipe(primary.ingredients) !== recipe(extra.ingredients)) return {
    ...primary,
    shop: extra.shop || primary.shop
  };
  const panelKeys = ["sugars", "saturated-fat", "salt"];
  const currentShopPage = getShopLink(extra);
  const retailerSources=extra.sources.filter(src => src.kind === "retailer-product-page" && src.url === currentShopPage)
  let canUseWholePanel = false;
  if (primary.kind === "food" && primary.match !== "label" && primary.ingredients.trim() && extra.ingredients.trim()) {
    if (recipe(primary.ingredients) === recipe(extra.ingredients) && retailerSources.length > 0 && (extra.nutritionBasis === "100g" || extra.nutritionBasis === "100ml")) {
      let primaryMissing = false;
      let extraHasAll = true;
      for (const key of panelKeys) {
        if (howHigh(primary, key) === "unknown") primaryMissing = true;
        if (howHigh(extra, key) === "unknown") extraHasAll = false;
      }
      if (primaryMissing && extraHasAll) canUseWholePanel = true;
    }
  }
  if (canUseWholePanel) { 
    const joined = mergeFoods(primary, extra);
    return {
      ...joined,
      nutrients: goodNumbers(extra.nutrients),
      nutritionBasis: extra.nutritionBasis,
      serving: extra.serving,
      nutritionGrade: extra.nutritionGrade,
      sources: [...retailerSources, ...joined.sources.filter(src => !retailerSources.some(retailer => retailer.url === src.url))]
    };
  }
  const hasAmounts = ["sugars", "salt", "saturated-fat", "fat", "carbohydrates", "proteins", "fiber", "energy-kcal", "energy-kj"].some(k => getNutrient(primary, k) !== null);

  return mergeFoods(hasAmounts ? primary : {
    ...primary,
    nutritionBasis: extra.nutritionBasis
  }, extra);
}

async function addWebStuff(p) {
  if (p.kind !== "food") return p;
  const [web, claimList] = await Promise.all([searchWeb(p.code), getBrandClaims(p)]);
  p = web ? mergeWebFood(p, web) : p;
  if (claimList.length) p = {
    ...p,
    labelClaims: combineClaims(p.labelClaims, claimList),
    sources: [...p.sources, ...claimList.map(claim => claim.source).filter((src, i, all) => !p.sources.some(thing => thing.url === src.url) && all.findIndex(thing => thing.url === src.url) === i)]
  };
  return p;
}

function applyCheckedRecord(p, es, raw) {
  if (p.kind !== "food" || p.match === "label" || p.ingredients.trim()) return p;
  const evidence = findCheckedRecord(p.code, raw);

  if (!evidence) return p;
  const supplemental = {
    ...makeFood(evidence.record, es),
    sources: evidence.sources
  };
  const mixed = mergeFoods(p, supplemental)
  if (["sugars", "saturated-fat", "salt"].every(k => getNutrient(supplemental, k) !== null)) {
    mixed.nutrients = {
      ...supplemental.nutrients
    };
    mixed.nutritionBasis = supplemental.nutritionBasis;
    mixed.nutritionGrade = undefined;
  }

  return mixed;
}

function toFood(p, site, es) {
  return makeFood(p, es);
}

async function readPhotos(p, raw, es) {
  p = applyCheckedRecord(p, es, raw);
  if (p.kind !== "food") return p;
  const needsPanel = ["sugars", "saturated-fat", "salt", "fiber", "proteins", "carbohydrates", "fat", "energy-kcal"].some(k => getNutrient(p, k) === null)
  const [read, pnl, claimList, allergyStatements] = await Promise.all([needsPhotoRead(p.ingredients, raw) ? photoIngredients(raw, es, p.ingredients) : null, needsPanel ? photoNutrition(raw, es) : null, photoClaims(raw, es), photoAllergens(raw, es)]);
  for (const readAllergy of allergyStatements) {
    const allergy = checkFood({
      ...p,
      ingredients: "",
      ingredientTags: [],
      additiveTags: [],
      labels: [],
      allergens: [],
      traces: [],
      allergenStatement: readAllergy.statement
    });
    if (!allergy.allergenNames.length && !allergy.traceNames.length) continue;
    p = {
      ...p,
      allergens: [...new Set([...p.allergens, ...allergy.allergenNames])],
      traces: [...new Set([...p.traces, ...allergy.traceNames])],
      sources: p.sources.some(src => src.url === readAllergy.photoUrl) ? p.sources : [...p.sources, {
        name: "Open Food Facts · allergy label photo",
        url: readAllergy.photoUrl,
        kind: "automatic-label-reading"
      }]
    };
  }
  if(claimList.length) p = {
    ...p,
    labelClaims: combineClaims(p.labelClaims, claimList),
    sources: [...p.sources, ...claimList.map(c => c.source).filter((str, i, all) => !p.sources.some(x => x.url === str.url) && all.findIndex(x => x.url === str.url) === i)]
  };
  if (read && isLonger(p.ingredients, read.ingredients)) p = {
    ...p,
    ingredients: read.ingredients,
    ingredientLanguage: read.language,
    ingredientListKind: "photo",
    sources: [...p.sources.filter(str => str.url !== read.photoUrl), {
      name: "Open Food Facts · label photo",
      url: read.photoUrl,
      kind: "automatic-label-reading"
    }]
  };
  if (pnl) {
    const existing = Object.keys(p.nutrients).some(k => k.endsWith("_100g"));
    if (!existing || pnl.basis === p.nutritionBasis) {
      let added = {};
      for (const k in pnl.nutrients) {
        if (getNutrient(p, k.replace(/_100g$/, "")) === null) added[k] = pnl.nutrients[k];
      }
      if (Object.keys(added).length) p = {
        ...p,
        nutrients: {
          ...p.nutrients,
          ...added
        },
        nutritionBasis: pnl.basis,
        sources: [...p.sources.filter(str => str.url !== pnl.photoUrl), {
          name: "Open Food Facts · nutrition photo",
          url: pnl.photoUrl,
          kind: "automatic-nutrition-reading"
        }]
      };
    }
  }

  return p;
}
export function missingStuff(p) {
  if (p.kind !== "food") return false;
  let rated = /^[abcde]$/i.test(p.nutritionGrade || "");

  if (!rated) {
    rated = howHigh(p, "sugars") !== "unknown" && howHigh(p, "saturated-fat") !== "unknown" && howHigh(p, "salt") !== "unknown";
  }

  let macros = true;
  if (getNutrient(p, "proteins") === null && getServingNutrient(p, "proteins") === null) macros = false;
  if (getNutrient(p, "carbohydrates") === null && getServingNutrient(p, "carbohydrates") === null) macros = false;
  if (!rated || !macros) return true;
  if (!p.ingredients.trim()) return true;
  return false;
}


async function searchCode(code, es) {
  let parts = [];
  for (const value of codeVersions(code)) parts.push('code:"' + value + '"');
  const r = await fetch("https://search.openfoodfacts.org/search?q=" + encodeURIComponent(parts.join(" OR ")) + "&page_size=5", {
    signal: timeoutSig(8000)
  });
  if (!r.ok) throw Error("Search unavailable");
  const j = await r.json();
  let list = [];
  for (const p of j.hits || []) {
    if (sameCode(String(p.code), code)) {
      list.push({
        ...toFood(p, offSites[0], es),
        match: "barcode"
      })
    }
  }

  return list;
}

const sizeWords = /^(?:oz|fl|floz|lb|lbs|g|gr|kg|ml|l|ct|pk|pack|packs|count|bag|bags|box|can|cans|bottle|bottles|jar|size|family|value|party|the|and|with|of|a|new|net|wt)$/;

function nameWords(value) {
  const pieces = noAccents(String(value || "")).replace(/&/g, " and ").split(/[^a-z0-9]+/);
  let words = new Set();
  for (const w of pieces) {
    if (w.length > 1 && !/\d/.test(w) && !sizeWords.test(w)) words.add(w);
  }
  return words;
}
function howSimilar(a, b) {
  const x = nameWords(a);
  const y = nameWords(b);
  if (x.size == 0 || y.size == 0) return 0;
  let both = 0;
  for (const w of x) {
    if (y.has(w)) both++;
  }
  return both / (x.size + y.size - both)
}

function countFacts(p) {
  let n = 0;

  if (p.ingredients.trim()) n = 3;
  const keys = ["sugars", "saturated-fat", "salt", "proteins", "carbohydrates", "energy-kcal"];

  for (const k of keys) {
    if (getNutrient(p, k) !== null) n++;
  }

  return n;
}

async function searchOffByName(query, es) {
  try {
    let langs = "en,es"; 
    if (es) langs = "es,en";
    const r = await fetch("https://search.openfoodfacts.org/search?q=" + encodeURIComponent(query) + "&langs=" + langs + "&page_size=15", {
      signal: timeoutSig(10000)
    });
    let j = {
      hits: []
    };
    if(r.ok) j = await r.json()
    let foods = [];
    for (const h of j.hits || []) foods.push(makeFood(h, es));
    return foods;
  } catch (e) {
    return [];
  }
}

async function findSameName(p, code, es) {
  let name = "";

  if (p && p.name && p.name !== p.code) name = p.name;
  let brand = "";
  let image;
  if (p) {
    brand = p.brand || "";
    image = p.image;
  }
  if (!name) {
    const thing = await getUpcItem(code);
    if (thing) {
      name = String(thing.title || "").trim();
      if (!brand) brand = String(thing.brand || "").trim()
      if (!image && Array.isArray(thing.images)) {
        for(const u of thing.images) {
          if(typeof u === "string" && /^https:\/\//.test(u)) {
            image = u; 
            break;
          }
        }
      } 
    }
  }
  name = name.replace(/\s*[,(-]?\s*\d+(?:[.,]\d+)?\s*(?:oz|fl\.? ?oz|ounces?|lbs?|g|kg|ml|l|ct|count|pk|pack)\b.*$/i, "").trim();
  if (!name) return null;
  let query = name;
  if (brand && !noAccents(name).includes(noAccents(brand))) query = brand + " " + name;

  query = query.slice(0, 100)

  const offPromise = searchOffByName(query, es);
  const usdaPromise = getUsda(query).catch(() => []);
  const fromOff = await offPromise;
  const fromUsda = await usdaPromise;
  const brandWords = nameWords(brand);
  let best = null;
  let bestSim = -1;
  let bestFacts = -1;
  for (const c of fromOff.concat(fromUsda)) {
    if(c.kind !== "food" || sameCode(c.code, code)) continue;
    const facts = countFacts(c);
    if(facts <= 0) continue;
    const fullName = [c.brand, c.name].join(" ");
    const sim = howSimilar(query, fullName);
    if (sim < 0.6) continue;
    if (brandWords.size > 0) {
      const their = nameWords(fullName);
      let brandOk = false;
      for (const w of brandWords) {
        if(their.has(w)) brandOk = true;
      }
      if (!brandOk) continue;
    }
    if (sim > bestSim || sim === bestSim && facts > bestFacts) {
      best = c;
      bestSim = sim;
      bestFacts = facts;
    }
  }
  let nm2 = name;
  if (p && p.name && p.name !== p.code) nm2 = p.name;
  return {
    name: nm2,
    brand: brand,
    image: image,
    match: best || null
  };
}

function joinLists(a, b) { 
  let out = [];
  for (const x of a || []) {
    if (!out.includes(x)) out.push(x); 
  }
  for (const x of b || []) {
    if (!out.includes(x)) out.push(x);
  }
  return out;
}


function copyRecipe(p, other) {
  const mixed = {
    ...p
  };
  if (!mixed.ingredients.trim() && other.ingredients.trim()) {
    mixed.ingredients = other.ingredients;
    mixed.ingredientListKind = other.ingredientListKind || "label";
    mixed.ingredientTags = joinLists(mixed.ingredientTags, other.ingredientTags);
    mixed.ingredientLanguage = other.ingredientLanguage;
  }
  if (!has100g(mixed) && has100g(other)) {
    mixed.nutrients = {
      ...mixed.nutrients,
      ...other.nutrients
    };
    mixed.nutritionBasis = other.nutritionBasis;
    if (!mixed.serving) mixed.serving = other.serving;
  } else if ((mixed.nutritionBasis || "100g") === (other.nutritionBasis || "100g")) {
    let n = {};
    const theirs = other.nutrients || {};
    for (const k in theirs) {
      if (k.endsWith("_100g")) n[k] = theirs[k];
    }
    for (const k in mixed.nutrients) {
      n[k] = mixed.nutrients[k];
    }
    mixed.nutrients = n;
  }
  if(!/^[abcde]$/i.test(mixed.nutritionGrade || "") && /^[abcde]$/i.test(other.nutritionGrade || "")) {
    mixed.nutritionGrade = other.nutritionGrade;
  }

  mixed.allergens = joinLists(mixed.allergens, other.allergens);
  mixed.traces = joinLists(mixed.traces, other.traces);

  mixed.additiveTags = joinLists(mixed.additiveTags, other.additiveTags);

  mixed.labels = joinLists(mixed.labels, other.labels);
  mixed.countries = joinLists(mixed.countries, other.countries);
  if (mixed.categories.length == 0) {
    mixed.categories = other.categories;
    if (!mixed.category) mixed.category = other.category;
  }
  if (!mixed.image) mixed.image = other.image;

  if (!mixed.brand) mixed.brand = other.brand;
  mixed.sameRecipeCode = other.code;
  let nameBits = [];
  if (other.brand) nameBits.push(other.brand);
  if (other.name) nameBits.push(other.name);
  let link = "https://world.openfoodfacts.org/product/" + encodeURIComponent(other.code);
  if(other.sources[0] && other.sources[0].url) link = other.sources[0].url;
  mixed.sources = [...mixed.sources, {
    name: "Same product, other package size · " + nameBits.join(" ") + " (" + other.code + ")",
    url: link
  }];

  return mixed;
}

async function findByCode(code, es, showKnownScore = false) {
  let failed = 0;
  let products = [];
  let inOff = false;
  let offBusy = false;
  let phoneOne = builtInFood(code, makeFood, es);
  if (!phoneOne) {
    for (const f of storeFoods()) {
      if(sameCode(f.code, code)) {
        phoneOne = f;
        break;
      }
    }
  }
  if (showKnownScore && phoneOne && checkFood(phoneOne, []).score !== null) {
    return {
      products: [phoneOne],
      failed: failed,
      fromPhone: true
    };
  }
  const usdaPromise = getUsda(code);
  usdaPromise.catch(() => {});
  try {
    const j = await getOffProduct(code, OFF_FIELDS);
    if (j.status === 1 && j.product && sameCode(String(j.product.code), code)) {
      inOff = true;
      const known = applyCheckedRecord({
        ...toFood(j.product, offSites[0], es),
        match: "barcode"
      }, es, j.product);
      if (showKnownScore && (known.kind !== "food" || !missingStuff(known))) {
        return {
          products: [known],
          failed: failed
        };
      }
      let p2 = known;
      try {
        p2 = await readPhotos(known, j.product, es);
      } catch (err){
        p2 = known;
      }
      products = [p2];
    }
  } catch(error) {
    console.log("off error", error);
   failed++;
    offBusy = /busy/i.test(String(error && error.message || ""));
  }
  if (products.length == 0 && phoneOne) products = [phoneOne]
  const builtIn = findCheckedRecord(code);
  if(products.length == 0 && builtIn) {
    products = [{
      ...makeFood(builtIn.record, es),
      sources: builtIn.sources,
      match: "barcode"
    }];
  }
  for (const p of products) { 
    if (p.kind !== "food") return { products: products, failed: failed };
  }
  let missing = false;

  for (const p of products) {
    if (missingStuff(p)) missing = true;
  }
  if (products.length > 0 && !missing) return { products: products, failed: failed }
  let offSearch;
  if(inOff) offSearch = Promise.resolve([]);
  else offSearch = searchCode(code, es);
  const webSearch=searchWeb(code).then(p => { 
    if (p && p.kind === "food") return [p];
    return [];
  })

  const backup = await Promise.allSettled([offSearch, usdaPromise, webSearch]);
  for (let index = 0; index < backup.length; index++) {
    const res = backup[index];
    if (res.status === "rejected") {
      failed++;
      continue;
    }
    for (const thing of res.value) {
      if (!sameCode(thing.code, code)) continue; 
      let existing = null
      for (const p of products) {
        if (sameCode(p.code, thing.code)) {
          existing = p;
          break
        }
      }
      if (!existing) {
        products.push(thing);
        continue;
      }
      if (index === 2) Object.assign(existing, mergeWebFood(existing, thing));
      else Object.assign(existing, fillGaps(existing, thing));
    }
  }
  missing = false;
  for (const p of products) {
    if (missingStuff(p)) missing = true;
  }
  if (products.length == 0 || missing) {
    let nameThing = null;
    try {
      nameThing = await findSameName(products[0] || null, code, es);
    } catch (e) {
      nameThing = null;
    }
    if (nameThing && products.length == 0 && nameThing.name) {
      products = [{
        code: code,
        name: nameThing.name,
        brand: nameThing.brand,
        kind: "food",
        category: nameThing.match && nameThing.match.category || "",
        categories: [],
        image: nameThing.image,
        ingredients: "",
        ingredientTags: [],
        additiveTags: [],
        allergens: [],
        traces: [],
        labels: [],
        countries: [],
        nutrients: {},
        nutritionBasis: "100g",
        sources: [{
          name: "UPCitemdb · product name",
          url: "https://www.upcitemdb.com/upc/" + encodeURIComponent(code)
        }],
        match: "barcode"
      }];
    }
    if (nameThing && nameThing.match && products[0]) products[0] = copyRecipe(products[0], nameThing.match);
  }
  for (const p of products) {
    p.enrichmentCheckedAt = Date.now();
    p.sourceGaps = [];
  }
  return {
    products: products,
    failed: failed,
    offBusy: offBusy,
    usdaBusy: backup[1].status === "rejected"
  };
}

export async function findFood(q, es, field = "all", showKnownScore = false) {
  q = q.normalize("NFKC").trim();
  if (/^[\d -]+$/.test(q)) q = q.replace(/[ -]/g, "")
  if (/^\d{8,14}$/.test(q)) return findByCode(q, es, showKnownScore);
  let sq=q;
  if (field !== "all") {
    let fieldName = "categories";
    if (field === "brand") fieldName = "brands";
    let words = q;
    if (field === "category") words = categorySearch(q)
    sq = fieldName + ':"' + words.replace(/[\"\\]/g, " ") + '"';
  }
  let langs = "en,es";

  if (es) langs = "es,en";
  const results = await Promise.allSettled(offSites.map(async site => {
    try {
      const resp = await fetch("https://search.openfoodfacts.org/search?q=" + encodeURIComponent(sq) + "&langs=" + langs + "&page_size=24", {
        signal: timeoutSig(12000)
      });
      if (!resp.ok) throw Error();
      const body = await resp.json();
      if (body.hits && body.hits.length) {
        let list = [];
        for (const p of body.hits) list.push(toFood(p, site, es));
        return list;
      }
    } catch {}
    const u = "https://" + site[0] + "/cgi/search.pl?search_terms=" + encodeURIComponent(q) + "&search_simple=1&action=process&json=1&page_size=24";

    const r = await fetch(u, {
      signal: timeoutSig(15000),
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "application/json"
      }
    });
    if (!r.ok) throw Error()
    const j = await r.json();
    let list = [];
    for (const p of j.products || []) list.push({
      ...toFood(p, site, es),
      match: "selected"
    });
    return list;
  }));
  let products = [];
  let failed = 0;
  for (const r of results) {
    if (r.status === "fulfilled") products = products.concat(r.value);
    else failed++;
  }
  if (field === "all" && products.length < 8) {
    try {
      const extra = await getUsda(q);
      for (const thing of extra) {
        let same = null;
        for(const p of products) {
          if (p.kind === "food" && sameFood(p.code, thing.code)) {
            same = p;
            break;
          }
        }
        if (same) Object.assign(same, fillGaps(same, thing)); 
        else products.push(thing);
      }
    } catch (e) {}
  }
  if (field !== "all") products = searchSaved(products, q, field);
  let noDupes = [];

  for (const x of products) {
    let dupe = false;
    for (const y of noDupes) {
      if (y.code === x.code && y.kind === x.kind) dupe = true;
    }
    if (!dupe) noDupes.push(x);
  }
  return { products: noDupes, failed: failed };
}

function myCountry(p) {
  let region = "";
  try {
    region = String(getLocales()[0]?.regionCode || "").toUpperCase();
  } catch (e){}
  return countryTags[region] || (p.countries || []).find(c => /^en:/.test(c)) || null;
}

const tooBroad = new Set(["en:foods", "en:beverages", "en:beverages-and-beverages-preparations", "en:plant-based-foods", "en:plant-based-foods-and-beverages", "en:groceries", "en:snacks", "en:dairies", "en:meals", "en:condiments", "en:frozen-foods", "en:canned-foods", "en:dried-products", "en:breakfasts", "en:fermented-foods", "en:fermented-milk-products", "en:non-alcoholic-beverages", "en:sweet-snacks", "en:salty-snacks", "en:desserts", "en:cereals-and-potatoes", "en:cereals-and-their-products", "en:sweeteners", "en:fats", "en:farming-products", "en:products-for-specific-diets"]);

const skipCats = new Set(["en:foods", "en:beverages", "en:plant-based-foods", "en:plant-based-foods-and-beverages", "en:groceries", "en:beverages-and-beverages-preparations"]);

function catSteps(p) {
  const tags = (p.categories || []).filter(c => /^en:[a-z0-9-]+$/.test(c));
  const ladder = tags.filter(c => !tooBroad.has(c)).slice(-3).reverse()
  if(!ladder.length) {
    const fallback = tags.filter(c => !skipCats.has(c)).at(-1);
    if (fallback) ladder.push(fallback);
  }
  return ladder;
}
function catName(tag){
  const wordList = String(tag || "").replace(/^[a-z]{2}:/, "").replace(/-/g, " ").trim();
  return wordList ? wordList[0].toUpperCase() + wordList.slice(1) : ""
}

function betterLetters(score) {
  const floor = score === null || score === undefined ? 3 : score
  return ["a", "b", "c", "d", "e"].filter(g => 5 - "abcde".indexOf(g) > floor);
}
const swapFields = "code,product_name,product_name_en,product_name_es,brands,image_front_small_url,categories_tags,labels_tags,allergens_tags,traces_tags,additives_tags,ingredients_tags,ingredients_text,ingredients_text_en,ingredients_text_es,nutriments,nutrition_grades,nutrition_data_per,serving_size,countries_tags,lang,unique_scans_n,last_modified_t";


const swapCache = new Map();

let newSearchOk = null;

async function getCatFoods(category, grades, country, es) {
  const key = category + "|" + grades.join("") + "|" + (country || "") + "|" + (es ? "es" : "en");
  const old = swapCache.get(key);
  if (old && old.expires > Date.now()) return old.value;
  let hits = [];
  let gotAnswer = false;
  if (newSearchOk !== false){
    try {
      let q = 'categories:"' + category + '"';
      if (country) q += ' AND countries:"' + country + '"';
      q += " AND nutrition_grades:(" + grades.join(" OR ") + ")";
      let langs = "en,es"
      if (es) langs = "es,en";
      const r = await fetch("https://search.openfoodfacts.org/search?q=" + encodeURIComponent(q) + "&langs=" + langs + "&sort_by=-unique_scans_n&page_size=40", {
        signal: timeoutSig(12000)
      });
      if (r.ok){
        const j = await r.json();
        if (Array.isArray(j.hits)) hits = j.hits;
        gotAnswer = true;
        if (hits.length > 0) newSearchOk = true;
      }
    } catch {}
  }
  if (hits.length == 0 && !(gotAnswer && newSearchOk)) {
    try {
      let params = "categories_tags=" + encodeURIComponent(category);
      if (country) params += "&countries_tags=" + encodeURIComponent(country);
      params += "&nutrition_grades_tags=" + grades.join("|") + "&sort_by=unique_scans_n&page_size=40&fields=" + swapFields;
      const r = await fetch("https://world.openfoodfacts.org/api/v2/search?" + params, {
        signal: timeoutSig(15000),
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "application/json"
        }
      })
      if (r.ok) {
        const j = await r.json();
        if (Array.isArray(j.products)) hits = j.products;
        else hits = [];
        if (hits.length > 0 && gotAnswer) newSearchOk = false;
      }
    } catch (err) {}
  }
  let foods = [];
  for(const h of hits) {
    const food = {
      ...makeFood(h, es),
      match: "selected"
    };
    if (/^\d{8,14}$/.test(food.code) && food.name && food.name !== food.code) foods.push(food);
  }
  let time2 = 300000;
  if (foods.length > 0) time2 = 3600000;
  swapCache.set(key, {
    value: foods,
    expires: Date.now() + time2
  });
  while (swapCache.size > 60) {
    swapCache.delete(swapCache.keys().next().value);
  }
  return foods;
}

function sortSwaps(x, y) {
  if (y.score != x.score) return y.score - x.score;
  if (y.declared != x.declared) return y.declared - x.declared;
  if (y.hasIngredients != x.hasIngredients) return y.hasIngredients - x.hasIngredients

  if (y.improvements.length != x.improvements.length) return y.improvements.length - x.improvements.length;
  return y.popularity - x.popularity;
}
function rankSwaps(original, opts, avoid, preferences, category, limit = 3) {
  const originalScore = checkFood(original, avoid).score;
  const keys = ["sugars", "saturated-fat", "salt"];
  const words = {
    sugars: ["sugar", "azúcar"],
    salt: ["salt", "sal"],
    "saturated-fat": ["saturated fat", "grasa saturada"]
  };

  let seen = [];
  let goodStuff = []
  for (const c of opts) {
    if (c.kind !== "food") continue;
    if (sameFood(c.code, original.code)) continue;
    const id = trimCode(c.code);
    if (seen.includes(id)) continue;
    if (category && !c.categories.includes(category)) continue;
    if ((avoid.length > 0 || preferences.length > 0) && !c.ingredients.trim() && c.allergens.length == 0) continue
    const a = checkFood(c, avoid);
    if (a.score === null || a.score < 3) continue;
    if (originalScore !== null) {
      if(a.score <= originalScore) continue;
    } else {
      if (a.score < 4) continue;
    }
    let bad = false;
    for (const w of a.concerns) {
      if (w.level === "high") bad = true;
    }
    if (bad) continue;
    const prefs = checkDiet(c, preferences);
    let conflict = false;
    let declared = 0;
    let notSure = false;
    for (const x of prefs) {
      if (x.status === "conflict") conflict = true;
      if (x.status === "declared") declared++;
      else notSure = true;
    }
    if (conflict) continue;
    if (preferences.length > 0 && !c.ingredients.trim() && notSure) continue;
    let lessOf = [];
    if ((c.nutritionBasis || "100g") === (original.nutritionBasis || "100g")) {
      for (const key of keys) {
        const before = getNutrient(original, key);
        const after = getNutrient(c, key);
        if (before !== null && after !== null && after < before) {
          lessOf.push({ key: key, before: before, after: after });
        }
      }
    }
    seen.push(id);
    goodStuff.push({
      p: c,
      score: a.score,
      declared: declared,
      hasIngredients: c.ingredients.trim() ? 1 : 0,
      improvements: lessOf,
      popularity: c.popularity || 0
    });
  }
  goodStuff.sort(sortSwaps);
  let where = "";
  if (category) where = catName(category);
  let out = [];
  for (let i = 0; i < goodStuff.length && i < limit; i++) {
    const thing = goodStuff[i];
    let unit = "100 g";
    if (thing.p.nutritionBasis === "100ml") unit = "100 ml";
    let less_en = [];
    let less_es = [];
    for (let j = 0; j < thing.improvements.length && j < 2; j++) {
      const c = thing.improvements[j];
      less_en.push(words[c.key][0] + " " + c.before.toLocaleString("en", {
        maximumFractionDigits: 1
      }) + " → " + c.after.toLocaleString("en", { maximumFractionDigits: 1 }) + " g");
      less_es.push(words[c.key][1] + " " + c.before.toLocaleString("es", { maximumFractionDigits: 1 }) + " → " + c.after.toLocaleString("es", {
        maximumFractionDigits: 1
      }) + " g");
    }
    let en = "";
    let sp = "";
    if (originalScore === null) {
      en = "Rated " + thing.score + "/5.";
      sp = "Puntuación " + thing.score + "/5."
    } else {
      en = originalScore + "/5 → " + thing.score + "/5.";
      sp = originalScore + "/5 → " + thing.score + "/5.";
    }
    if (where) {
      en += " Same category: " + where + ".";
      sp += " Misma categoría: " + where + ".";
    }
    if (thing.improvements.length > 0) {
      en += " Less per " + unit + ": " + less_en.join("; ") + "."
      sp += " Menos por " + unit + ": " + less_es.join("; ") + ".";
    }
    out.push({
      ...thing.p,
      alternativeCategory: category || undefined,
      alternativeWhy: {
        en: en,
        es: sp
      }
    });
  }

  return out;
}

async function findSwaps(p, es, avoid, preferences = [], isCurrent = () => true, limit = 3) {
  if (!isCurrent() || p.kind !== "food") return [];
  const originalScore = checkFood(p, avoid).score;
  if (originalScore !== null && originalScore >= 5) return [];
  if (p.categories.length == 0) p = await getCategory(p, es);
  if (!isCurrent()) return [];
  if (p.categories.length == 0) {
    const guessed = await guessCatOnline(p, es);
    if (guessed.length > 0) p = {
      ...p,
      categories: guessed
    };
  }
  if (p.categories.length == 0) {
    const cat = guessCategory(p.name);
    if (cat) p = {
      ...p,
      categories: [cat]
    };
  }

  const ladder = catSteps(p);
  let found = [];

  function addSome(list) {
    for (const thing of list) {
      if (found.length >= limit) return;
      let already = false
      for (const x of found) {
        if(sameFood(x.code, thing.code)) already = true;
      }
      if (!already) found.push(thing);
    }
  }
  for (const category of ladder) {
    addSome(rankSwaps(p, storeFoods(), avoid, preferences, category, limit));
  }
  const grades = betterLetters(originalScore);
  if (grades.length == 0 || ladder.length == 0) return found;

  const country = myCountry(p);
  for (const category of ladder) {
    if (found.length >= limit) break;
    if (!isCurrent()) return [];
    const list = await getCatFoods(category, grades, country, es);
    addSome(rankSwaps(p, list, avoid, preferences, category, limit));
  }
  if (found.length < limit && country && isCurrent()) {
    const list = await getCatFoods(ladder[0], grades, null, es);
    addSome(rankSwaps(p, list, avoid, preferences, ladder[0], limit));
  }
  let broader = [];
  for (let i = p.categories.length - 1; i >= 0; i--) {
    const c = p.categories[i];
    if (/^en:[a-z0-9-]+$/.test(c) && !skipCats.has(c) && !ladder.includes(c)) broader.push(c);
    if (broader.length == 2) break;
  }
  for (const category of broader) {
    if (found.length >= limit || !isCurrent()) break;
    const list = await getCatFoods(category, grades, country, es);
    addSome(rankSwaps(p, list, avoid, preferences, category, limit));
  }
  if (!isCurrent()) return [];

  return found;
}

async function guessCatOnline(p, es) {
  const brandWords = nameWords(p.brand);
  let words = [];
  for (const w of nameWords(p.name)) {
    if (!brandWords.has(w)) words.push(w);
  }
  const wordList = words.join(" ");

  if (!wordList) return [];
  try {
    let langs = "en,es";
    if (es) langs = "es,en";
    const r=await fetch("https://search.openfoodfacts.org/search?q=" + encodeURIComponent(wordList) + "&langs=" + langs + "&page_size=20", {
      signal: timeoutSig(10000)
    });
    if(!r.ok) return [];
    const j = await r.json(); 
    let best = null;
    let bestScore = -1;
    for (const h of j.hits || []) {
      const food = makeFood(h, es);
      if (food.categories.length == 0) continue;
      const sim = howSimilar(wordList, food.name);
      if (sim > bestScore) {
        best = food;
        bestScore = sim;
      }
    }
    if (best && bestScore >= 0.3) return best.categories;
    return [];
  } catch (e) {
    return [];
  }
}

export async function getSwaps(food, es, avoid, preferences = [], isCurrent = () => true) {
  try {
    return await findSwaps(food, es, avoid, preferences, isCurrent, 3);
  } catch {
    return [];
  }
}
export async function getDetails(p, es, strict = false) {
  p = applyCheckedRecord(p, es);
  const provider = offSites.find(x => p.sources.some(src => src.url.startsWith("https://" + x[0] + "/")));
  const recentlyChecked = p.enrichmentCheckedAt && Date.now() - p.enrichmentCheckedAt < 300000;
  if (p.match === "label" || !provider && (strict || recentlyChecked || !/^\d{8,14}$/.test(p.code))) return strict ? p : addWebStuff(p);
  let j;

  try {
    j = await getOffProduct(p.code, OFF_FIELDS);
  } catch (error) {
    if (strict) throw error;
    return addWebStuff(p);
  }
  if (j.status !== 1) {
    if (strict) throw Error("Product details missing");
    return addWebStuff(p);
  }
  if (String(j.product?.code).replace(/^0+/, "") !== p.code.replace(/^0+/, "")) {
    if (strict) throw Error("Wrong product record");
    return addWebStuff(p);
  }

  const base = toFood(j.product, provider || offSites[0], es);

  const fresh = await readPhotos(base, j.product, es).catch(() => base);
  let mixed = strict ? fresh : {
    ...mergeFoods(fresh, p),
    nutritionGrade: fresh.nutritionGrade === undefined ? p.nutritionGrade : fresh.nutritionGrade,
    warnings: p.warnings,
    enrichmentCheckedAt: p.enrichmentCheckedAt,
    sourceGaps: p.sourceGaps
  };
  if (mixed.kind === "food" && !(mixed.enrichmentCheckedAt && Date.now() - mixed.enrichmentCheckedAt < 300000) && missingStuff(mixed) && /^\d{8,14}$/.test(mixed.code)) {
    try {
      const extra = (await getUsda(mixed.code)).find(x => sameCode(x.code, mixed.code));
      if (extra) mixed = fillGaps(mixed, extra);
    } catch {}
    if(missingStuff(mixed) && !mixed.sameRecipeCode) {
      const named = await findSameName(mixed, mixed.code, es).catch(() => null)
      if (named?.match) mixed = copyRecipe(mixed, named.match);
    }
    mixed.enrichmentCheckedAt = Date.now();
    mixed.sourceGaps = []
  }
  return strict ? mixed : addWebStuff(mixed);
}

async function getCategory(p, es) {
  try {
    const r = await fetch(`https://search.openfoodfacts.org/search?q=${encodeURIComponent(codeVersions(p.code).map(value => 'code:"' + value + '"').join(" OR "))}&langs=${es ? "es,en" : "en,es"}&page_size=3`, {
      signal: timeoutSig(10000)
    });
    if (!r.ok) return p;
    const j = await r.json();
    const hit = j.hits?.find(x => sameCode(String(x.code), p.code));
    if (hit) return {
      ...p,
      categories: getTags(hit, "categories").filter(c => !/(undefined|unknown|null)$/.test(c))
    };
    return p;
  } catch (e) {
    return p;
  }
}
