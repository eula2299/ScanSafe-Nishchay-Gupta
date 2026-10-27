import { Linking, Alert } from "react-native";
import { preservativeList, offPhoto, makeRecordSource, checkedRecords, shopList, moreStoreFoods } from "./foodData";

const allergenWords = [["milk", "(?:voll|mager|sauer|butter|trocken)?milch(?:pulver|eiweiss|bestandteile)?|molke(?:npulver)?|latte|siero di latte|melk(?:poeder|eiwit)?|wei(?:poeder)?|mleko|mleka|mleczny|mleczne|serwatka|serwatki|mjolk(?:pulver)?|vassle(?:pulver)?"], ["egg", "eier(?:pulver)?|eigelb|huhner(?:ei|eiweiss)|ei|uova|uovo|eigeel|eieren|eipoeder|jaja|jaj|jajka|jajko|agg|aggpulver"], ["peanut", "erdnusse?n?|erdnuss(?:e|butter|mehl|ol)?|arachidi|arachide|pinda(?:s)?|aardnoten|orzeszki ziemne|orzechy arachidowe|jordnotter"], ["tree nuts", "schalenfruchte|mandeln?|haselnusse|haselnuss(?:paste|mark)?|walnusse|cashewnusse|kaschunusse|pistazien|paranusse|pecannusse|frutta a guscio|mandorle|nocciole|noci|anacardi|pistacchi|noten|amandelen|hazelnoten|walnoten|cashewnoten|orzechy|migdaly|notter|mandel|hasselnotter|valnotter|cashewnotter"], ["soy", "soja(?:bohnen|lecithin|mehl|eiweiss)?|soia|soya|sojabonen|sojameel|sojabonor|sojaprotein|sojowy|sojowe"], ["wheat", "weizen(?:mehl|starke|kleber)?|hartweizen(?:griess|mehl)?|dinkel(?:mehl)?|frumento|farro|tarwe(?:meel|bloem|zetmeel)?|spelt(?:meel)?|pszenica|pszenicy|pszenna|pszenne|vete(?:mjol)?"], ["barley", "gerste(?:nmalz|nmehl)?|orzo|gerst(?:emout)?|jeczmien|jeczmienny|kornmalt"], ["rye", "roggen(?:mehl)?|segale|rogge(?:meel)?|zyto|zytnia|rag(?:mjol)?"], ["fish", "fisch|fische|fischerzeugnisse|pesce|pesci|vis|vissen|ryby|ryba|fisk"], ["shellfish", "krebstiere|garnelen|krabben|hummer|crostacei|gamberi|schaaldieren|garnalen|skorupiaki|krewetki|kraftdjur|raka|rakor"], ["sesame", "sesam(?:samen)?|sesamo|sesamzaad|sezam|sezamu|sesamfro"], ["celery", "sellerie|sedano|selderij|seler|selera|selleri"], ["mustard", "senf|senfsamen|senape|mosterd|gorczyca|gorczycy|senap"], ["lupin", "lupinen|lupini|lupine|lubin|lupiner"], ["molluscs", "weichtiere|molluschi|weekdieren|mieczaki|blotdjur"], ["sulfites", "sulfite|schwefeldioxid|solfiti|anidride solforosa|sulfieten|zwaveldioxide|siarczyny|dwutlenek siarki|sulfiter|svaveldioxid"]];

const allergenAliases = allergenWords.map(([name, pattern]) => ({
  name,
  pattern: new RegExp("(?<![\\p{L}\\p{N}])(?:" + pattern + ")(?![\\p{L}\\p{N}])", "giu")
}));

function fixLanguage(value) {
  let body = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ß/g, "ss").replace(/œ/gi, "oe").replace(/ł/g, "l");

  body = body.replace(/\b(coconut|almond|oat|soy|rice|hemp|cashew|hazelnut|pea|flax|sesame|quinoa)\s+milk\b(?!\s+chocolate\b)/gi, "$1 drink").replace(/\b(?:leche|leite|lait) (?:de |d')?(?:coco|cocco)\b/gi, "coconut drink").replace(/\b(?:leche|leite|lait) (?:de |d')?(?:almendras?|amendoas?|amandes?)\b/gi, "almond drink").replace(/\b(?:leche|leite|lait) (?:de |d')?(?:soja|soya)\b/gi, "soy drink").replace(/\b(?:leche|leite|lait) (?:de |d')?(?:avena|aveia|avoine)\b/gi, "oat drink").replace(/\b(kokosmilch|latte di cocco|kokosmelk|noci di cocco|noix de coco)\b/gi, "coconut").replace(/\b(mandelmilch|amandelmelk|latte di mandorla)\b/gi, "almond drink").replace(/\b(sojamilch|sojamelk|latte di soia)\b/gi, "soy drink").replace(/\b(hafermilch|havermelk|latte di avena)\b/gi, "oat drink");
  body = body.replace(/\bkann\s+([^.;!\n]{1,100}?)\s+enthalten\b/gi, "may contain $1").replace(/\bkan\s+([^.;!\n]{1,100}?)\s+bevatten\b/gi, "may contain $1");
  body = body.replace(/\b(?:kann spuren von|kann enthalten|puo contenere(?: tracce di)?|kan sporen (?:van|bevatten(?: van)?)|kan bevatten|moze zawierac|kan innehalla(?: spar av)?|peut contenir(?: des)?|(?:pode|podem) conter|puede contener(?: trazas de)?)\b/gi, "may contain");
  body = body.replace(/\b(milch|gluten|laktose|lactose|melk|soja|sesam|ei)frei\b/gi, "without $1");
  body = body.replace(/\b(?:frei von|enthalt kein(?:e|en)?|ohne|senza|privo di|priva di|vrij van|zonder|nie zawiera|bez|utan|sans|sem)\b/gi, "without");
  for (const {
    name,
    pattern
  } of allergenAliases) body = body.replace(pattern, name);
  return body;
}

function removeFreeFrom(txt) {
  const wordList = "tree nuts?|milk|dairy|lactose|laktose|eggs?|peanuts?|soy|wheat|gluten|sesame|fish|shellfish|celery|mustard|lupin|molluscs?|sulfites?|fragrance|parfum|formaldehyde";
  const thing = "(?:" + wordList + ")";
  const join = "(?:,|and|or|y|o|e|et|und|oder|en|of|i|lub|och|eller)";
  const bounded = thing + "(?=\\s*(?:$|[.,;:!?)\\n]|" + join + "\\b))";
  return txt.replace(new RegExp("\\b(?:free of|free from|does not contain|without|sin|no added|no)\\s+" + bounded + "(?:\\s*" + join + "\\s*" + bounded + ")*", "gi"), " ").replace(new RegExp("\\b" + thing + "[ -]free\\b", "gi"), " ");
}

export function noAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}


function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); 
}

const extraNames = {
  "en:e202": ["sorbato de potasio"],
  "en:e211": ["benzoato de sodio"],
  "en:e250": ["nitrito de sodio"],
  "en:e251": ["nitrato de sodio"],
  "en:e223": ["metabisulfito de sodio", "sodium metabisulphite"],
  "en:e224": ["metabisulfito de potasio", "potassium metabisulphite"],
  "en:e220": ["sulfur dioxide", "sulphur dioxide"]
};

const preservativeMatchers = preservativeList.map(entry => ({
  ...entry,
  codePattern: new RegExp("(?:^|[^a-z0-9])(?:e\\s*|ins\\s*)" + escapeRegex(entry.code.slice(4)) + "(?![a-z0-9])", "i"),
  patterns: [...new Set([...entry.aliases, ...(extraNames[entry.code] || [])].map(noAccents))].map(alias => new RegExp("(?:^|[^\\p{L}\\p{N}])" + escapeRegex(alias) + "(?![\\p{L}\\p{N}])", "u"))
}));

