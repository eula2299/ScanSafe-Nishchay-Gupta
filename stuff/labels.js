import React, { useState, useRef, useEffect } from "react";
import { Pressable, Text, Modal, ScrollView, Image, ActivityIndicator, View, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { WebView } from "react-native-webview";
import { ImageManipulator, SaveFormat } from "expo-image-manipulator";
import { findClaims, combineClaims, timeoutSig, sameCode, guessCategory } from "./helpers"
export function readLabelText(txt, base){
  const cleaned = txt.replace(/\r/g, "").replace(/([a-záéíóú])(?=\d)/gi, "$1 ").replace(/[\t ]+/g, " ").trim();
  const lines = cleaned.split("\n").map(x => x.trim()).filter(Boolean);
  const first = lines.find(x => /[a-záéíóúñ]/i.test(x) && !/^ingredients?|ingredientes|nutrition|nutrici|contains|contiene|warning|advertencia/i.test(x)) || "";
  const name = base?.name || first.slice(0, 90) || "Label scan";
  const kind = base?.kind || (/\b(shampoo|bleach|detergent|sunscreen|cosmetic|sodium hypochlorite|champú|lejía|detergente)\b/i.test(cleaned) ? "product" : "food");

  const start = cleaned.search(/\b(?:ingredients?|ingredientes|composition|composici[oó]n)(?:\s*:|\s*\n)/i);
  let ingredients = start >= 0 ? cleaned.slice(start).replace(/^(?:ingredients?|ingredientes|composition|composici[oó]n)(?:\s*:|\s*\n)\s*/i, "") : "";
  if (ingredients) ingredients = ingredients.split(/\n(?:nutrition|nutrici[oó]n|directions|instrucciones|distributed|distribuido|warning|advertencia)/i)[0].trim();

  const pnl = getNutritionPanel(cleaned);
  const nutrients = {
    ...(pnl && base?.nutritionBasis && pnl.basis !== base.nutritionBasis ? {} : base?.nutrients || {}),
    ...(pnl?.nutrients || {})
  };
  const readAmounts = Object.keys(pnl?.nutrients || {}).length;
  const category = base?.categories?.length ? undefined : guessCategory(name);
  return {
    ...base,
    code: base?.code || "label-" + Date.now(),
    name,
    brand: base?.brand || "",
    kind,
    ingredients: ingredients || base?.ingredients || "",
    warnings: cleaned,
    nutrients, 
    nutritionBasis: pnl?.basis || base?.nutritionBasis || "100g",
    allergens: base?.allergens || [],
    traces: base?.traces || [],
    ingredientTags: ingredients ? [] : base?.ingredientTags || [],
    nutritionGrade: readAmounts === 0 ? base?.nutritionGrade : undefined,
    categories: base?.categories?.length ? base.categories : category ? [category] : [],
    category: base?.category || category || "", 
    labels: base?.labels || [],
    sources: base?.sources || [],
    match: "label",
    labelText: cleaned
  }
}
function getNutritionPanel(txt) {
  const cleanTxt = txt.normalize("NFKC").replace(/\r/g, "").replace(/([a-záéíóú])(?=\d)/gi, "$1 ").replace(/[\t ]+/g, " ");
  const per100 = [...cleanTxt.matchAll(/\b100\s*(g|ml)\b/gi)];
  const units = new Set(per100.map(m => m[1].toLowerCase()));
  const portion = /\b(?:per serving|per portion|por porci[oó]n|por por[cç][aã]o|par portion|pro portion|amount per serving)\b/i.test(cleanTxt);
  const serving = cleanTxt.match(/(?:serving size|tama[nñ]o (?:de (?:la )?)?porci[oó]n|porci[oó]n|por[cç][aã]o)[^\n]*?(\d+(?:[.,]\d+)?)\s*(g|ml)\b/i);
  if (units.size > 1 || units.size && portion || /\b(?:as prepared|when prepared|prepared according|preparado seg[uú]n|producto preparado|apres preparation|zubereitet)\b/i.test(cleanTxt)) return null;
  const servingMode = !units.size && !!serving && (portion || /nutrition facts|informaci[oó]n nutricional|informa[cç][aã]o nutricional/i.test(cleanTxt)) && !/per container|por envase/i.test(cleanTxt);
  if (!units.size && !servingMode) return null;
  const size = servingMode ? Number(serving[1].replace(",", ".")) : 100;

  if(!Number.isFinite(size) || size <= 0) return null;
  const basis = (servingMode ? serving[2].toLowerCase() : [...units][0]) === "ml" ? "100ml" : "100g";
  const lines = cleanTxt.split("\n").map(x => x.trim()).filter(Boolean);

  const nutrients = {};
  const keys = [{
    key: "sugars",
    re: /^(?:(?:total|of which|dont|davon|di cui)\s+)?(?:sugars?|sucres|zucker|zuccheri|az[uú]cares?(?: totais)?)\b|^de los cuales az[uú]cares?\b/i
  }, {
    key: "saturated-fat",
    re: /^(?:(?:of which|dont|davon|di cui)\s+)?(?:saturated(?: fat)?|saturates|grasas? saturadas?|gorduras saturadas|[aá]cidos grasos saturados|acides gras satur[eé]s|ges[aä]ttigte fetts[aä]uren|acidi grassi saturi)\b/i
  }, {
    key: "salt",
    re: /^(?:salt|sal|sel|salz|sale)\b/i
  }, {
    key: "sodium",
    re: /^(?:sodium|sodio|s[oó]dio|natrium)\b/i
  }, {
    key: "fiber",
    re: /^(?:dietary (?:fiber|fibre)|fibers?|fibres?(?: alimentaires)?|fibra(?: alimentaria| alimentar)?|ballaststoffe)\b/i
  }, {
    key: "proteins",
    re: /^(?:proteins?|prot[eé]ines?|prote[ií]nas?|eiwei[ßs])\b/i
  }, {
    key: "fat",
    re: /^(?:total fat|fat|grasas? totales?|gorduras totais|mati[eè]res grasses|fett|grassi)\b/i
  }, {
    key: "carbohydrates",
    re: /^(?:total carbohydrate|carbohydrates?|hidratos de carbono|carbohidratos|carboidratos|glucides|kohlenhydrate|carboidrati)\b/i
  }, {
    key: "energy-kcal",
    re: /^(?:calories|calor[ií]as|energy|energ[ií]a|[eé]nergie|brennwert|valor energ[eé]tico)\b/i
  }];
  for (const {
    key,
    re
  } of keys) {
    const matching = [];
    for(let i = 0; i < lines.length; i++) {
      if (re.test(lines[i])) matching.push({
        line: lines[i],
        i: i
      });
    }
    const values = [];
    for (const found of matching) {
      let line = found.line;
      if(!/\d/.test(line) && /^\d+(?:[.,]\d+)?\s*(?:mg|g|kcal|kj)?\b/i.test(lines[found.i + 1] || "")) line += " " + lines[found.i + 1];
      if (/[<>≤≥]|less than|menos de|moins de/i.test(line)) continue
      let value;
      if (key === "energy-kcal") {
        const kcals = [...line.matchAll(/(\d+(?:[.,]\d+)?)\s*kcal\b/gi)];
        const kjs = [...line.matchAll(/(\d+(?:[.,]\d+)?)\s*kj\b/gi)];
        if(kcals.length === 1 && kjs.length <= 1) value = Number(kcals[0][1].replace(",", "."));
        else if(!kcals.length && kjs.length === 1) value = Number(kjs[0][1].replace(",", ".")) / 4.184;
        else if(/^calories?\s+\d+(?:[.,]\d+)?\s*$/i.test(line)) value = Number(line.match(/\d+(?:[.,]\d+)?/)[0].replace(",", "."));
      } else {
        const amounts = [...line.matchAll(/(?<![\d.,])\b(\d+(?:[.,]\d+)?)\s*(mg|g)\b/gi)];
        if(amounts.length === 1) value = Number(amounts[0][1].replace(",", ".")) / (amounts[0][2].toLowerCase() === "mg" ? 1000 : 1);
      }
      if(value !== undefined && Number.isFinite(value) && value >= 0) {
        value = value * 100 / size;
        if(value <= (key === "energy-kcal" ? 1000 : 100)) values.push(Math.round(value * 1000) / 1000);
      }
    }
    const unique = [...new Set(values)];
    if(unique.length === 1) nutrients[key + "_100g"] = unique[0];
  }
  return Object.keys(nutrients).length ? { nutrients, basis } : null;
}
function countParts(value) {
  return value.replace(/(\d),(\d)/g, "$1.$2").split(/[,;،]/).map(x => x.trim()).filter(Boolean).length;
}
export function needsPhotoRead(current, raw){
  if (!current.trim()) return true;
  const count = countParts(current);
  const fullerListSize = Math.max(5, count + 2);
  return Array.isArray(raw.ingredients) && raw.ingredients.length >= fullerListSize || Object.entries(raw).some(([key, value]) => /^ingredients_text_[a-z]{2}(?:_[a-z]{2})?$/.test(key) && typeof value === "string" && value.length > current.length * 2 && countParts(value) >= fullerListSize);
}

export function isLonger(current, read){
  return !current.trim() || countParts(read) >= countParts(current) + 2 && read.length > current.length * 1.5;
}
const ingredientHeadings = {
  ingredients: "en",
  ingredientes: "es",
  ingrédients: "fr",
  composition: "fr",
  zutaten: "de",
  ingredienti: "it",
  ingrediënten: "nl",
  ingredienser: "sv"
};

function getIngredientsFromText(txt, es = false){
  const lines = txt.replace(/\r/g, "").split("\n");
  const starts = [];
  for(let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*(?:(GB|EN|ES|FR|DE|IT|NL|SV|PT|℗|F)\s*[-:]?\s*)?(ingredients|ingredientes|ingrédients|composition|zutaten|ingredienti|ingrediënten|ingredienser)\b\s*([:–-]?)\s*(.*)$/i);
    if (!m) continue;
    if (!m[3] && m[4] && !m[4].includes(",")) continue;
    let language = ingredientHeadings[m[2].toLowerCase()];
    if(/^(PT|℗)$/i.test(m[1] || "")) language = "pt"; 
    else if(/^(FR|F)$/i.test(m[1] || "")) language = "fr";
    starts.push({
      i: i,
      language: language,
      first: m[4]
    });
  }
  const start = starts.find(x => x.language === (es ? "es" : "en")) || starts.find(x => x.language === "en") || starts[0];
  if(!start) return null;

  const next = starts.find(x => x.i > start.i)?.i ?? lines.length;
  const part = [start.first];
  for(let i = start.i + 1; i < next; i++) {
    if (/^\s*(?:nutrition|informaci[oó]n nutricional|valeurs nutritionnelles|n[aä]hrwert|conservaci[oó]n|conservazione|conservation|storage|keep |best before|distributed|manufactured|distribuido|fabricado|fabriqu[eé]|issu de|\*?\s*certified organic|\*?\s*von zertifizierten|[\u0600-\u06ff])/i.test(lines[i])) break;
    part.push(lines[i]);
  }
  const ingredients = part.join(" ").split(/\b(?:fabriqu[eé] en|manufactured (?:by|in)|distributed by)\b/i)[0].replace(/\s+/g, " ").trim();
  if (ingredients.length < 5 || ingredients.length > 6000) return null;

  return { ingredients, language: start.language };
}