const preservativeCache = new Map();
export function findPreservatives(p, es = false) {
  const tagList = [...(p.ingredientTags || []), ...(p.additiveTags || [])];
  const key = JSON.stringify([p.ingredients, tagList, es]);
  const cached = preservativeCache.get(key);
  if (cached) return [...cached];
  const body=noAccents(p.ingredients).replace(/\b(?:without|free from|no added|no|sin|sans|sem)\s+[^,;.\n]*/g, " ");
  const tags = new Set(tagList);
  const res = [];
  for(const entry of preservativeMatchers){
    let hit = tags.has(entry.code) || entry.codePattern.test(body);
    if(!hit) {
      for (const pattern of entry.patterns) {
        if(pattern.test(body)) {
          hit = true;
          break;
        }
      }
    }
    if(hit) {
      const nm = es ? entry.es : entry.en;
      if (!res.includes(nm)) res.push(nm)
    }
  }
  if(/\b(?:sulfites?|sulphites?|sulfitos)\b/i.test(body) && !res.some(name => /sul(?:f|ph)|azufre/i.test(name))) res.push(es ? "Sulfitos" : "Sulfites");
  if (/\b(?:bht|butylated hydroxytoluene)\s+(?:is\s+)?added to (?:preserve|retain) freshness\b/i.test(body)) res.push("BHT");
  if (/\b(?:vitamin e(?:\s*\(mixed tocopherols\))?|mixed tocopherols|tocopherols)\s+(?:(?:is|are)\s+)?added to (?:preserve|retain) freshness\b/i.test(body)) res.push(es ? "Vitamina E (conserva la frescura)" : "Vitamin E (keeps food fresh)");
  if(/\b(?:ascorbic acid|vitamin c)(?:\s*\(\s*(?:vitamin c|ascorbic acid)\s*\)?)?\s*\(?\s*(?:(?:is|are)\s+)?(?:added\s+)?to (?:protect|preserve|retain|maintain) freshness\b/i.test(body)) res.push(es ? "Vitamina C (conserva la frescura)" : "Vitamin C (keeps food fresh)");
  preservativeCache.set(key, res);
  if(preservativeCache.size > 100) preservativeCache.delete(preservativeCache.keys().next().value);
  return [...res];
}
export const flavorLink = "https://www.hfpappexternal.fda.gov/scripts/fdcc/index.cfm?set=FoodSubstances";

export function getFlavorTypes(p) {
  const tags = (p.ingredientTags || []).map(x => x.replace(/^[a-z]{2}:/, "").replace(/-/g, " "));
  const body = noAccents(p.ingredients + " " + tags.join(", ")).replace(/\b(?:without|free from|no added|no|sin|sans|sem)\s+[^,;.\n]*/g, " ");
  const natural = /\bnatural(?:\s+(?!and\b|or\b)[\p{L}-]+){0,3}\s+flavou?r(?:ing)?s?\b|\bnatural\s+and\s+artificial\s+flavou?r(?:ing)?s?\b|aromas? naturales?|sabores? naturales?|saborizantes? naturales?|aromes? naturels?|aromas? naturais/iu.test(body);
  const artificial = /\bartificial(?:\s+(?!and\b|or\b)[\p{L}-]+){0,3}\s+flavou?r(?:ing)?s?\b|\bartificial\s+and\s+natural\s+flavou?r(?:ing)?s?\b|aromas? artificial(?:es)?|sabores? artificial(?:es)?|saborizantes? artificial(?:es)?|aromes? artificiels?/iu.test(body);

  const general = /\bflavou?r(?:ing)?s?\b|\baromas?\b|\bsabores?\b|\baromes?\b|\b(?:saborizantes?|aromatizantes?)\b/i.test(body);

  return { natural, artificial, general };
}

export function getNamedFlavors(p, es = false) {
  const tags = (p.ingredientTags || []).map(x => x.replace(/^[a-z]{2}:/, "").replace(/-/g, " "));
  const body = noAccents(p.ingredients + " " + tags.join(" ")).replace(/\b(?:no|without|free from|sin|sans|sem)\s+(?:added\s+)?(?:ethyl[- ]?)?(?:vanillin[ae]?|vanilina|vainillina)\b/gi, " ").replace(/\b(?:ethyl[- ]?)?(?:vanillin[ae]?|vanilina|vainillina)[- ]free\b/gi, " ");
  const ethyl = /\b(?:ethyl[- ]?vanillin[ae]?|etil[- ]?vanilina|etilvanillina|ethylvanilline)\b/gi;
  const nameList = [];
  if(ethyl.test(body)) nameList.push(es ? "Etilvainillina" : "Ethyl vanillin");

  if(/\b(?:vanillin[ae]?|vanilina|vanilline|vainillina)\b/i.test(body.replace(ethyl, " "))) nameList.push(es ? "Vainillina" : "Vanillin");
  return nameList
}

export const claimTypes = ["no-added-preservatives", "no-artificial-preservatives", "no-added-flavors", "no-artificial-flavors", "non-gmo", "bioengineered", "gluten-free"];


const tagToClaim = {
  "no-preservatives": "no-added-preservatives",
  "no-added-preservatives": "no-added-preservatives", 
  "preservative-free": "no-added-preservatives",
  "sin-conservantes": "no-added-preservatives",
  "sin-conservadores": "no-added-preservatives",
  "no-dyes-or-preservatives": "no-added-preservatives",
  "sans-conservateurs": "no-added-preservatives",
  "no-artificial-preservatives": "no-artificial-preservatives",
  "sin-conservantes-artificiales": "no-artificial-preservatives",
  "sans-conservateurs-artificiels": "no-artificial-preservatives",
  "no-flavors": "no-added-flavors",
  "no-flavours": "no-added-flavors",
  "no-added-flavors": "no-added-flavors",
  "no-added-flavours": "no-added-flavors",
  "sin-aromas": "no-added-flavors",
  "sans-aromes": "no-added-flavors",
  "no-artificial-flavors": "no-artificial-flavors",
  "no-artificial-flavours": "no-artificial-flavors",
  "no-artificial-flavourings": "no-artificial-flavors",
  "no-artificial-colours-or-flavours": "no-artificial-flavors",
  "no-artificial-colors-or-flavors": "no-artificial-flavors",
  "non-gmo": "non-gmo",
  "non-gmo-project": "non-gmo",
  "non-gmo-project-verified": "non-gmo",
  "gmo-free": "non-gmo",
  "no-gmos": "non-gmo",
  "sin-ogm": "non-gmo",
  "sans-ogm": "non-gmo",
  bioengineered: "bioengineered",
  "contains-gmos": "bioengineered",
  "genetically-modified": "bioengineered",
  "gluten-free": "gluten-free",
  "no-gluten": "gluten-free",
  "crossed-grain-trademark": "gluten-free",
  "dzg-gluten-free": "gluten-free",
  "sin-gluten": "gluten-free",
  "sans-gluten": "gluten-free"
};


export function findClaims(txt, tags, src, checkedAt = new Date().toISOString()) {
  const kinds = new Set();

  for(const tag of tags) {
    const key = tag.toLowerCase().replace(/^[a-z]{2}:/, "");
    if (tagToClaim[key]) kinds.add(tagToClaim[key])
  }
  const ruleList = [["no-added-preservatives", /\b(?:no (?:added )?preservatives?|preservative[- ]free|sin conservantes(?: anadidos)?|sans conservateurs(?: ajoutes)?)\b/gi], ["no-artificial-preservatives", /\b(?:no artificial preservatives?|sin conservantes artificiales|sans conservateurs artificiels|no artificial (?:colou?rs?[, ]+)?flavou?rs?\s*(?:,?\s*(?:or|and))\s+preservatives?|no artificial colou?rs?\s*(?:,?\s*(?:or|and))\s+preservatives?)\b/gi], ["no-added-flavors", /\b(?:no (?:added )?flavou?r(?:ing)?s?|unflavou?red|sin (?:aromas|saborizantes|sabores)(?: anadidos)?|sans (?:aromes|aromatisants)(?: ajoutes)?)\b/gi], ["no-artificial-flavors", /\b(?:no artificial flavou?r(?:ing)?s?|sin (?:aromas|saborizantes|sabores) artificiales|sans aromes artificiels|no artificial colou?rs?\s*(?:,|or|and)\s*flavou?rs?)\b/gi], ["non-gmo", /\b(?:non[- ]gmo(?: project verified)?|gmo[- ]free|sin (?:ogm|transgenicos)|sans ogm)\b/gi], ["bioengineered", /\b(?:contains (?:a )?bioengineered food ingredients?|contiene ingredientes? (?:geneticamente modificados|bioingenierizados))\b/gi], ["gluten-free", /\b(?:gluten[- ]free|sin gluten|sans gluten)\b/gi]];
  const normalized = txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const [kind, rule] of ruleList) for(const match of normalized.matchAll(rule)) {
    const before = normalized.slice(Math.max(0, match.index - 70), match.index);
    const after = normalized.slice(match.index, match.index + match[0].length + 60).split(/[.!\n]/)[0];
    if (/(?:not|never|cannot|can't|doesn't|does not|no claim|not necessarily|no es|no son|pas|may be|might be|could be|would be)\b[^.!?\n]{0,60}$/i.test(before) || after.includes("?")) continue;
    if ((kind === "no-added-flavors" || kind === "no-added-preservatives") && /^\s+(?:artifici(?:al(?:es)?|els?)|natur(?:al(?:es)?|els?))\b/i.test(normalized.slice(match.index + match[0].length))) continue;
    kinds.add(kind);
  }
  return [...kinds].map(kind => ({ kind, source: src, checkedAt }));
}

export function combineClaims(a = [], b = []) {
  const found = new Map();
  for (const c of [...a, ...b]) {
    const key = c.kind + "|" + c.source.url;
    const old = found.get(key);
    if (!old || Date.parse(c.checkedAt) > Date.parse(old.checkedAt)) found.set(key, c);
  }
  return [...found.values()];
}

export function getClaim(p, kind) {
  return p.labelClaims?.find(c => c.kind === kind && /^https:\/\//.test(c.source?.url || ""));
}

export function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export function timeoutSig(ms) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") return AbortSignal.timeout(ms);
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms)
  return controller.signal;
}


export function isValidBarcode(code) {
  if (!/^(?:\d{8}|\d{12}|\d{13}|\d{14})$/.test(code)) return false;
  const digits = code.slice(0, -1).split("").reverse();
  let total = 0;
  for(let i = 0; i < digits.length; i++) {
    const multiplier = i % 2 === 0 ? 3 : 1;
    total += Number(digits[i]) * multiplier;
  }

  return (10 - total % 10) % 10 === Number(code[code.length - 1]);
}
export function cleanScannedCode(raw, type = "") {
  let code = raw.normalize("NFKC").trim().replace(/[ -]/g, "");
  if (type === "upc_e" && /^[01]\d{7}$/.test(code)) {
    const system = code[0];
    const payload = code.slice(1, 7);
    const last = payload[5];
    const check = code[7];
    let body;
    if (Number(last) <= 2) body = payload.slice(0, 2) + last + "0000" + payload.slice(2, 5);
    else if(last === "3") body = payload.slice(0, 3) + "00000" + payload.slice(3, 5);
    else if (last === "4") body = payload.slice(0, 4) + "00000" + payload[4];
    else body = payload.slice(0, 5) + "0000" + last;
    code = system + body + check;
  } else if (!/^\d+$/.test(code)) {
    const gs1 = code.match(/^(?:\(01\)|\]C101|\]d201)(\d{14})/);
    let digital = null;
    if(/^https?:\/\//i.test(code)) try {
      digital = new URL(code).pathname.match(/\/01\/(\d{14})(?:\/|$)/)?.[1] || null;
    } catch {}
    code = gs1?.[1] || digital || ""
  }
  return isValidBarcode(code) ? code : null;
}

export function sameCode(a, b) {
  return /^\d{8,14}$/.test(a) && /^\d{8,14}$/.test(b) && a.replace(/^0+/, "") === b.replace(/^0+/, "");
}

export function codeVersions(code) {
  const values = [code];
  if (code.length === 12) values.push("0" + code, "00" + code);
  if (code.length === 13) {
    values.push("0" + code);
    if (code.startsWith("0")) values.push(code.slice(1));
  }
  if(code.length === 14 && code.startsWith("0")) {
    values.push(code.slice(1));
    if (code.startsWith("00")) values.push(code.slice(2));
  }

  return [...new Set(values)];
}

export function cleanShopUrl(value) {
  if (typeof value !== "string") return null;
  try {
    const u = new URL(value);
    if (u.protocol !== "https:" || u.username || u.password || u.port) return null;
    const h = u.hostname.replace(/^www\./, "");
    const p = u.pathname
    let valid;
    if(h === "target.com") {
      valid = /^\/p\/.+\/A-\d+$/.test(p)
    } else if (h === "walmart.com") {
      valid = /^\/ip\/(?:[^/]+\/)?\d+\/?$/.test(p);
    } else if(/^amazon\.(?:com|co\.uk|ca|de|fr|es|it)$/.test(h)) {
      valid = /\/(?:dp|gp\/product)\/[A-Z0-9]{10}(?:\/|$)/.test(p);
    } else if(h === "vitacost.com") {
      valid = /^\/products\/[^/]+\/?$/.test(p);
    } else if (h === "walgreens.com") {
      valid = /^\/store\/c\/.+\/ID=\d+-product$/.test(p);
    } else {
      valid = false;
    }
    if(!valid) return null;
    return u.protocol + "//" + u.host + u.pathname;
  } catch (err) {
    return null;
  }
}

export function getShopLink(p) {
  const offer = p.shop;
  if (!offer || !sameCode(offer.code, p.code)) return null;
  return cleanShopUrl(offer.url);
}

export function samePage(a, b){
  const x = cleanShopUrl(a);
  const y = cleanShopUrl(b);
  if(!x || !y) return false;
  const u = new URL(x);

  const v = new URL(y);

  const h = u.hostname.replace(/^www\./, "");
  if(h !== v.hostname.replace(/^www\./, "")) return false;
  if(h === "target.com") return u.pathname.match(/A-\d+$/)?.[0] === v.pathname.match(/A-\d+$/)?.[0];
  if (h === "walmart.com") return u.pathname.match(/\d+\/?$/)?.[0] === v.pathname.match(/\d+\/?$/)?.[0];

  return u.pathname === v.pathname;
}

export const ukLabelLink = "https://www.gov.uk/government/publications/nutrition-labelling";


export const fdaAdditivesLink = "https://www.fda.gov/food/food-ingredients-packaging/food-additives-and-gras-ingredients-information-consumers";
export const gmoLink = "https://www.ams.usda.gov/rules-regulations/be/consumers";

const drinkCats = new Set(["en:beverages", "en:non-alcoholic-beverages", "en:carbonated-drinks", "en:soft-drinks", "en:sodas", "en:fruit-juices", "en:fruit-nectars", "en:vegetable-juices", "en:waters", "en:carbonated-waters", "en:mineral-waters", "en:spring-waters", "en:milks", "en:plant-milks", "en:plant-based-milks", "en:iced-teas", "en:energy-drinks"]);

export function hasDrinkCat(cats) {
  return !cats.some(c => /powders?|dried|dehydrated|mixes|syrups?|concentrates?/.test(c)) && cats.some(c => drinkCats.has(c));
}

export function isDrink(p) {
  return p.nutritionBasis === "100ml" || hasDrinkCat(p.categories);
}