function labelPhotos(raw, es = false, nutritionFirst = false){
  if (!raw.images || typeof raw.images !== "object") return [];
  const opts = [raw.image_ingredients_url, raw.image_front_url, raw.image_front_small_url, raw.image_nutrition_url];
  for(const k of Object.keys(raw)){
    if(/^image_(ingredients|nutrition|front|packaging)_[a-z]{2}_url$/.test(k)) opts.push(raw[k]);
  }
  let base = "";
  for(const candidate of opts) {
    if(typeof candidate !== "string") continue;
    try {
      const u = new URL(candidate);
      const m = u.pathname.match(/^\/images\/products\/([\d/]+)\/(?:ingredients|front|nutrition|packaging)_[a-z]{2}\.[\d.]+\.jpg$/);
      if(u.protocol === "https:" && u.hostname === "images.openfoodfacts.org" && m && sameCode(m[1].replace(/\//g, ""), String(raw.code))) {
        base = u.origin + "/images/products/" + m[1] + "/";
        break;
      }
    } catch(e) {}
  }
  if(!base) return [];
  const preferred = es ? "es" : "en";

  function rank(key) {
    let n = 10;
    if(key.startsWith(nutritionFirst ? "nutrition_" : "ingredients_")) n = 0;
    if (key.endsWith("_" + preferred)) n += 0;
    else if (key.endsWith("_" + raw.lang)) n += 1;
    else n += 2;
    return n;
  }
  const selected = [];
  for (const k of Object.keys(raw.images)) {
    if(/^(ingredients|nutrition|front|packaging)_[a-z]{2}$/.test(k)) selected.push(k);
  }
  selected.sort((a, b) => rank(a) - rank(b));
  const roleOrder = nutritionFirst ? ["nutrition", "ingredients", "front", "packaging"] : ["ingredients", "front", "packaging", "nutrition"];
  const firstOfEachKind = [];
  for (const role of roleOrder) {
    const first = selected.find(key => key.startsWith(role + "_"));
    if (first) firstOfEachKind.push(first);
  }
  const ordered = [...firstOfEachKind, ...selected.filter(key => !firstOfEachKind.includes(key))];
  const seen = new Set();
  const targets = [];
  for (const key of ordered) {
    const img = String(raw.images[key]?.imgid ?? "");
    const rev = String(raw.images[key]?.rev ?? "");
    if(!/^\d+$/.test(img) || !/^\d+$/.test(rev) || seen.has(img)) continue;
    seen.add(img);
    targets.push({
      photoUrl: base + key + "." + rev + ".full.jpg",
      ocrUrl: base + img + ".json"
    });
  }

  return targets.slice(0, 6);
}

function firstLabelPhoto(raw, es = false) {
  return labelPhotos(raw, es)[0] || null;
}
const ocrCache = new Map();

function readOcr(url) {
  const now = Date.now();
  for(const [k, v] of ocrCache) if (v.expires <= now) ocrCache.delete(k);

  const old = ocrCache.get(url);
  if (old) return old.value;
  async function go() {
    try {
      const r = await fetch(url, {
        signal: timeoutSig(8000)
      });
      if(!r.ok) return null;
      const body = await r.json();
      const response = body.responses?.[0] || body;
      const full = response.fullTextAnnotation;
      const txt = full?.text || response.textAnnotations?.[0]?.description;
      if (typeof txt !== "string" || txt.length > 40000) return null;
      let sum = 0
      let count = 0;
      for (const page of full && full.pages || []) {
        for (const block of page.blocks || []) {
          for (const para of block.paragraphs || []) {
            for(const w of para.words || []) {
              if(typeof w.confidence === "number") {
                sum += w.confidence;
                count++;
              }
            }
          }
        }
      }
      if (count > 0 && sum / count < 0.85) return null;
      return txt;
    } catch {
      return null;
    }
  }
  const value = go();
  ocrCache.set(url, {
    expires: now + 300000,
    value
  });

  if(ocrCache.size > 100) ocrCache.delete(ocrCache.keys().next().value);
  return value;
}

export async function photoIngredients(raw, es = false, fragment = "") {
  const targets = labelPhotos(raw, es);
  for (let i = 0; i < targets.length; i += 2) {
    const results = await Promise.all(targets.slice(i, i + 2).map(async target => {
      const txt = await readOcr(target.ocrUrl);
      const got = txt ? getIngredientsFromText(txt, es) : null;
      return got && isLonger(fragment, got.ingredients) ? {
        ...got,
        ...target
      } : null;
    }))
    const found = results.find(Boolean);
    if(found) return found;
  }
  return null
}

export async function photoNutrition(raw, es = false) {
  const targets = labelPhotos(raw, es, true);
  let best = null;
  for(let i = 0; i < targets.length; i += 2) {
    const results = await Promise.all(targets.slice(i, i + 2).map(async target => {
      const txt = await readOcr(target.ocrUrl);
      const pnl = txt ? getNutritionPanel(txt) : null;
      return pnl ? {
        ...pnl,
        ...target
      } : null
    }));
    let complete;
    for(const r of results) {
      if (!r) continue;
      const hasSugarAndFat = r.nutrients.sugars_100g !== undefined && r.nutrients["saturated-fat_100g"] !== undefined;
      const hasSalt = r.nutrients.salt_100g !== undefined || r.nutrients.sodium_100g !== undefined;
      if (hasSugarAndFat && hasSalt) {
        complete = r;
        break;
      }
    }
    if(complete) return complete;
    for(const res of results) if(res && Object.keys(res.nutrients).length > Object.keys(best?.nutrients || {}).length) best = res
  }
  return best;
}
export async function photoClaims(raw, es = false) {
  const targets = labelPhotos(raw, es);
  let claimList = [];
  for(let i = 0; i < targets.length; i += 2){
    const batches = await Promise.all(targets.slice(i, i + 2).map(async target => {
      const txt = await readOcr(target.ocrUrl);
      return txt ? findClaims(txt, [], {
        name: "Open Food Facts · label photo",
        url: target.photoUrl,
        kind: "automatic-label-reading"
      }) : [];
    }));
    for(const batch of batches) claimList = combineClaims(claimList, batch);
  }
  return claimList
}

export async function photoAllergens(raw, es = false) {
  const found = [];

  const starts = /^(?:(?:allergen information|allergy advice|allergens?|al[eé]rgenos)\s*:\s*)?(?:contains|may contain|contiene|puede contener|contient|peut contenir|enth[aä]lt|kann enthalten)\b/i;
  const stops = /^(?:ingredients?|ingredientes|ingr[eé]dients|nutrition|informaci[oó]n nutricional|valeurs nutritionnelles|storage|keep |best before|distributed|manufactured|distribuido|fabricado|certified|serving|calories|total fat|www\.)/i;

  const targets = labelPhotos(raw, es);
  for(let i = 0; i < targets.length; i += 2){
    const batch = await Promise.all(targets.slice(i, i + 2).map(async target => {
      const txt = await readOcr(target.ocrUrl);
      if (!txt) return [];
      const lines = txt.replace(/\r/g, "").split("\n").map(line => line.trim());

      const statements = [];
      for (let line = 0; line < lines.length; line++) {
        if(!starts.test(lines[line])) continue;
        let statement = lines[line];
        const payload = statement.replace(starts, "").replace(/^\s*:\s*/, "").trim();
        if (/^\d|\b(?:delicious|serve|serving suggestion|try with|enjoy with)\b/i.test(payload)) continue;
        for (let next = line + 1; next < Math.min(lines.length, line + 4); next++){
          if(!lines[next] || /[.!?]$/.test(statement) || starts.test(lines[next]) || stops.test(lines[next])) break;
          if(/\b(?:delicious|serve|serving suggestion|try with|enjoy with)\b/i.test(lines[next])) break;
          if (statement.replace(starts, "").replace(/^\s*:\s*/, "").trim() && !/[,;:]$|\b(?:and|or|y|o|et|und)$/i.test(statement) && !/^(?:and|or|y|o|et|und)\b/i.test(lines[next])) break;
          statement += " " + lines[next];
        }
        if(statement.length < 700) statements.push({ statement, photoUrl: target.photoUrl });
      }

      return statements;
    }));
    for (const statements of batch) found.push(...statements);
  }

  return found;
}

const OCR_PAGE = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><script>
const send=(data)=>window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify(data));
window.onerror=()=>send({type:'error'});
window.readLabel=async function(image){let worker;try{
 worker=await Tesseract.createWorker('eng+spa',1,{workerPath:'https://cdn.jsdelivr.net/npm/tesseract.js@6.0.1/dist/worker.min.js',corePath:'https://cdn.jsdelivr.net/npm/tesseract.js-core@6.0.0',langPath:'https://tessdata.projectnaptha.com/4.0.0',logger:m=>{if(m.status==='recognizing text')send({type:'progress',value:m.progress})}});
 const result=await worker.recognize(image);send({type:'result',text:result.data.text,confidence:result.data.confidence});
}catch(e){send({type:'error'})}finally{if(worker)await worker.terminate()}};
</script><script src="https://cdn.jsdelivr.net/npm/tesseract.js@6.0.1/dist/tesseract.min.js" onload="send({type:'ready'})" onerror="send({type:'error'})"></script></body></html>`;
export function LabelReader({
  visible,
  es,
  onClose,
  onRead
}) {
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [picking, setPicking] = useState(false);
  const [job, setJob] = useState(0);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const web = useRef(null);
  const done = useRef(false);
  const request = useRef(0);
  const pickingRef = useRef(false);
  const shown = useRef(visible);
  shown.current = visible;

  const t = (en, sp) => es ? sp : en;
  const current = id => shown.current && request.current === id;
  function close(){
    request.current++;
    done.current = true;

    pickingRef.current = false;
    setPhoto("");
    setReady(false);
    setPicking(false);
    onClose();
  }
  useEffect(() => {
    if (!visible) {
      request.current++;
      done.current = true;
      pickingRef.current = false;
      setPhoto("");
      setError("");
      setReady(false);
      setPicking(false);
      setPermissionDenied(false);
    }
  }, [visible]);
  useEffect(() => {
    const reqs = request;
    return () => {
      reqs.current++;
    };
  }, []);
  useEffect(() => {
    if(photo && ready) web.current?.injectJavaScript(`window.readLabel(${JSON.stringify(photo)});true;`);
  }, [photo, ready]);
  useEffect(() => {
    if(!photo) return;
    const reqs = request;
    const timer = setTimeout(() => {
      if(reqs.current === job && !done.current){
        done.current = true;
        setError(es ? "La lectura tardó demasiado. Prueba una foto más cercana y con buena luz." : "Reading took too long. Try a closer, well-lit photo.");
        setPhoto("");
      }
    }, 90000);
    return () => clearTimeout(timer);
  }, [photo, es, job]);
  function fail(id) {
    if(!current(id) || done.current) return
     done.current = true;
    setError(t("The reader could not finish. Please try again.", "El lector no pudo terminar. Inténtalo de nuevo."));
    setPhoto("");
  }
  async function pick(camera){
    if (pickingRef.current) return;
    const id = ++request.current;
    pickingRef.current = true;
    setPicking(true);
    setError("");
    setPermissionDenied(false);
    try {
      if (camera) {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!current(id)) return;
        if (!permission.granted){
          setPermissionDenied(true);
          setError(t("Allow camera access in your phone settings, or choose a photo.", "Permite usar la cámara en los ajustes o elige una foto."));
          return;
        }
      }
      let res;
      if (camera) {
        res = await ImagePicker.launchCameraAsync({
          mediaTypes: ["images"],
          base64: false,
          quality: 1,
          allowsEditing: false
        });
      }else {
        res = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"],
          base64: false,
          quality: 1,
          allowsEditing: false
        });
      }
      if(!current(id) || res.canceled) return;
      const asset = res.assets[0];
      if (!asset?.uri) throw Error();
      const context = ImageManipulator.manipulate(asset.uri);
      if (Math.max(asset.width, asset.height) > 2000) context.resize(asset.width >= asset.height ? { width: 2000, height: null } : { height: 2000, width: null });
      const image = await context.renderAsync();
      if (!current(id)) return;
      const encoded = await image.saveAsync({ base64: true, compress: 0.95, format: SaveFormat.JPEG });
      if (!current(id)) return;
      if (!encoded.base64) throw Error();
      done.current = false;
      setProgress(0);
      setReady(false);
      setJob(id);
      setPhoto("data:image/jpeg;base64," + encoded.base64);
    } catch {
      if (current(id)) setError(t("The photo could not open. Try again.", "No se pudo abrir la foto. Inténtalo de nuevo."));
    } finally {
      if (current(id)) {
        pickingRef.current = false
        setPicking(false);
      }
    }
  }
  function message(data) {
    if(!current(job) || done.current || data.length > 250000) return
    let m;
    try {
      m = JSON.parse(data);
    } catch {
      return;
    }
    if(!m || typeof m !== "object") return;
    if (m.type === "ready") setReady(true);
    if(m.type === "progress" && typeof m.value === "number" && Number.isFinite(m.value)) setProgress(Math.max(0, Math.min(1, m.value)))
    if (m.type === "result"){
      if(typeof m.text !== "string" || typeof m.confidence !== "number" || !Number.isFinite(m.confidence)) {
        fail(job);
        return;
      }
      done.current = true
      if (m.confidence < 45 || m.text.trim().length < 15){
        setError(t("The print is blurry. Take a closer photo in good light.", "El texto está borroso. Haz una foto más cercana con buena luz."));
        setPhoto("");
      } else onRead(m.text);
    }
    if(m.type === "error") fail(job);
  }
  const btn = (txt, fn, disabled = false) => <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={fn} style={{
    padding: 18,
    backgroundColor: disabled ? "#738c83" : "#106d65",
    borderRadius: 14,
    marginVertical: 8
  }}>
      <Text style={{
      color: "white",
      fontWeight: "700",
      textAlign: "center"
    }}>
        {txt}
      </Text>
    </Pressable>;
  return <Modal visible={visible} animationType="slide" onRequestClose={close}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f9f5" }}>
        <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
          <Text style={{
          fontSize: 30,
          fontWeight: "800",
          color: "#193f36"
        }}>
            {t("Read the label", "Leer la etiqueta")}
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 24 }}>
            {t("Fill the photo with the ingredients and nutrition. Keep the print clear and flat.", "Llena la foto con los ingredientes y la nutrición. Mantén el texto claro y plano.")}
          </Text>
          {photo ? <>
              <Image source={{ uri: photo }} style={{ height: 220, resizeMode: "contain" }} />
              <ActivityIndicator color="#106d65" />
              <Text accessibilityLiveRegion="polite">
                {t("Reading your label…", "Leyendo la etiqueta…")} {Math.round(progress * 100)}%
              </Text>
              <Text>
                {t("The first scan may take a minute.", "El primer escaneo puede tardar un minuto.")}
              </Text>
              <View style={{ width: 1, height: 1, overflow: "hidden" }}>
                <WebView key={job} ref={web} source={{ html: OCR_PAGE, baseUrl: "https://localhost/" }} originWhitelist={["*"]} javaScriptEnabled mixedContentMode="never" allowFileAccess={false} javaScriptCanOpenWindowsAutomatically={false} onShouldStartLoadWithRequest={r => r.url === "about:blank" || r.url === "https://localhost/"} onMessage={e => message(e.nativeEvent.data)} onError={() => fail(job)} onRenderProcessGone={() => fail(job)} onContentProcessDidTerminate={() => fail(job)} />
              </View>
            </> : <>
              {btn(t("Take a label photo", "Fotografiar etiqueta"), () => pick(true), picking)}
              {btn(t("Choose a photo", "Elegir foto"), () => pick(false), picking)}
              {picking && <ActivityIndicator color="#106d65" />}
            </>}
          {!!error && <Text accessibilityRole="alert" style={{ color: "#9b322a", fontSize: 16 }}>
              {error}
            </Text>}
          {permissionDenied && btn(t("Phone settings", "Ajustes del teléfono"), () => {
          Linking.openSettings().catch(() => setError(t("Open Settings on your phone to allow the camera.", "Abre Ajustes en tu teléfono para permitir la cámara.")));
        })}
          <Text style={{ color: "#657b6c", lineHeight: 21 }}>
            {t("Your photo is read on your phone. An internet connection downloads the reader. English and Spanish labels are supported.", "La foto se lee en tu teléfono. Internet descarga el lector. Se admiten etiquetas en inglés y español.")}
          </Text>
          {btn(t("Close", "Cerrar"), close)}
        </ScrollView>
      </SafeAreaView>
    </Modal>;
}