export function getNutrient(p, key) {
  const raw = p.nutrients[key + "_100g"] ?? (key === "salt" && p.nutrients.sodium_100g !== undefined && p.nutrients.sodium_100g !== null && String(p.nutrients.sodium_100g).trim() !== "" ? Number(p.nutrients.sodium_100g) * 2.5 : undefined);
  if (raw === undefined || raw === null || String(raw).trim() === "") return null;
  const n = Number(raw);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

export function getServingNutrient(p, key) {
  if (!p.serving?.trim()) return null;
  const raw = p.nutrients[key + "_serving"] ?? (key === "salt" && p.nutrients.sodium_serving !== undefined && p.nutrients.sodium_serving !== null && String(p.nutrients.sodium_serving).trim() !== "" ? Number(p.nutrients.sodium_serving) * 2.5 : undefined);
  if(raw === undefined || raw === null || String(raw).trim() === "") return null;
  const n = Number(raw);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

export function howHigh(p, key) {
  const value = getNutrient(p, key);
  if (value === null) return "unknown";
  if (isDrink(p) && p.nutritionBasis !== "100ml") return "unknown";
  const limits = isDrink(p) ? {
    sugars: [2.5, 11.25],
    salt: [0.3, 0.75],
    "saturated-fat": [0.75, 2.5]
  } : {
    sugars: [5, 22.5],
    salt: [0.3, 1.5],
    "saturated-fat": [1.5, 5]
  };
  if (value > limits[key][1]) {
    return "high";
  }
  if (value > limits[key][0]) {
    return "medium";
  }
  return "low";
}
export function needsSwap(score) {
  return score !== null && score <= 3;
}

const FDA_URL = "https://www.fda.gov/";

function makeSource(name, url) {
  return { name, url };
}
const allergyLink = makeSource("Food Standards Agency · Allergens", "https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses");

const cosmeticLink = makeSource("FDA · Allergens in cosmetics", FDA_URL + "cosmetics/cosmetic-ingredients/allergens-cosmetics");

const fdaNutritionLink = makeSource("FDA · Nutrition Facts", FDA_URL + "food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label");
export const allergenRegex = Object.entries({
  Milk: /\b(milk|whey|caseinate|casein|buttermilk|lactose|lait)\b/i,
  Egg: /\b(eggs?|albumen|ovalbumin)\b/i,
  Peanut: /\b(peanuts?|groundnuts?)\b/i,
  "Tree nuts": /\b(almonds?|hazelnuts?|walnuts?|cashews?|pistachios?|pecans?|macadamias?|brazil nuts?|tree ?nuts?)\b/i,
  Soy: /\b(soy|soya|soybeans?)\b/i,
  Wheat: /\b(wheat|semolina|spelt|durum|farina)\b/i,
  Fish: /\b(fish|salmon|tuna|cod|anchovy|anchovies)\b/i,
  Shellfish: /\b(shellfish|shrimp|prawns?|crab|lobster|crayfish)\b/i,
  Sesame: /\b(sesame|tahini)\b/i
});


allergenRegex.push(["Gluten", /\b(gluten|wheat|semolina|spelt|durum|barley|rye|triticale|cebada|centeno)\b/i], ["Sulfites", /\b(sulfites?|sulphites?|(?:meta)?bisulfites?|(?:meta)?bisulphites?|sulfitos|sulfur dioxide|sulphur dioxide)\b/i], ["Celery", /\b(celery|celeriac|apio)\b/i], ["Mustard", /\b(mustard|mostaza)\b/i], ["Lupin", /\b(lupin|lupine|lupino|altramuz|altramuces)\b/i], ["Molluscs", /\b(molluscs?|mollusks?|mussels?|oysters?|squid|octopus|clams?|scallops?|moluscos|mejillones|ostras|calamar|pulpo|almejas)\b/i]);


const warningRules = [{
  id: "fragrance",
  name: "Fragrance",
  re: /\b(parfum|fragrance)\b/i,
  level: "medium",
  effect: "Some fragrance ingredients can trigger skin irritation or allergy in sensitive people.",
  action: "If fragrance bothers you, look for a fragrance-free option.",
  source: cosmeticLink,
  food: false
}, {
  id: "fragrance-allergens",
  name: "Fragrance allergens",
  re: /\b(limonene|linalool|citral|geraniol|eugenol|coumarin|cinnamal|hexyl cinnamal)\b/i,
  level: "medium",
  effect: "These fragrance ingredients can trigger allergic skin reactions in sensitive people.",
  action: "Avoid ingredients you know you react to.",
  source: cosmeticLink,
  food: false
}, {
  id: "mi",
  name: "Isothiazolinone preservatives", 
  re: /\b(methylisothiazolinone|methylchloroisothiazolinone|benzisothiazolinone)\b/i,
  level: "medium",
  effect: "Can cause allergic skin reactions.",
  action: "Avoid if you have a known allergy to these preservatives.",
  source: cosmeticLink,
  food: false
}, {
  id: "formaldehyde",
  name: "Formaldehyde",
  re: /\bformaldehyde\b/i,
  level: "high",
  effect: "Can irritate eyes and airways. Long-term inhalation at sufficient levels can increase cancer risk; a label does not measure exposure.",
  action: "Follow the product’s ventilation and handling directions.",
  source: makeSource("EPA · Formaldehyde", "https://www.epa.gov/formaldehyde/facts-about-formaldehyde"),
  food: false
}, {
  id: "releaser",
  name: "Formaldehyde-releasing preservative",
  re: /\b(dmdm hydantoin|quaternium[- ]?15|imidazolidinyl urea|diazolidinyl urea|bronopol)\b/i,
  level: "medium",
  effect: "May release small amounts of formaldehyde and trigger skin reactions in people allergic to it.", 
  action: "Avoid if you have a known formaldehyde allergy.",
  source: cosmeticLink,
  food: false
}, {
  id: "bleach",
  name: "Chlorine bleach",
  re: /\b(sodium hypochlorite|calcium hypochlorite)\b/i,
  level: "high",
  effect: "Can irritate or burn eyes and skin. Mixing with acids or ammonia can release dangerous gas.",
  action: "Never mix with other cleaners. Follow dilution and ventilation directions.",
  source: makeSource("CDC · Bleach", "https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html"),
  food: false
}, {
  id: "ammonia",
  name: "Ammonia",
  re: /\b(ammonia|ammonium hydroxide)\b/i,
  level: "high",
  effect: "Vapors can irritate eyes and lungs. Mixing with bleach can release dangerous gas.",
  action: "Use ventilation and never mix with bleach.",
  source: makeSource("CDC · Ammonia", "https://www.cdc.gov/chemical-emergencies/chemical-fact-sheets/ammonia.html"),
  food: false
}, {
  id: "lye",
  name: "Alkaline ingredient",
  re: /\b(sodium hydroxide|potassium hydroxide)\b/i,
  level: "medium",
  effect: "Concentrated forms can cause burns. This ingredient alone does not establish the strength or acidity of the finished product.",
  action: "Follow the finished product’s warnings; do not assume a formulated soap is corrosive.",
  source: makeSource("NIOSH · Sodium hydroxide", "https://www.cdc.gov/niosh/npg/npgd0565.html"),
  food: false
}, {
  id: "methanol",
  name: "Methanol",
  re: /\bmethanol\b/i,
  level: "high",
  effect: "Swallowing it can cause severe poisoning, blindness, or death. Substantial skin or breathing exposure can also be harmful.",
  action: "Follow handling warnings. Do not use methanol-containing products as hand sanitizer.",
  source: makeSource("NIOSH · Methyl alcohol", "https://www.cdc.gov/niosh/npg/npgd0397.html"),
  food: false
}, {
  id: "glycol",
  name: "Ethylene glycol",
  re: /\bethylene glycol\b/i,
  level: "high",
  effect: "Swallowing it can cause life-threatening poisoning, including kidney injury.",
  action: "Keep away from children and pets and follow handling directions.",
  source: makeSource("NIOSH · Ethylene glycol", "https://www.cdc.gov/niosh/npg/npgd0272.html"),
  food: false
}, {
  id: "toluene",
  name: "Toluene",
  re: /\btoluene\b/i,
  level: "medium",
  effect: "Breathing enough vapor can cause headache, dizziness, and nervous system effects.",
  action: "Use ventilation and follow protective instructions.",
  source: makeSource("NIOSH · Toluene", "https://www.cdc.gov/niosh/npg/npgd0619.html"),
  food: false
}, {
  id: "ptfe",
  name: "Nonstick coating: overheating",
  re: /\b(ptfe|polytetrafluoroethylene)\b/i,
  level: "info",
  effect: "Severely overheated PTFE coatings can release harmful fumes. The coating name does not establish your exposure.", 
  action: "Follow temperature limits and avoid heating an empty nonstick pan.",
  source: makeSource("BfR · Nonstick cookware", "https://www.bfr.bund.de/en/press-release/forever-chemicals-pfas-in-the-frying-pan-compact-insights/"),
  food: false
}, {
  id: "sulfites",
  name: "Sulfites",
  re: /\b(sulph?ites?|sulfites?|sodium metabisulfite|potassium metabisulfite|sulfur dioxide)\b/i,
  level: "medium",
 effect: "Can cause reactions in sensitive people, including some people with asthma.",
  action: "Avoid if you know you are sensitive to sulfites.",
  source: makeSource("FDA · Food additives", FDA_URL + "food/food-additives-petitions/food-additive-status-list"),
  food: true
}, {
  id: "aspartame",
  name: "Aspartame: PKU warning",
  re: /\baspartame\b/i,
  level: "info",
  effect: "Provides phenylalanine, which people with phenylketonuria (PKU) need to restrict. This does not mean it is unsafe for everyone.",
  action: "If you have PKU, follow your prescribed phenylalanine limits.",
  source: makeSource("FDA · Sweeteners", FDA_URL + "food/food-additives-petitions/aspartame-and-other-sweeteners-food"),
  food: true
}, {
  id: "polyols",
  name: "Sugar alcohols",
  re: /\b(sorbitol|mannitol|xylitol|maltitol|lactitol|isomalt)\b/i,
  level: "info",
  effect: "Larger amounts can cause gas, bloating, or diarrhea.",
  action: "Check serving size if these ingredients upset your stomach.",
  source: makeSource("FDA · Sweeteners", FDA_URL + "food/food-additives-petitions/additional-information-about-high-intensity-sweeteners-permitted-use-food-united-states"),
  food: true
}];


function cleanTag(str) {
  return str.replace(/^[a-z]{2}:/, "").replace(/-/g, " ");
}
function cutCompanyText(txt) {
  return txt.replace(/\\r\\n|\\n|\\r/g, "\n").replace(/\b(?:manufactured|distributed|produced|packed)\s+(?:for|by)\b[\s\S]*?(?=\b(?:ingredients|ingredientes|contains|may contain|allergy advice|allergen information)\b|$)/gi, " ");
}

function toEnglishWords(value){
  return fixLanguage(value).replace(/\bpeut contenir(?: des)?\b|\b(?:pode|podem) conter\b/gi, "may contain").replace(/\bfruits? a coque\b/gi, "tree nuts").replace(/\bnoix de coco\b/gi, "coconut").replace(/\b(?:oeufs?|ovos?)\b/gi, "egg").replace(/\b(?:ble|froment)\b/gi, "wheat").replace(/\b(?:leite|lait)\b/gi, "milk").replace(/\b(?:soja|soya)\b/gi, "soy").replace(/\b(?:arachides?|amendoim)\b/gi, "peanut").replace(/\bnoisettes?\b/gi, "hazelnut").replace(/\bamandes?\b/gi, "almond").replace(/\bnoix\b/gi, "walnut").replace(/\b(?:sesame|gergelim)\b/gi, "sesame").replace(/\b(?:sulfites?|sulfitos)\b/gi, "sulfites").replace(/\b(?:sans|sem)\b/gi, "without").replace(/\bmani\b/gi, "peanut");
}

export function checkFood(p, avoid = []) {
  const food = p.kind === "food";
  const spanish = toEnglishWords(p.ingredients + "\n" + (p.allergenStatement || "")).replace(/\bleche\b/gi, "milk").replace(/\bhuevos?\b/gi, "egg").replace(/\bcacahuetes?\b|\bmaní\b/gi, "peanut").replace(/\bavellanas?\b/gi, "hazelnut").replace(/\balmendras?\b/gi, "almond").replace(/\bnueces\b/gi, "walnut").replace(/\bsoja\b/gi, "soy").replace(/\btrigo\b/gi, "wheat").replace(/\bsesamo\b/gi, "sesame").replace(/\bpuede contener\b/gi, "may contain").replace(/\bsin leche\b/gi, "milk free");
  const txt = removeFreeFrom(cutCompanyText(spanish.replace(/\blacteos\b/gi, "milk").replace(/\bpescado\b/gi, "fish").replace(/elaborado en equipos que procesan/gi, "made in a facility that processes")));
  const concerns = [];
  const allergenTagNames = {
    nuts: "Tree nuts",
    soybeans: "Soy",
    eggs: "Egg",
    peanuts: "Peanut",
    milk: "Milk",
    wheat: "Wheat",
    fish: "Fish",
    crustaceans: "Shellfish",
    sesame: "Sesame",
    "sesame-seeds": "Sesame",
    "sesame seeds": "Sesame",
    gluten: "Gluten",
    celery: "Celery",
    mustard: "Mustard",
    lupin: "Lupin",
    molluscs: "Molluscs",
    "sulphur dioxide and sulphites": "Sulfites",
    sulphites: "Sulfites",
    sulfites: "Sulfites"
  };

  function canonical(v) {
    const key = cleanTag(v).toLowerCase();
    if (allergenTagNames[key]) return allergenTagNames[key];
    return cleanTag(v);
  }
  const a = food ? p.allergens.map(canonical) : [];
  const warning = /\b(?:may contain|traces of|made in a facility|manufactured in a facility|processed in a facility|in a facility that also processes|contains traces)\b/i.exec(txt);
  const section = warning ? txt.slice(0, warning.index) : txt;
  const traceText = warning ? txt.slice(warning.index) : "";

  const additiveNames = {
    "en:e951": "aspartame",
    "en:e420": "sorbitol",
    "en:e421": "mannitol",
    "en:e953": "isomalt",
    "en:e965": "maltitol",
    "en:e966": "lactitol",
    "en:e967": "xylitol"
  };
  let tagBits = [];
  for (const tag of p.ingredientTags || []) {
    tagBits.push(toEnglishWords(cutCompanyText(cleanTag(tag))));
  }

  for (const pres of findPreservatives(p)) tagBits.push(pres);
  for (const tag of p.additiveTags || []) {
    tagBits.push(additiveNames[tag] || "");
  }
  if (p.labels.includes("en:with-sulfites")) tagBits.push("sulfites");

  const tagText = removeFreeFrom(tagBits.join(", "));

  let allergenNames = []
  let traceNames = [];
  if(food) {
    let allNames = [...a];
    for (const [n, r] of allergenRegex) {
      if (r.test(section) || r.test(tagText) && !r.test(traceText)) allNames.push(n);
    }
    for(const str of allNames) {
      const nice = str[0].toUpperCase() + str.slice(1)
      if (!allergenNames.includes(nice)) allergenNames.push(nice);
    }
    let allTraces = p.traces.map(canonical);
    for (const [n, r] of allergenRegex) {
      if(r.test(traceText)) allTraces.push(n);
    }
    for (const x of allTraces) {
      if(!traceNames.includes(x)) traceNames.push(x)
    }
  }
  for(const rule of warningRules) {
    if (rule.food !== food) continue;
    const labelMatches = [...(food ? txt : removeFreeFrom(txt + " " + (p.warnings || ""))).matchAll(new RegExp(rule.re.source, "gi"))].map(m => m[0]);
    let matches;
    if (labelMatches.length) {
      matches = labelMatches;
    } else if (food) {
      matches = [...tagText.matchAll(new RegExp(rule.re.source, "gi"))].map(m => m[0]);
    }else {
      matches = [];
    }
    if (!matches.length) continue;
    let distinct = [];
    for (const m of matches) {
      if(!distinct.includes(m)) distinct.push(m);
    }
    let quoted = [];
    for (const m of distinct) quoted.push("“" + m + "”");
    let why = "";
    if(labelMatches.length == 0){
      why = "The product record identifies " + quoted.join(", ") + ".";
    } else {
      let where = "the published ingredient or material list";
      if (p.match === "label") where = "the label text you confirmed";
      why = quoted.join(", ") + " " + (distinct.length > 1 ? "appear" : "appears") + " in " + where + ".";
    }
    concerns.push({
      id: rule.id,
      title: rule.name,
      level: rule.level,
      reason: why,
      effect: rule.effect,
      action: rule.action,
      source: rule.source,
      evidence: p.match === "label" ? "Label text" : "Listed ingredient"
    });
  }

  if (p.warnings && /\b(causes (?:severe )?(?:skin burns|eye damage)|fatal if swallowed|highly flammable|provoca quemaduras|mortal en caso de ingesti[oó]n|muy inflamable)\b/i.test(p.warnings)) concerns.push({
    id: "package-warning",
    title: "Important package warning",
    level: "high",
    reason: "The package includes a serious handling warning.",
    effect: p.warnings,
    action: "Follow the package directions and keep it away from children.",
    source: p.sources[0] || makeSource("UNECE · Product hazard labels", "https://unece.org/transport/dangerous-goods/ghs-pictograms"),
    evidence: "Package warning"
  });
  const hits = [...allergenNames, ...traceNames].filter(n => avoid.some(x => n.toLowerCase() === x.toLowerCase()));

  if(hits.length) concerns.unshift({
    id: "allergen-match",
    title: `Your avoid list: ${[...new Set(hits)].join(", ")}`,
    level: "high",
    reason: "The product declares or may contain an allergen you chose to avoid.",
    effect: "In someone with this allergy, exposure can cause a reaction, including a severe reaction.",
    action: "Avoid this product if you have this allergy. Follow your allergy plan.",
    source: allergyLink,
    evidence: "Your preference + product information"
  });
  const vals = [{
    key: "added-sugars",
    title: "Added sugar",
    dv: 50,
    effect: "High added-sugar intake can make it harder to meet nutritional needs within your calorie needs."
  }, {
    key: "sodium",
    title: "Sodium",
    dv: 2.3,
    effect: "Regularly eating too much sodium can raise blood pressure."
  }, {
    key: "saturated-fat",
    title: "Saturated fat",
    dv: 20,
    effect: "High saturated-fat intake can raise LDL cholesterol."
  }];

  if (food) for(const {
    key,
    title,
    dv,
    effect
  } of vals) {
    const raw = p.nutrients[key + "_serving"];
    if(raw === undefined) continue;
    const v = Number(raw);
    if(!Number.isFinite(v)) continue;
    const pct = Math.round(v / dv * 100);
    if (pct >= 20) concerns.push({
      id: key,
      title: `High ${title.toLowerCase()}`,
      level: "medium",
      reason: `${key === "sodium" ? Math.round(v * 1000) + " mg" : v + " g"} per listed serving (${pct}% of the adult Daily Value).`,
      effect,
      action: "Compare serving sizes and consider an option with less.",
      source: fdaNutritionLink,
      evidence: "Published nutrition facts"
    });
  }

  const grade = p.nutritionGrade?.toLowerCase();
  let score = food && grade && /^[abcde]$/.test(grade) ? 5 - "abcde".indexOf(grade) : null;
  let basis = score ? "Nutrition rating from the source’s Nutri-Score (A = 5, B = 4, C = 3, D = 2, E = 1). It does not measure chemical safety or allergy risk." : "A rating needs enough verified information. Add the ingredient or nutrition label to continue."; 
  if(food && score === null) {
    const levels = ["sugars", "saturated-fat", "salt"].map(key => howHigh(p, key));
    if(levels.every(level => level !== "unknown")) {
      let points = 0;
      for (const level of levels) {
        if (level === "high") points += 2;
        else if (level === "medium") points += 1;
      }
      score = Math.max(1, 5 - Math.ceil(points * 2 / 3));
      basis = "Scan Safe nutrition comparison from sugar, saturated fat and salt. Uses food or drink color thresholds from UK front-of-pack guidance, not an official Nutri-Score or a medical safety test.";
    }
  }
  if (food) {
    for(const [key, title, effect] of [["sugars", "High sugar", "Frequent high-sugar choices can make a balanced diet harder."], ["salt", "High salt", "Eating too much salt regularly can raise blood pressure."], ["saturated-fat", "High saturated fat", "Eating too much saturated fat regularly can raise cholesterol."]]) {
      if(howHigh(p, key) === "high" && !concerns.some(c => c.id === key)) concerns.push({
        id: key + "-100g",
        title,
        level: "medium",
        reason: `${getNutrient(p, key)?.toFixed(2)} g per ${p.nutritionBasis === "100ml" ? "100 ml" : "100 g"}, above the high-amount cutoff.`,
        effect,
        action: "Compare the same portion and choose an option with less.",
        source: makeSource("UK · Food and drink labels", ukLabelLink),
        evidence: "Nutrition label"
      });
    }
  }
  if (!food && concerns.length) {
    score = concerns.some(c => c.level === "high") ? 2 : concerns.some(c => c.level === "medium") ? 3 : 4;
    basis = "Ingredient concern rating: 2 = a handling concern, 3 = sensitivity concerns, 4 = a use-specific precaution. It does not measure actual exposure or overall product safety.";
  }
  if (food && score === null && concerns.length) {
    score = concerns.some(c => c.level === "high") ? 2 : concerns.some(c => c.level === "medium") ? 3 : 4;
    basis = "Label concern score only. Nutrition amounts are not available; this is not a nutrition rating."
  }

  if(p.categories.includes("drug")) {
    score = null;
    basis = "Medicines need a use-specific check. Read the drug label and ask a pharmacist about suitability.";
  }

  if (hits.length) {
    score = 1;
    basis = "Rated 1 because a declared or possible allergen matches your avoid list. This rating reflects your selections."
  }
  return {
    score,
    scoreLabel: score === null ? "Continue with the label" : score <= 2 ? "Higher concern" : score === 3 ? "Take a closer look" : "Lower concern",
    scoreBasis: basis,
    concerns,
    allergenNames,
    traceNames,
    declaredIngredients: p.ingredients.split(/[,;\n]/).map(x => x.trim()).filter(Boolean),
    checks: [p.ingredients ? "Ingredient list found" : "Add a label scan for ingredients", food && grade ? "Nutrition rating found" : "", food ? allergenNames.length ? "Declared allergens found" : "No allergens declared in the record" : ""].filter(Boolean)
  };
}

function checkBarcode(code) {
  if(!/^(\d{8}|\d{12,14})$/.test(code)) return false;
  let total = 0;
  const data = code.slice(0, -1).split("").reverse();
  for (let i = 0; i < data.length; i++) total += Number(data[i]) * (i % 2 === 0 ? 3 : 1);
  return (10 - total % 10) % 10 === Number(code[code.length - 1]);
}

export function findCheckedRecord(code, raw) {
  const entry = checkedRecords.find(r => sameCode(String(r.record.code), code));
  if (!entry) return null;
  if (entry.photos && (!raw || !Object.entries(entry.photos).every(([key, v]) => String(raw.images?.[key]?.imgid) === v.imgid && String(raw.images?.[key]?.rev) === v.rev))) return null;
  return entry;
}
export function nonFoodInfo(code) {
  return sameCode(code, "0056100081074") ? {
    name: "Purely White Fluoride-Free Toothpaste · Zen Peppermint",
    brand: "Burt’s Bees",
    source: makeRecordSource("Burt’s Bees · package photo", offPhoto("0056100081074", "front_en.3.full.jpg"), "reviewed-label-photo")
  } : null;
}
export function shopPagesFor(code) {
  return shopList.filter(p => sameCode(code, p.code)).map(p => p.url);
}

export function storeFoods() {
  const checkedAt = "2026-10-25T15:00:00.000Z";
  const url = shopList[3].url;
  const products = [{
    code: "051651092180",
    name: "Raw Creamy Almond Butter · 16 oz",
    brand: "MaraNatha",
    kind: "food",
    category: "en:almond-butters",
    categories: ["en:almond-butters", "en:nut-butters"],
    ingredients: "Raw almonds, almond oil. Contains: almonds. May contain peanuts and other tree nuts.",
    allergens: ["en:nuts"],
    traces: ["en:peanuts", "en:nuts"],
    labels: ["en:non-gmo", "en:gluten-free"],
    nutritionBasis: "100g", 
    nutrients: {
      "energy-kcal_100g": 190 / 32 * 100,
      sugars_100g: 1 / 32 * 100,
      "saturated-fat_100g": 1.5 / 32 * 100,
      sodium_100g: 0,
      fiber_100g: 4 / 32 * 100,
      proteins_100g: 6 / 32 * 100
    },
    serving: "32 g",
    sources: [{
      name: "MaraNatha · product and nutrition",
      url: "https://www.maranathafoods.com/product/raw-almond-butter-creamy/",
      updated: "2026-10-25"
    }, { name: "Vitacost · exact product", url, updated: "2026-10-25" }],
    shop: {
      url,
      retailer: "Vitacost",
      code: "051651092180",
      checkedAt
    },
    match: "selected"
  }, ...moreStoreFoods];
  return products.filter(p => getShopLink(p));
}

const nameCategories = [{
  pattern: /\b(bread|pan|pain|brot)\b/i,
  category: "en:breads"
}, {
  pattern: /\b(cereals?|cereales)\b/i,
  category: "en:breakfast-cereals"
}, {
  pattern: /\b(yogurt|yoghurt|yogur)\b/i,
  category: "en:yogurts"
}, {
  pattern: /\b(milk|leche)\b/i,
  category: "en:milks"
}, {
  pattern: /\b(chocolate)\b/i,
  category: "en:chocolates"
}, {
  pattern: /\b(biscuits?|cookies|galletas)\b/i,
  category: "en:biscuits"
}, {
  pattern: /\b(pasta|spaghetti)\b/i,
  category: "en:pastas"
}];

export function guessCategory(name) {
  return nameCategories.find(thing => thing.pattern.test(name))?.category;
}

export const dietOptions = [{ id: "vegetarian", en: "Vegetarian", es: "Vegetariano" }, { id: "vegan", en: "Vegan", es: "Vegano" }, { id: "palm-oil-free", en: "No palm oil", es: "Sin aceite de palma" }, {
  id: "gluten-free", 
  en: "Gluten-free",
  es: "Sin gluten"
}, { id: "lactose-free", en: "Lactose-free", es: "Sin lactosa" }, { id: "pork-free", en: "No pork", es: "Sin cerdo" }, {
  id: "soy-free",
  en: "Soy-free",
  es: "Sin soja"
}, { id: "sulfite-free", en: "Sulfite-free", es: "Sin sulfitos" }];


const dietRegex = {
  vegetarian: /\b(beef|pork|chicken|fish|salmon|tuna|anchov(?:y|ies)|shrimp|gelatin|gelatine|lard|carne|pollo|pescado|cerdo|gelatina|manteca de cerdo)\b/i,
  vegan: /\b(beef|pork|chicken|fish|salmon|tuna|anchov(?:y|ies)|shrimp|gelatin|gelatine|lard|milk|whey|casein|eggs?|honey|butter|cream|cheese|carne|pollo|pescado|cerdo|gelatina|leche|huevos?|miel|mantequilla|queso)\b/i,
  "palm-oil-free": /\b(palm oil|palm fat|palm kernel|aceite de palma|grasa de palma)\b/i,
  "gluten-free": /\b(wheat|barley|rye|spelt|triticale|semolina|trigo|cebada|centeno|espelta)\b/i,
  "lactose-free": /\b(lactose|lactosa|milk|leche|whey|suero de leche)\b/i,
  "pork-free": /\b(pork|lard|bacon|ham|porcine|cerdo|jam[oó]n|tocino)\b/i,
  "soy-free": /\b(soy|soya|soybeans?|soja)\b/i,
  "sulfite-free": /\b(sulfites?|sulphites?|sulfitos?|sulfur dioxide|sulphur dioxide|metabisulf(?:ite|ito)s?|e\s*22[0-8])\b/i
};

const dietLabels = {
  vegetarian: /^(vegetarian|vegetariano|vegetarien|vegan|vegano)$/,
  vegan: /^(vegan|vegano)$/,
  "palm-oil-free": /^(palm-oil-free|no-palm-oil|sin-aceite-de-palma)$/,
  "gluten-free": /^(gluten-free|no-gluten|sin-gluten|sans-gluten)$/,
  "lactose-free": /^(lactose-free|sin-lactosa|sans-lactose)$/,
  "pork-free": /^(pork-free|sin-cerdo|vegan|vegetarian)$/,
  "soy-free": /^(soy-free|soya-free|sin-soja)$/, 
  "sulfite-free": /^(sulfite-free|sulphite-free|sin-sulfitos)$/
};
export function checkDiet(p, selected, es = false) {
  const tags = p.labels.map(x => x.replace(/^[a-z]{2}:/, ""));
  const ingredients = p.ingredients.replace(/\b(?:soy|soya|gluten|lactose|palm[- ]oil|pork)[ -]free\b|\b(?:no|without) (?:palm oil|pork)\b|\bsin (?:soja|gluten|lactosa|aceite de palma|cerdo)\b/gi, "");
  return selected.map(id => {
    let declared = tags.some(tag => dietLabels[id].test(tag));
    if(id === "gluten-free" && getClaim(p, "gluten-free")) declared = true;
    const checkedIngredients = id === "vegan" ? ingredients.replace(/\b(?:peanut|almond|cashew|hazelnut|cocoa|shea) butter\b|\b(?:coconut|oat|almond|soy|rice) milk\b|\b(?:coconut|oat|soy) cream\b/gi, "plant ingredient") : ingredients;
    const hit = checkedIngredients.match(dietRegex[id]);
    let conflict = false;
    if (hit && !(declared && (id === "gluten-free" || id === "lactose-free"))) conflict = true;
    let status = "unknown";
    let detail = es ? "La fuente no incluye una declaración sobre esta preferencia." : "The source record contains no claim about this preference.";
    if(conflict) {
      status = "conflict";
      detail = es ? "En los ingredientes: " + hit[0] + "." : "Listed ingredient: " + hit[0] + ".";
    } else if (declared) {
      status = "declared";
      detail = es ? "Declarado en el registro de la fuente." : "Declared in the source record.";
    }

    return { id: id, status: status, detail: detail };
  });
}


function fitsDiet(p, selected) {
  return checkDiet(p, selected).every(c => c.status === "declared");
}

export function cleanDiet(value) {
  return Array.isArray(value) ? dietOptions.filter(p => value.includes(p.id)).map(p => p.id) : [];
}
const foodUses = [{
  id: "spread-sweet",
  en: "a nut or sweet spread for toast",
  es: "una crema de frutos secos o dulce para tostadas",
  categories: ["en:nut-butters", "en:peanut-butters", "en:almond-butters", "en:chocolate-spreads", "en:hazelnut-spreads", "en:fruit-spreads"]
}, {
  id: "spread-savory",
  en: "a savory spread or dip",
  es: "una crema salada para untar",
  categories: ["en:hummus", "en:guacamoles", "en:savoury-spreads"]
}, {
  id: "snack",
  en: "a ready-to-eat snack",
  es: "un tentempié listo para comer",
  categories: ["en:snacks", "en:nuts", "en:plain-yogurts", "en:cheeses"]
}, {
  id: "breakfast",
  en: "a breakfast cereal or porridge",
  es: "cereales o avena para el desayuno",
  categories: ["en:breakfast-cereals", "en:oat-flakes", "en:porridges"]
}, {
  id: "bread",
  en: "bread for toast or sandwiches",
  es: "pan para tostadas o sándwiches",
  categories: ["en:breads"]
}, {
  id: "drink",
  en: "a refreshing drink",
  es: "una bebida refrescante",
  categories: ["en:waters", "en:carbonated-waters", "en:unsweetened-beverages", "en:iced-teas", "en:soft-drinks", "en:fruit-juices"]
}, {
  id: "milk",
  en: "milk or a milk alternative",
  es: "leche o una alternativa a la leche",
  categories: ["en:milks", "en:plant-milks"]
}, {
  id: "pasta",
  en: "a pasta meal base",
  es: "pasta como base de una comida",
  categories: ["en:pastas"]
}, {
  id: "sauce",
  en: "a sauce for a meal",
  es: "una salsa para una comida",
  categories: ["en:sauces"]
}, {
  id: "ketchup",
  en: "ketchup as a condiment",
  es: "kétchup como condimento",
  categories: ["en:ketchup"]
}, {
  id: "dressing",
  en: "a salad dressing",
  es: "un aderezo para ensaladas",
  categories: ["en:salad-dressings"]
}, {
  id: "hot-sauce",
  en: "a hot sauce",
  es: "una salsa picante",
  categories: ["en:hot-sauces"]
}];

export function getFoodUse(p) {
  const categoryRules = [{
    id: "spread-savory",
    pattern: /^en:(?:hummus|houmous|guacamoles|savoury-spreads|savory-spreads|cheese-spreads|tapenades)$/
  }, {
    id: "spread-sweet",
    pattern: /^en:(?:nut-butters|peanut-butters|almond-butters|chocolate-spreads|hazelnut-spreads|fruit-spreads|jams)$/
  }, {
    id: "breakfast",
    pattern: /^en:(?:breakfast-cereals|porridges|oat-flakes|mueslis|granolas)$/
  }, {
    id: "bread",
    pattern: /^en:(?:breads|white-breads|wholemeal-breads|sandwich-breads|sliced-breads)$/
  }, {
    id: "ketchup",
    pattern: /^en:ketchups?$/
  }, {
    id: "dressing",
    pattern: /^en:(?:salad-dressings|mayonnaises|vinaigrettes)$/
  }, {
    id: "hot-sauce",
    pattern: /^en:hot-sauces$/
  }, {
    id: "sauce",
    pattern: /^en:(?:pasta-sauces|tomato-sauces|cooking-sauces|pestos)$/
  }, {
    id: "pasta",
    pattern: /^en:(?:pastas|dry-pastas|spaghetti|macaroni)$/
  }, {
    id: "milk",
    pattern: /^en:(?:milks|plant-milks|plant-based-milks|flavoured-milks|chocolate-milks|soy-milks|almond-milks|oat-milks)$/
  }, {
    id: "drink",
    pattern: /^en:(?:waters|carbonated-waters|mineral-waters|spring-waters|soft-drinks|carbonated-drinks|sodas|fruit-juices|fruit-nectars|vegetable-juices|iced-teas|unsweetened-beverages)$/
  }, {
    id: "snack",
    pattern: /^en:(?:cereal-bars|chocolate-bars|protein-bars|cookies|biscuits|crackers|rice-cakes|popcorn|potato-crisps|chips|crisps|nuts|almonds|cheeses|plain-yogurts|yogurts|chocolates)$/
  }];
  for (const rule of categoryRules) {
    if (p.categories.some(cat => rule.pattern.test(cat))) return foodUses.find(purpose => purpose.id === rule.id);
  }
  const idText = [p.name, p.category, ...p.categories].join(" ").toLowerCase();
  const ruleList = [{
    id: "spread-savory",
    pattern: /\b(hummus|houmous|guacamole|savou?ry-spreads?|cheese-spreads?|tapenade)\b/
  }, {
    id: "spread-sweet",
    pattern: /\b(nutella|nut[ -]butters?|peanut[ -]butters?|almond[ -]butters?|hazelnut[ -]spreads?|chocolate[ -]spreads?|fruit[ -]spreads?|jams?|mermelada|crema de avellanas)\b/
  }, {
    id: "breakfast",
    pattern: /\b(breakfast-cereals?|porridges?|oat-flakes|cereales-de-desayuno|muesli|granola|oatmeal|cereal)\b/
  }, {
    id: "bread",
    pattern: /\b(breads?|pan|pain|brot)\b/
  }, {
    id: "milk",
    pattern: /\b(milks?|soymilk|almondmilk|oatmilk|plant-milks?|leche|bebidas-vegetales)\b/
  }, {
    id: "drink",
    pattern: /\b(waters?|seltzer|soft-drinks?|carbonated-drinks?|fruit-juices?|fruit-nectars?|iced-teas?|unsweetened-beverages|sodas?|cola|refrescos?|zumos?|jugos?)\b/
  }, {
    id: "ketchup",
    pattern: /\b(ketchup|catsup|kétchup)\b/
  }, {
    id: "dressing",
    pattern: /\b(dressings?|ranch|mayonnaise|mayonesa|vinaigrettes?)\b/
  }, {
    id: "hot-sauce",
    pattern: /\b(hot[ -]sauce|sriracha|tabasco|salsa picante)\b/
  }, {
    id: "sauce",
    pattern: /\b(sauces?|salsas?)\b/
  }, {
    id: "pasta",
    pattern: /\b(pastas?|spaghetti|macaroni)\b/
  }, {
    id: "snack",
    pattern: /\b(snacks?|cheeses?|quesos?|nuts|almonds?|popcorn|rice[ -]cakes?|yogurts?|yoghurts?|yogures|crisps|chips|crackers|biscuits?|cookies|galletas|chocolates?|chocolate-bars)\b/
  }];
  const milkDrink = /\bchocolate[ -]milk\b/.test(idText) || p.categories.some(c => /^en:(?:milks|plant-milks|plant-based-milks|flavoured-milks|chocolate-milks)$/.test(c));
  const id = ruleList.find(({
    id: ruleId,
    pattern
  }) => pattern.test(idText) && !(ruleId === "milk" && /cheese|queso|yogurt|yoghurt/.test(idText)) && !(ruleId === "milk" && /chocolate/.test(idText) && !milkDrink))?.id;
  if(id) return foodUses.find(x => x.id === id);
  const category = p.categories.filter(c => c.startsWith("en:") && !/^en:(foods|beverages|plant-based-foods|dairies|groceries|plant-based-foods-and-beverages)$/.test(c)).at(-1);

  return category ? {
    id: category,
    en: "the same food use",
    es: "el mismo uso alimentario",
    categories: [category]
  } : null;
}
function sameFoodUse(p, purpose) {
  return getFoodUse(p)?.id === purpose.id;
}
function reasonForUse(purpose) {
  return {
    en: `For the same use: ${purpose.en}.`,
    es: `Para el mismo uso: ${purpose.es}.`
  };
}

function pickSwap(food, options, avoid, prefs) {
  const originalScore = checkFood(food, avoid).score
  const purpose = getFoodUse(food);
  if (!purpose || !needsSwap(originalScore)) return null;
  const keys = ["sugars", "salt", "saturated-fat"];
  const goodOnes = []
  for (const other of options) {
    if(other.code.replace(/^0+/, "") === food.code.replace(/^0+/, "")) continue;
    if (!other.ingredients || !sameFoodUse(other, purpose)) continue;
    if (!fitsDiet(other, prefs)) continue;
    const check = checkFood(other, avoid);
    if (check.score === null || check.score < 4) continue;
    if (check.concerns.some(warning => warning.level === "high")) continue;
    const changes = [];
    let cantCompare = false;
    if((other.nutritionBasis || "100g") === (food.nutritionBasis || "100g")) {
      for (const key of keys) {
        const before = getNutrient(food, key);
        const after = getNutrient(other, key);
        const high = howHigh(food, key) === "high";
        if (high && after === null) cantCompare = true;
        if (before !== null && after !== null) changes.push({
          key,
          before,
          after,
          high,
          becomesHigh: howHigh(other, key) === "high"
        });
      }
    }
    let worse = false;
    const lessOf = [];
    for(const change of changes) {
      if ((change.high || change.becomesHigh) && change.after > change.before) worse = true;
      if (change.after < change.before) lessOf.push(change);
    }
    if (cantCompare || worse || lessOf.length === 0) continue;
    lessOf.sort((a, b) => Number(b.high) - Number(a.high));
    let points = 0;
    for(const change of lessOf) {
      points += (change.before - change.after) / Math.max(change.before, 1) * (change.high ? 2 : 1);
    }
    goodOnes.push({
      p: other,
      score: check.score,
      improvements: lessOf,
      benefit: points
    });
  }
  goodOnes.sort((a, b) => b.score - a.score || b.benefit - a.benefit);
  const best = goodOnes[0];
  if (!best) return null;
  const base = reasonForUse(purpose);

  const unit = best.p.nutritionBasis === "100ml" ? "100 ml" : "100 g";

  const nameList = {
    sugars: ["sugar", "azúcar"],
    salt: ["salt", "sal"],
    "saturated-fat": ["saturated fat", "grasa saturada"]
  };
  function detail(es) {
    let parts = [];
    for (let i = 0; i < best.improvements.length && i < 2; i++) {
      const c = best.improvements[i];
      const lang = es ? "es" : "en";
      parts.push(nameList[c.key][es ? 1 : 0] + ": " + c.before.toLocaleString(lang, { maximumFractionDigits: 1 }) + " → " + c.after.toLocaleString(lang, { maximumFractionDigits: 1 }) + " g");
    }
    return parts.join("; ");
  }
  return {
    ...best.p,
    alternativeWhy: {
      en: `${originalScore}/5 → ${best.score}/5. ${base.en}${best.improvements.length ? " Less per " + unit + ": " + detail(false) + "." : ""}`,
      es: `${originalScore}/5 → ${best.score}/5. ${base.es}${best.improvements.length ? " Menos por " + unit + ": " + detail(true) + "." : ""}`
    }
  };
}

export function categorySearch(query) {
  const q = noAccents(query.trim());
  const namedCategory = guessCategory(q);
  if (namedCategory) return namedCategory;
  const cats = [{
    pattern: /^(cheese|queso|quesos)$/,
    name: "en:cheeses"
  }, {
    pattern: /^(spread|spreads|untar)$/,
    name: "en:spreads"
  }, {
    pattern: /^(snack|snacks|tentempie)$/,
    name: "en:snacks"
  }, {
    pattern: /^(drink|drinks|bebida|bebidas)$/, 
    name: "en:beverages"
  }, {
    pattern: /^(fruit|fruits|fruta|frutas)$/,
    name: "en:fruits"
  }, {
    pattern: /^(water|agua)$/,
    name: "en:waters"
  }];

  for(const category of cats) {
    if (category.pattern.test(q)) return category.name;
  }

  return q;
}

export function trimCode(str) {
  const code = str.replace(/[ -]/g, "");
  return /^\d{8,14}$/.test(code) ? code.replace(/^0+/, "") || "0" : code;
}

export function sameFood(a, b) {
  return trimCode(a) === trimCode(b);
}

export function mergeLists(current, incoming) {
  const map = new Map();
  for (const p of [...current, ...incoming]) {
    if (p.kind !== "food") continue
    const key = trimCode(p.code);
    const old = map.get(key);
    if(old?.match === "label" && p.match !== "label") continue;
    map.set(key, p);
  }
  return [...map.values()];
}
export function addToHistory(history, p) {
  return [{
    ...p,
    scannedAt: new Date().toISOString()
  }, ...mergeLists([], history).filter(x => !sameFood(x.code, p.code))];
}

export function searchSaved(products, query, field = "all") {
  const q = query.trim();
  if (/^[\d -]{8,18}$/.test(q)) return products.filter(p => trimCode(p.code) === trimCode(q));
  const wordList = noAccents(field === "category" ? categorySearch(q).replace(/^[a-z]{2}:/, "").replace(/-/g, " ") : q).split(/\s+/).filter(Boolean);
  return products.filter(p => {
    const txt = noAccents(field === "brand" ? p.brand : field === "category" ? [p.category, ...p.categories].join(" ").replace(/-/g, " ") : [p.name, p.brand, p.category, ...p.categories].join(" ").replace(/-/g, " "));
    return wordList.every(word => txt.includes(word));
  });
}

export function filterFoods(products, highOnly, preferencesOnly, preferences, avoid) {
  return products.filter(p => (!highOnly || (checkFood(p, avoid).score ?? 0) >= 4) && (!preferencesOnly || fitsDiet(p, preferences)));
}
export function savedSwap(food, savedFoods, avoid, preferences) {
  return pickSwap(food, mergeLists(storeFoods(), savedFoods).filter(p => getShopLink(p)), avoid, preferences);
}

export function onlyStrings(value) {
  return Array.isArray(value) ? value.filter(v => typeof v === "string") : [];
}

export function strOr(value) {
  return typeof value === "string" ? value : "";
}
export async function openLink(value, es = false) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) throw Error();
    await Linking.openURL(url.href);
    return true;
  } catch (e) {
    Alert.alert(es ? "No se pudo abrir el enlace" : "The link could not open", es ? "Inténtalo de nuevo cuando tengas conexión." : "Try again when you have a connection.");
    return false;
  }
}
