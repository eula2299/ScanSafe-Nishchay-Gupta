import React, { useState, useRef, useEffect } from "react";
import { AppState, Share, Alert, Pressable, Text, View, Image, ActivityIndicator, ScrollView, TextInput, Modal, Linking, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getLocales } from "expo-localization";
import { StatusBar } from "expo-status-bar";
import { useCameraPermissions, CameraView } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerRootComponent } from "expo";
import { cleanScannedCode, getShopLink, getNutrient, needsSwap, allergenRegex, checkFood, trimCode, sameFood, mergeLists, addToHistory, searchSaved, filterFoods, savedSwap, openLink } from "./stuff/helpers";
import { readLabelText, LabelReader } from "./stuff/labels";
import { mergeFoods, missingStuff, findFood, getSwaps, getDetails } from "./stuff/getFood";
import { makeReport, getTiles, HealthCheck, NutritionBox, MoreDetails } from "./stuff/tiles";
import { whatChanged, ShoppingStuff, ChangesCard, DietPicker, DietResults } from "./stuff/shopping";
import { Saver, CrashCatcher } from "./stuff/saving";

function makeShareText(product, analysis, swap, es, why) {
  const lines = ["Scan Safe", product.name];
  if (product.brand) lines.push(product.brand);
  lines.push((es ? "Código: " : "Barcode: ") + product.code);
  if (analysis.score !== null) {
    lines.push((es ? "Puntuación: " : "Rating: ") + analysis.score + "/5");
    if (why) lines.push(why);
  }
  for (const tile of getTiles(product, analysis, es)) {
    if (tile.level === "unknown") continue;
    let line = tile.title + ": " + tile.value.replace(/\n/g, ", ");
    if(tile.id === "sugar" || tile.id === "saltfat") line += " · " + tile.hint;
    lines.push(line);
    if (tile.id === "allergens" && tile.level !== "low") lines.push(tile.reason);
  }
  const macros = makeReport(product, analysis, es).nutrition.filter(thing => ["energy", "proteins", "carbohydrates", "fat", "fiber"].includes(thing.key));
  if (macros.length) lines.push((es ? "Nutrición: " : "Nutrition: ") + macros.map(thing => thing.name + " " + thing.value + " / " + thing.unit).join(", "));
  if (product.ingredients.trim()) lines.push((es ? "Ingredientes: " : "Ingredients: ") + product.ingredients);

  if (swap) {
    lines.push((es ? "Una opción mejor: " : "A better option: ") + [swap.brand, swap.name].filter(Boolean).join(" · "));
    const reason = swap.alternativeWhy?.[es ? "es" : "en"];
    if (reason) lines.push(reason);
    lines.push(getShopLink(swap) || swap.sources?.[0]?.url || googleShopLink(swap));
  }
  if (product.sources.length) {
    lines.push(es ? "Fuentes:" : "Sources:");
    for(const src of product.sources) lines.push(src.name + ": " + src.url);
  }

  return lines.join("\n")
}

const teal = "#106d65";

const yellow = "#ffe17b";

function App() {
  return <SafeAreaProvider>
      <CrashCatcher>
        <Main />
      </CrashCatcher>
    </SafeAreaProvider>;
}

function Main(){
  const [lang, setLang] = useState(getLocales()[0]?.languageCode === "es" ? "es" : "en");
  const es = lang === "es";
  const t = (en, sp) => es ? sp : en;
  const [tab, setTab] = useState("home");

  const [searchText, setSearchText] = useState("");
  const [busy, setBusy] = useState(false);
 const [notice, setNotice] = useState("");
  const [items, setItems] = useState([]);
  const [currentFood, setCurrentFood] = useState(null);
  const [swap, setSwap] = useState(null);
  const [findingSwaps, setFindingSwaps] = useState(false);
  const [swaps, setSwaps] = useState([])
  const [history, setHistory] = useState([]);
  const [saved, setSaved] = useState([]);

  const [avoid, setAvoid] = useState([]);
  const [ready, setReady] = useState(false);
  const [scan, setScan] = useState(false);
  const [label, setLabelOpen] = useState(false);
  const [labelText, setLabelText] = useState("");
  const [labelName, setLabelName] = useState("");
  const [kind, setKind] = useState("food");
  const [permission, askPermission] = useCameraPermissions();
  const [active, setActive] = useState(true);
  const [showHow, setShowHow] = useState(false);
  const [diet, setDiet] = useState([]);
  const [offline, setOffline] = useState(false);
  const [library, setLibrary] = useState([]);
  const [localResult, setLocalResult] = useState(false);
  const [resultsFromPhone, setResultsFromPhone] = useState(false);
  const [field, setField] = useState("all");
  const [highOnly, setHighOnly] = useState(false);
  const [fitOnly, setFitOnly] = useState(false);
  const [historyQuery, setHistoryQuery] = useState("");
  const [historyLimit, setHistoryLimit] = useState(30);
  const [downloading, setDownloading] = useState(false);
  const [downloadNote, setDownloadNote] = useState("");
  const [storageError, setStorageError] = useState(false);
  const [comparison, setComparison] = useState(null);
  const [previousScans, setPreviousScans] = useState([]);
  const libRef = useRef([]);
  libRef.current = mergeLists(history, library)
  const store = useRef(new Saver(AsyncStorage));
  const initialSpanish = useRef(es);
  const [loadAttempt, retryLoad] = useState(0);
  const [loadFailed, setLoadFailed] = useState(false)
  const [cameraError, setCameraError] = useState(false);
  const [reader, showReader] = useState(false);
  const labelBase = useRef(null)
  const pendingBarcode = useRef(null);
  const [expandedConcern, setExpandedConcern] = useState(null);
  const [detailBusy, setDetailBusy] = useState(false);
  const [editing, setEditing] = useState(null);
  const [sugar, setSugar] = useState("");
  const [satFat, setSatFat] = useState("");
  const [salt, setSalt] = useState("");
  const req = useRef(0);

  const altReq = useRef(0)

  const locked = useRef(false);
  const sharing = useRef(false);
  const alreadyAsked = useRef(new Set());
  const a = currentFood ? checkFood(currentFood, avoid) : null;
  useEffect(() => {
    let live = true;
    const reqs = req;
    const swapReqs = altReq;
    setLoadFailed(false);
    store.current.load(initialSpanish.current ? "es" : "en").then(({
      state,
      recovered
    }) => {
      if (!live) return;

      setHistory(state.history);
      setLibrary(state.library);
      setPreviousScans(state.previousScans);
      setDiet(state.diet);
      setOffline(state.offline);
      setSaved(state.saved);
      setAvoid(state.avoid);
      setLang(state.lang);
      if (recovered) setNotice(initialSpanish.current ? "Se recuperaron tus escaneos guardados." : "Your saved scans were recovered.");
      setReady(true);
    }).catch(() => {
      if (live) setLoadFailed(true)
    });
    const sub = AppState.addEventListener("change", str => setActive(str === "active"));
    return () => {
      live = false;
      reqs.current++
       swapReqs.current++;
      sub.remove(); 
    };
  }, [loadAttempt]);
  useEffect(() => {
    if (!ready) return;
    let live = true;
    store.current.save({
      history,
      saved,
      avoid,
      lang: es ? "es" : "en",
      diet,
      offline,
      library,
      previousScans
    }).then(() => {
      if (live) setStorageError(false);
    }).catch(() => {
      if (live) setStorageError(true);
    });
    return () => {
      live = false;
    };
  }, [ready, history, saved, avoid, es, diet, offline, library, previousScans]);
  useEffect(() => {
    const clear = () => {
      setSwap(null);
      setSwaps([]);
      setFindingSwaps(false);
    };
    if (!currentFood || tab !== "result" || scan || reader || currentFood.kind !== "food") {
      clear()
      return;
    }

    const score = checkFood(currentFood, avoid).score;
    if (score !== null && score >= 5) {
      clear();
      return;
    }
    const fastSwap = savedSwap(currentFood, libRef.current, avoid, diet);
    setSwap(fastSwap);
    setSwaps(fastSwap ? [fastSwap] : []);
    if (offline) {
      setFindingSwaps(false);
      return;
    }
    if (detailBusy) {
      setFindingSwaps(true);
      return; 
    }
    let live = true;
    setFindingSwaps(true)
    getSwaps(currentFood, es, avoid, diet, () => live).then(list => {
      if(!live) return;
      const options = [...(fastSwap ? [fastSwap] : []), ...list.filter(x => !fastSwap || !sameFood(x.code, fastSwap.code))].slice(0, 3);
      setSwaps(options);
      setSwap(options[0] || null);
    }).catch(() => {}).finally(() => {
      if (live) setFindingSwaps(false);
    });
    return () => {
      live = false;
    };
  }, [currentFood, es, avoid, diet, detailBusy, offline, localResult, tab, scan, reader]);
  async function search(query = searchText) {
    const cleanTxt = query.trim();
    if (!cleanTxt || !ready) {
      locked.current = false;
      return;
    }
    const n = ++req.current;
    altReq.current++;

    setDetailBusy(false);
    pendingBarcode.current = null;
    setScan(false);
    setTab("matches");

    setNotice("");
    setBusy(true);
    setItems([]);
    setDownloadNote("")
    const local = searchSaved(libRef.current, cleanTxt, field);
    const barcode = /^[\d -]{8,18}$/.test(cleanTxt);
    if (barcode) pendingBarcode.current = cleanTxt.replace(/[ -]/g, "");
    const show = (products, fromPhone) => {
      setItems(products);
      setResultsFromPhone(fromPhone);
      if(products.length === 1 && barcode) choose(products[0], fromPhone);
      if (fromPhone) setNotice(t("Showing products kept on this phone.", "Mostrando productos guardados en este teléfono."));
    };
    try {
      if (offline) {
        show(local, true);
        if (!local.length) setNotice(t("This product has not been downloaded. Turn off offline mode to look it up.", "Este producto no está descargado. Desactiva el modo sin conexión para buscarlo."));
        return;
      }
     if (barcode && local.length === 1 && local[0].match !== "label") {
        show(local, true);
        return;
      }
      const r = await findFood(cleanTxt, es, field, true);
      if (n !== req.current) return;
      if (r.products.length) show(r.products.map(fresh => {
        const edited = local.find(savedOne => savedOne.match === "label" && sameFood(savedOne.code, fresh.code));
        return edited ? mergeFoods(edited, fresh) : fresh;
      }), Boolean(r.fromPhone));
      else if (local.length) show(local, true);
      else if (barcode) {
        setNotice(t("Photograph the ingredients and the nutrition label. Scan Safe reads them, fills in every tile and saves this product for its barcode.", "Fotografía los ingredientes y la tabla nutricional. Scan Safe los lee, completa cada recuadro y guarda este producto para su código."));
        readLabel({
          code: cleanTxt.replace(/[ -]/g, ""),
          name: "",
          brand: "",
          kind: "food",
          category: "",
          categories: [],
          ingredients: "",
          allergens: [],
          traces: [],
          labels: [],
          nutrients: {},
          sources: [],
          match: "label"
        });
      } else setNotice(t("No products matched that name. Try the brand and product name, or scan the barcode.", "Ningún producto coincide con ese nombre. Prueba con la marca y el nombre, o escanea el código."));
    } catch(e){
      if (n === req.current) {
        show(local, true);
        if (!local.length) setNotice(t("No connection. Download products before shopping to scan them offline.", "Sin conexión. Descarga productos antes de comprar para escanearlos sin conexión."));
      }
    } finally {
      if (n === req.current) setBusy(false);
      locked.current = false;
    }
  }
  async function downloadResults() {
    if (downloading || offline) return;
    setDownloading(true);
    setDownloadNote("");
    const batch = items.slice();
    let count = 0;
    try {
      for (let i = 0; i < batch.length; i += 3) {
        const results = await Promise.allSettled(batch.slice(i, i + 3).map(x => getDetails(x, es, true)))
        const products = [];
        for(const download of results) {
          if(download.status === "fulfilled") {
            products.push({
              ...download.value,
              downloadedAt: new Date().toISOString()
            });
          }
        }
        count += products.length;
        setLibrary(old => mergeLists(old, products))
        setDownloadNote(t(`${count} products downloaded`, `${count} productos descargados`))
      }
    } finally {
      setDownloading(false)
      setDownloadNote(t(`${count} of ${batch.length} downloaded. Product text and ratings work offline; photos and shop links may need internet.`, `${count} de ${batch.length} descargados. El texto y las puntuaciones funcionan sin conexión; las fotos y tiendas pueden necesitar internet.`));
    }
  }
  function stopRequests() {
    req.current++
    altReq.current++;
    locked.current = false;
    setBusy(false);
    setDetailBusy(false);

    setFindingSwaps(false);
  }
  function goTab(next){
    stopRequests();
    setTab(next);
  }
  async function shareCurrentProduct() {
    if (!currentFood || !a || detailBusy || sharing.current) return;
    sharing.current = true;
    const choice = altReq.current;
    try {
      const message = makeShareText(currentFood, a, swap, es, whyScore(currentFood, a.score, es, a.concerns.some(c => c.id === "allergen-match")));
      await Share.share({
        title: "Scan Safe · " + currentFood.name,
        message
      }, {
        dialogTitle: t("Share product summary", "Compartir resumen del producto")
      });
    } catch (err) {
      if (choice === altReq.current) Alert.alert(t("Could not open sharing", "No se pudo abrir la opción de compartir"), t("Try sharing this product again.", "Intenta compartir este producto de nuevo."));
    } finally {
      sharing.current = false;
    }
  }
  function removeHistory(product = null) {
    Alert.alert(product ? t("Remove this scan?", "¿Eliminar este escaneo?") : t("Clear scan history?", "¿Borrar el historial de escaneos?"), t("Saved products and downloads will stay on this phone.", "Los productos guardados y las descargas permanecerán en este teléfono."), [{
      text: t("Cancel", "Cancelar"),
      style: "cancel"
    }, {
      text: product ? t("Remove", "Eliminar") : t("Clear history", "Borrar historial"),
      style: "destructive",
      onPress: () => {
        stopRequests();
        const favoriteCopies = libRef.current.filter(food => saved.some(code => sameFood(code, food.code)));
        setLibrary(old => mergeLists(favoriteCopies, old));
        setHistory(old => product ? old.filter(food => !sameFood(food.code, product.code)) : []);
        setPreviousScans(old => product ? old.filter(food => !sameFood(food.code, product.code)) : []);
        setHistoryQuery("");
        setHistoryLimit(30);
        setTab("history");
      }
    }], { cancelable: true });
  }
  function startScan(){
    stopRequests();
    setCameraError(false);
    setScan(true);
  }
  function readLabel(base = null) {
    stopRequests();
    labelBase.current = base || (tab === "matches" && !busy && items.length === 0 && pendingBarcode.current ? {
      code: pendingBarcode.current,
      name: "",
      brand: "",
      kind: "food",
      category: "",
      categories: [],
      ingredients: "",
      allergens: [],
      traces: [],
      labels: [],
      nutrients: {},
      sources: [],
      match: "label"
    } : null);
    setScan(false);
    showReader(true);
  }
  function choose(x, fromPhone = offline) {
    req.current++
    setBusy(false);

    locked.current = false;
    if (x.kind !== "food") {
      setTab("matches");
      setItems([]);
      setNotice(t("Scan a food or drink. Scan Safe now focuses on what you eat and drink.", "Escanea un alimento o bebida. Scan Safe ahora se centra en lo que comes y bebes."));
      return;
    }
    pendingBarcode.current = null;
    setExpandedConcern(null);
    const earlier = history.find(v => sameFood(v.code, x.code));

    const choice = ++altReq.current;

    setLocalResult(fromPhone);

    setCurrentFood(x);
    setSwap(null);
    setFindingSwaps(true);
    setDetailBusy(!offline);
    if (!offline) getDetails(x, es).then(fresh => {
      if (choice === altReq.current){
        if(fresh.kind === "food" && fresh.match !== "label" && missingStuff(fresh) && !alreadyAsked.current.has(trimCode(fresh.code))){
          alreadyAsked.current.add(trimCode(fresh.code));
          setTimeout(() => readLabel(fresh), 400);
        }
        setLocalResult(false);
        if (earlier && whatChanged(earlier, fresh).length) setPreviousScans(old => [earlier, ...old.filter(v => !sameFood(v.code, earlier.code))]);
        setCurrentFood(fresh);
        setHistory(old => old.map(v => sameFood(v.code, fresh.code) ? {
          ...fresh,
          scannedAt: v.scannedAt
        } : v));
        setLibrary(old => mergeLists(old, [{
          ...fresh,
          downloadedAt: new Date().toISOString()
        }]));
      }
    }).catch(() => {
      if (choice === altReq.current) setLocalResult(true);
    }).finally(() => {
      if (choice === altReq.current) setDetailBusy(false);
    });
    setTab("result");
    setHistory(old => addToHistory(old, x));
    if (x.match === "label") setLibrary(old => mergeLists(old, [x]))
    setNotice("");
  }
  const button = (en, sp, fn, secondary = false) => <Pressable accessibilityRole="button" onPress={fn} style={[st.button, secondary && st.secondary]}>
      <Text style={[st.bt, secondary && { color: teal }]}>
        {t(en, sp)}
      </Text>
    </Pressable>
  function row(x) {
    const score = checkFood(x, avoid).score
    return <Pressable key={x.code + x.kind} onPress={() => choose(x, offline || tab === "matches" && resultsFromPhone)} style={st.row}>
        <View style={st.thumb}>
          {x.image && !offline ? <Image source={{
          uri: x.image
        }} style={st.photo} /> : <Text style={st.icon}>▧</Text>}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={st.brand}>{x.brand}</Text>
          <Text style={st.product}>{x.name}</Text>
          {x.scannedAt && <Text style={st.small}>
              {new Date(x.scannedAt).toLocaleDateString(es ? "es" : "en")}
            </Text>}
        </View>
        <Text style={[st.badge, {
        backgroundColor: scoreColor(score)
      }]}>
          {score ?? "↗"}
        </Text>
        <Text>›</Text>
      </Pressable>;
  }
  const allergyEs = name => ({
    Milk: "Leche",
    Egg: "Huevo",
    Peanut: "Cacahuete",
    "Tree nuts": "Frutos secos",
    Soy: "Soja",
    Wheat: "Trigo",
    Fish: "Pescado",
    Shellfish: "Marisco",
    Sesame: "Sésamo",
    Gluten: "Gluten",
    Celery: "Apio",
    Mustard: "Mostaza",
    Lupin: "Altramuz",
    Molluscs: "Moluscos",
    Sulfites: "Sulfitos"
  })[name] || name;
  const shownItems = filterFoods(items, highOnly, fitOnly, diet, avoid);
  const savedProducts = mergeLists(history, library).filter(food => saved.some(code => sameFood(code, food.code)));

  const shownHistory = searchSaved(tab === "history" ? history : savedProducts, historyQuery);
  const searchControls = <>
      <View style={st.chips}>
        {[["all", "Name / barcode", "Nombre / código"], ["brand", "Brand", "Marca"], ["category", "Category", "Categoría"]].map(([id, en, sp]) => <Pressable accessibilityRole="radio" accessibilityState={{
        selected: field === id
      }} key={id} onPress={() => setField(id)} style={[st.chip, field === id && { backgroundColor: "#c5e8d8" }]}>
            <Text>{t(en, sp)}</Text>
          </Pressable>)}
      </View>
      <View style={st.chips}>
        <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: highOnly }} onPress={() => setHighOnly(!highOnly)} style={st.chip}>
          <Text>
            {highOnly ? "✓ " : ""}
            {t("Rated 4–5", "Puntuación 4–5")}
          </Text>
        </Pressable>
        <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: fitOnly }} onPress={() => setFitOnly(!fitOnly)} style={st.chip}>
          <Text>
            {fitOnly ? "✓ " : ""}
            {t("Fits my food preferences", "Cumple mis preferencias")}
          </Text>
        </Pressable>
      </View>
      {fitOnly && <Text style={st.small}>
          {diet.length ? t("Shows only products with a matching label claim for every selected preference.", "Solo productos con una declaración para cada preferencia elegida.") : t("Choose food preferences in You to use this filter.", "Elige preferencias en Tú para usar este filtro.")}
        </Text>}
    </>;
  if (!ready) return <SafeAreaView style={st.safe}>
        <View style={st.content}>
          <Text style={st.title}>Scan Safe</Text>
          {loadFailed ? <>
              <Text style={st.body}>
                {t("Your saved scans could not open. They have been kept. Try loading them again.", "No se pudieron abrir tus escaneos guardados. Se han conservado. Intenta cargarlos de nuevo.")}
              </Text>
              {button("Try again", "Reintentar", () => retryLoad(n => n + 1))}
            </> : <>
              <ActivityIndicator color={teal} />
              <Text style={st.body}>
                {t("Opening your saved scans…", "Abriendo tus escaneos guardados…")}
              </Text>
            </>}
        </View>
      </SafeAreaView>;
  let scoreTitle = ""
  if (a) {
    if (a.score === null) {
      if (detailBusy) scoreTitle = t("Checking product details…", "Comprobando el producto…");
      else scoreTitle = t("Product overview", "Resumen del producto");
    } else if (a.score <= 2) {
      scoreTitle = t("Higher concern", "Mayor preocupación");
    } else if (a.score === 3) {
      scoreTitle = t("Average", "Intermedio")
    } else {
      scoreTitle = t("Lower concern", "Menor preocupación");
    }
  }

  let isSaved = false;
  let oldScan = null;
  if (currentFood) {
    for (const code of saved) {
      if (sameFood(code, currentFood.code)) isSaved = true
    }
    for (const v of previousScans) {
      if(sameFood(v.code, currentFood.code)) {
        oldScan = v;
        break;
      }
    }
  }
  function toggleSaved(){
    setSaved(old => {
      let there = false;
      for(const code of old){
        if (sameFood(code, currentFood.code)) there = true;
      }
      if (there) return old.filter(x => !sameFood(x, currentFood.code));
      return [...old, currentFood.code];
    });
  }
  function dismissChanges(){
    setPreviousScans(old => old.filter(v => !sameFood(v.code, currentFood.code)));
  }
  function toggleAvoid(name) {
    setAvoid(old => {
      if (old.includes(name)) return old.filter(x => x !== name);
      return [...old, name];
    });
  }
  return <SafeAreaView style={st.safe}>
      <StatusBar style="dark" />
      <View style={st.header}>
        <Text style={st.logo}>
          ▣ Scan Safe
          <Text style={{ color: teal }}>
            ●
          </Text>
        </Text>
        <Pressable accessibilityLabel={t("Switch to Spanish", "Cambiar a inglés")} onPress={() => setLang(es ? "en" : "es")} style={st.lang}>
          <Text style={{ color: teal, fontWeight: "700" }}>
            {es ? "EN" : "ES"}
          </Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={st.content} keyboardShouldPersistTaps="handled">
        {storageError && <Text style={st.notice}>
            {t("Phone storage is full or unavailable. Recent changes have not been saved.", "El almacenamiento está lleno o no disponible. No se han guardado los cambios recientes.")}
          </Text>}
        {offline && <Text style={st.notice}>
            {t("Offline mode · Products on this phone only", "Sin conexión · Solo productos de este teléfono")}
          </Text>}
        {comparison && tab !== "result" && <View style={st.card}>
            <Text style={st.h2}>
              {t("Comparing with", "Comparar con")}: {comparison.name}
            </Text>
            <Text style={st.small}>
              {t("Scan or choose the second food.", "Escanea o elige el segundo alimento.")}
            </Text>
            {button("Cancel comparison", "Cancelar comparación", () => setComparison(null), true)}
          </View>}
        {tab === "home" && <>
            <Text style={st.kicker}>
              {t("SMALL SCANS. BETTER CHOICES.", "ESCANEA. ELIGE MEJOR.")}
            </Text>
            <Text style={st.title}>{t("Know what’s\ninside.", "Descubre qué\ncontiene.")}</Text>
            <Text style={st.sub}>
              {t("A clearer look at what you eat and drink.", "Una mirada más clara a lo que comes y bebes.")}
            </Text>
            <View style={st.hero}>
              <Text style={st.scanSymbol}>⌗</Text>
              <Text style={st.heroTitle}>
                {t("A clearer look,\nin one scan.", "Todo más claro,\ncon un escaneo.")}
              </Text>
              <Text style={st.heroText}>
                {t("Scan. Understand. Save.", "Escanea. Comprende. Guarda.")}
              </Text>
              <Pressable onPress={startScan} style={[st.button, { backgroundColor: yellow }]}>
                <Text style={[st.bt, { color: "#23463f" }]}>
                  {t("Scan a product  →", "Escanear producto  →")}
                </Text>
              </Pressable>
            </View>
            <View style={st.search}>
              <TextInput accessibilityLabel={t("Product name or barcode", "Nombre o código de barras")} placeholder={t("Name or barcode", "Nombre o código de barras")} value={searchText} onChangeText={setSearchText} autoCorrect={false} autoCapitalize="none" onSubmitEditing={e => search(e.nativeEvent.text)} style={st.input} returnKeyType="search" />
              <Pressable onPress={() => search()} style={st.searchGo}>
                <Text style={st.bt}>→</Text>
              </Pressable>
            </View>
            {searchControls}
            {button("Read a label with the camera", "Leer una etiqueta con la cámara", () => readLabel(), true)}
            <View style={st.section}>
              <Text style={st.h2}>{t("Recent scans", "Escaneos recientes")}</Text>
              <Pressable onPress={() => goTab("history")}>
                <Text style={st.link}>{t("See all", "Ver todos")}</Text>
              </Pressable>
            </View>
            {history.length ? history.slice(0, 3).map(row) : <View style={st.card}>
                <Text style={st.h2}>
                  {t("Your discoveries start here", "Tus descubrimientos empiezan aquí")}
                </Text>
                <Text style={st.sub}>
                  {t("Scan your first product. No account needed.", "Escanea tu primer producto. Sin crear una cuenta.")}
                </Text>
              </View>}
            <Text style={st.small}>
              {t("Food & drinks worldwide · English & Spanish", "Alimentos y bebidas del mundo · Inglés y español")}
            </Text>
          </>}
        {tab === "matches" && <>
            {button("← Back", "← Volver", () => goTab("home"), true)}
            <Text style={st.title}>{t("Find your product", "Encuentra tu producto")}</Text>
            <View style={st.search}>
              <TextInput value={searchText} onChangeText={setSearchText} style={st.input} placeholder={t("Name, brand or barcode", "Nombre, marca o código")} autoCorrect={false} autoCapitalize="none" onSubmitEditing={e => search(e.nativeEvent.text)} />
              <Pressable onPress={() => search()} style={st.searchGo}>
                <Text style={st.bt}>→</Text>
              </Pressable>
            </View>
            {searchControls}
            {busy ? <View style={st.card}>
                <ActivityIndicator color={teal} />
                <Text style={st.sub}>{t("Checking product records…", "Buscando productos…")}</Text>
              </View> : <>
                <Text style={st.sub}>
                  {t("Choose the exact name and package.", "Elige el nombre y envase exactos.")}
                </Text>
                {shownItems.slice(0, 60).map(row)}
                {items.length > 0 && shownItems.length === 0 && <Text style={st.notice}>
                    {t("No matches for these filters. Turn a filter off to see other results.", "No hay resultados con estos filtros. Desactiva un filtro para ver otros.")}
                  </Text>}
                {items.length > 0 && !offline && <Pressable accessibilityRole="button" disabled={downloading} onPress={downloadResults} style={st.button}>
                    <Text style={st.bt}>
                      {downloading ? t("Downloading…", "Descargando…") : t("Download these results for offline use", "Descargar resultados para usar sin conexión")}
                    </Text>
                  </Pressable>}
                {!!downloadNote && <Text style={st.small}>{downloadNote}</Text>}
                {notice ? <Text style={st.notice}>{notice}</Text> : null}
                {button("Read my label with the camera", "Leer mi etiqueta con la cámara", () => readLabel(), true)}
              </>}
          </>}
        {tab === "result" && currentFood && a && <>
            {button("← Scan another", "← Escanear otro", () => goTab("home"), true)}
            <View style={st.productTop}>
              {currentFood.image && !offline && <Image source={{ uri: currentFood.image }} style={st.bigPhoto} />}
              <View style={{ flex: 1 }}>
                <Text style={st.brand}>{currentFood.brand}</Text>
                <Text style={st.h2}>{currentFood.name}</Text>
                <Text style={st.small}>
                  {currentFood.match === "label" ? t("Your label", "Tu etiqueta") : currentFood.code}
                </Text>
              </View>
            </View>
            <View style={[st.rating, {
          backgroundColor: scoreColor(a.score)
        }]}>
              <Text testID="product-score" style={st.score}>
                {a.score ?? "—"}
                {a.score !== null && <Text style={{ fontSize: 18 }}>
                    {" "}
                    / 5
                  </Text>}
              </Text>
              <View style={{ flex: 1 }}>
                <Text style={st.h2}>
                  {scoreTitle}
                </Text>
                <Text style={st.small}>
                  {currentFood.kind === "food" ? t("Food rating · Check your allergens too.", "Puntuación del alimento · Revisa tus alérgenos.") : t("Label concerns · Follow the package directions.", "Advertencias · Sigue las instrucciones del envase.")}
                </Text>
              </View>
            </View>
            <Pressable onPress={() => setShowHow(true)}>
              <Text style={st.link}>{t("What the score means", "Qué significa la puntuación")}</Text>
            </Pressable>
            {button(isSaved ? "Saved ✓" : "Save product", isSaved ? "Guardado ✓" : "Guardar producto", toggleSaved, true)}
            <Pressable testID="share-product" accessibilityRole="button" disabled={detailBusy} onPress={shareCurrentProduct} style={[st.button, st.secondary, detailBusy && { opacity: 0.5 }]}>
              <Text style={[st.bt, { color: teal }]}>
                {t("Share product summary", "Compartir resumen del producto")}
              </Text>
            </Pressable>
            {getShopLink(currentFood) && button("View exact product page ↗", "Ver la página del producto exacto ↗", () => {
          const url = getShopLink(currentFood);
          if (url) openLink(url, es);
        }, true)}
            {localResult && <Text style={st.notice}>
                {t("Using the latest copy saved on this phone.", "Usando la última copia guardada en este teléfono.")}
                {currentFood.downloadedAt ? " · " + new Date(currentFood.downloadedAt).toLocaleDateString(es ? "es" : "en") : ""}
              </Text>}
            {!detailBusy && oldScan && <ChangesCard key={"changes-" + currentFood.code} previous={oldScan} product={currentFood} avoid={avoid} es={es} onDismiss={dismissChanges} />}
            <NutritionBox product={currentFood} analysis={a} es={es} loading={detailBusy} onAddLabel={() => readLabel(currentFood)} />
            <HealthCheck key={currentFood.code} product={currentFood} analysis={a} es={es} loading={detailBusy} onAddLabel={() => readLabel(currentFood)} />
            <View style={st.card}>
              <Text style={st.h2}>{t("Why this score", "Por qué esta puntuación")}</Text>
              <Text style={st.body}>
                {detailBusy && a.score === null ? t("Checking another source for the nutrition amounts…", "Consultando otra fuente para obtener la información nutricional…") : whyScore(currentFood, a.score, es, a.concerns.some(c => c.id === "allergen-match"))}
              </Text>
            </View>
            {a.concerns.length > 0 && <View style={st.card}>
                <Text style={st.h2}>{t("Issues to know", "Puntos importantes")}</Text>
                {a.concerns.map(c => <View key={c.id}>
                    <Pressable accessibilityRole="button" accessibilityState={{
              expanded: expandedConcern === c.id
            }} onPress={() => setExpandedConcern(expandedConcern === c.id ? null : c.id)} style={{ paddingVertical: 12 }}>
                      <Text style={st.product}>
                        {es ? spanishIssue(c.id, c.title)[0] : c.title}{" "}
                        {expandedConcern === c.id ? "−" : "+"}
                      </Text>
                    </Pressable>
                    {expandedConcern === c.id && <>
                        <Text style={st.body}>
                          {es ? spanishReason(c.id, currentFood, c.reason) : c.reason}
                        </Text>
                        <Text style={st.body}>
                          {es ? spanishIssue(c.id, c.title)[1] : c.effect}
                        </Text>
                        <Text style={st.body}>
                          {es ? spanishIssue(c.id, c.title)[2] : c.action}
                        </Text>
                        <Pressable onPress={() => openLink(c.source.url, es)}>
                          <Text style={st.link}>{t("Why it matters ↗", "Por qué importa ↗")}</Text>
                        </Pressable>
                      </>}
                  </View>)}
              </View>}
            {(needsSwap(a.score) || swaps.length > 0 || findingSwaps && a.score !== 5) && currentFood.kind === "food" && <View testID="better-options" style={[st.card, { borderColor: "#9ac8ab", backgroundColor: "#edf6ed" }]}>
                <Text style={st.kicker}>{a.score === null ? t("TOP-RATED IN THIS CATEGORY", "MEJOR VALORADOS EN ESTA CATEGORÍA") : t("BETTER OPTIONS", "MEJORES OPCIONES")}</Text>
                {(findingSwaps || detailBusy) && !swaps.length ? <>
                    <ActivityIndicator color={teal} />
                    <Text style={st.small}>{t("Finding higher-rated products in the same category…", "Buscando productos mejor valorados de la misma categoría…")}</Text>
                  </> : swaps.length ? swaps.map(option => <View key={"better-" + option.code} style={{
            gap: 6,
            marginBottom: 8
          }}>
                    {row(option)}
                    <Text style={st.body}>{swapReason(currentFood, option, es)}</Text>
                    <Pressable accessibilityRole="link" onPress={() => openLink(getShopLink(option) || googleShopLink(option), es)}>
                      <Text style={st.link}>
                        {getShopLink(option) ? t("View at ", "Ver en ") + (option.shop?.retailer || t("the store", "la tienda")) + " ↗" : t("Find it in stores ↗", "Buscar en tiendas ↗")}
                      </Text>
                    </Pressable>
                  </View>) : <>
                    <Text style={st.h2}>
                      {t("Already the top-rated pick", "Ya es la mejor opción valorada")}
                    </Text>
                    <Text style={st.body}>
                      {t("Scan Safe compared it with the products in its category sold in your country, and none rated higher.", "Scan Safe lo comparó con los productos de su categoría que se venden en tu país y ninguno tiene mejor puntuación.")}
                    </Text>
                    {button("Scan another option", "Escanear otra opción", startScan)}
                  </>}
              </View>}
            <ShoppingStuff key={"shopping-" + currentFood.code} product={currentFood} other={comparison && !sameFood(comparison.code, currentFood.code) ? comparison : null} alternative={swap} products={libRef.current} avoid={avoid} es={es} onChoose={setComparison} onScan={() => {
          setComparison(currentFood);
          startScan();
        }} onClear={() => setComparison(null)} />
            <DietResults product={currentFood} selected={diet} es={es} />
            <MoreDetails key={"details-" + currentFood.code} product={currentFood} analysis={a} es={es} showNutrition={false} />
            {currentFood.ingredients.trim().length > 0 && <View style={st.card}>
                <Text style={st.h2}>{t("Full ingredients", "Ingredientes completos")}</Text>
                <Text selectable style={st.body}>
                  {currentFood.ingredients}
                </Text>
                <Text style={st.small}>
                  {currentFood.ingredientListKind === "structured" ? t("Names assembled from the source’s ingredient entries.", "Nombres reunidos de los ingredientes de la fuente.") : currentFood.ingredientListKind === "photo" ? t("Read automatically from the published label photo.", "Leído automáticamente de la foto publicada de la etiqueta.") : t("Shown as written in the product record.", "Texto original del registro del producto.")}
                </Text>
                {button("Read another label photo", "Leer otra foto de etiqueta", () => readLabel(currentFood), true)}
                {currentFood.labelText && <>
                    <Text style={st.h2}>
                      {t("Text read from your photo", "Texto leído de tu foto")}
                    </Text>
                    <Text selectable style={st.body}>
                      {currentFood.labelText}
                    </Text>
                  </>}
                {button("Edit label text", "Editar texto de etiqueta", () => {
            setEditing(currentFood);
            setLabelName(currentFood.name)

            setLabelText(currentFood.ingredients);
            setKind(currentFood.kind);
            setSugar(String(getNutrient(currentFood, "sugars") ?? ""));
            setSatFat(String(getNutrient(currentFood, "saturated-fat") ?? ""));

            setSalt(String(getNutrient(currentFood, "salt") ?? "")); 
            setLabelOpen(true);
          }, true)}
              </View>}
            <Text style={st.h2}>{t("Sources", "Fuentes")}</Text>
            {currentFood.sources.map(x => <Pressable key={x.url} onPress={() => openLink(x.url, es)}>
                <Text style={st.link}>{x.name} ↗</Text>
                {x.updated && <Text style={st.small}>
                    {t("Record updated: ", "Registro actualizado: ")}
                    {x.updated}
                  </Text>}
              </Pressable>)}
            <Text style={st.small}>
              {t("Green is a favorable rating, not a guarantee for every person or use.", "Verde indica una puntuación favorable, no una garantía para cada persona o uso.")}
            </Text>
            {history.some(food => sameFood(food.code, currentFood.code)) && <Pressable testID="remove-scan" accessibilityRole="button" onPress={() => removeHistory(currentFood)} style={[st.button, st.secondary]}>
                <Text style={[st.bt, { color: teal }]}>
                  {t("Remove from history", "Eliminar del historial")}
                </Text>
              </Pressable>}
          </>}
        {(tab === "history" || tab === "saved") && <>
            <Text style={st.title}>
              {tab === "history" ? t("Your scans", "Tus escaneos") : t("Saved products", "Productos guardados")}
            </Text>
            <Text style={st.small}>
              {t("No scan-count limit. Stored on this phone, subject to available space.", "Sin límite de escaneos. Guardados en este teléfono según el espacio disponible.")}
            </Text>
            {tab === "history" && history.length > 0 && <Pressable testID="clear-history" accessibilityRole="button" onPress={() => removeHistory()} style={[st.button, st.secondary]}>
                <Text style={[st.bt, {
            color: teal
          }]}>
                  {t("Clear history", "Borrar historial")}
                </Text>
              </Pressable>}
            <TextInput style={st.field} value={historyQuery} onChangeText={txt => {
          setHistoryQuery(txt);
          setHistoryLimit(30);
        }} placeholder={t("Search your scans", "Buscar tus escaneos")} />
            {shownHistory.slice(0, historyLimit).map(row)}
            {shownHistory.length > historyLimit && button("Show more", "Ver más", () => setHistoryLimit(historyLimit + 30), true)}
            {shownHistory.length === 0 && <Text style={st.sub}>
                {t("Your products will appear here.", "Tus productos aparecerán aquí.")}
              </Text>}
          </>}
        {tab === "settings" && <>
            <Text style={st.title}>{t("Made for you", "Para ti")}</Text>
            <Text style={st.kicker}>
              {t("ALL FEATURES FREE · NO SUBSCRIPTION", "TODO GRATIS · SIN SUSCRIPCIÓN")}
            </Text>
            <DietPicker selected={diet} onChange={setDiet} es={es} />
            <View style={st.card}>
              <Text style={st.h2}>{t("Ready without a signal", "Listo sin señal")}</Text>
              <Text style={st.body}>
                {libRef.current.length}{" "}
                {t("products on this phone. Viewed products are kept automatically. Download search results before shopping to add more.", "productos en este teléfono. Los productos vistos se guardan automáticamente. Descarga resultados antes de comprar para añadir más.")}
              </Text>
              {button(offline ? "Turn offline mode off" : "Use offline mode", offline ? "Desactivar modo sin conexión" : "Usar modo sin conexión", () => {
            stopRequests();
            setOffline(!offline);
          }, true)}
              <Text style={st.small}>
                {t("Offline mode uses no product lookups. It is your downloaded collection, not the entire worldwide database. Photos, label-reader setup and retailer links may need internet.", "El modo sin conexión no busca productos en internet. Usa tu colección descargada, no toda la base mundial. Las fotos, la carga del lector y las tiendas pueden necesitar internet.")}
              </Text>
            </View>
            <View style={st.card}>
              <Text style={st.h2}>{t("Language", "Idioma")}</Text>
              {button(es ? "English" : "Español", es ? "English" : "Español", () => setLang(es ? "en" : "es"), true)}
            </View>
            <View style={st.card}>
              <Text style={st.h2}>{t("Ingredients you avoid", "Ingredientes que evitas")}</Text>
              <Text style={st.sub}>
                {t("Choose your allergens to personalize results.", "Elige tus alérgenos para personalizar los resultados.")}
              </Text>
              <View style={st.chips}>
                {allergenRegex.map(([name]) => <Pressable key={name} onPress={() => toggleAvoid(name)} style={[st.chip, avoid.includes(name) && { backgroundColor: "#c5e8d8", borderColor: teal }]}>
                    <Text>
                      {avoid.includes(name) ? "✓ " : ""}
                      {es ? allergyEs(name) : name}
                    </Text>
                  </Pressable>)}
              </View>
            </View>
            <View style={st.card}>
              <Text style={st.h2}>{t("Your privacy", "Tu privacidad")}</Text>
              <Text style={st.body}>
                {t("Scans and preferences stay on this phone. Searches go to product databases and retailer pages. Camera access starts only when you choose it.", "Los escaneos y preferencias se guardan en este teléfono. Las búsquedas consultan bases de productos y páginas de tiendas. La cámara se activa cuando tú lo decides.")}
              </Text>
              {button("How ratings work", "Cómo puntuamos", () => setShowHow(true), true)}
            </View>
          </>}
      </ScrollView>
      <View style={st.nav}>
        {[["home", "⌗", "Scan", "Escanear"], ["history", "◷", "History", "Historial"], ["saved", "♡", "Saved", "Guardados"], ["settings", "☷", "You", "Tú"]].map(([id, icon, en, sp]) => <Pressable key={id} accessibilityRole="tab" accessibilityState={{
        selected: tab === id
      }} onPress={() => goTab(id)} style={st.navItem}>
            <Text style={[st.navIcon, tab === id && { color: teal }]}>
              {icon}
            </Text>
            <Text style={[st.navText, tab === id && { color: teal, fontWeight: "800" }]}>
              {t(en, sp)}
            </Text>
          </Pressable>)}
      </View>
      <LabelReader visible={reader} es={es} onClose={() => showReader(false)} onRead={txt => {
      const res = readLabelText(txt, labelBase.current);
      showReader(false);
      choose(res);
    }} />
      <Modal visible={scan} animationType="slide" onRequestClose={() => setScan(false)}>
        <SafeAreaView style={st.safe}>
          <View style={st.header}>
            <Text style={st.h2}>{t("Scan a barcode", "Escanear código")}</Text>
            <Pressable onPress={() => setScan(false)}>
              <Text style={st.link}>{t("Close", "Cerrar")}</Text>
            </Pressable>
          </View>
          {comparison && <Text style={[st.small, { paddingHorizontal: 20, paddingBottom: 12 }]}>
              {t("Compare with: ", "Comparar con: ")}
              {comparison.name}
            </Text>}
          {scan && permission?.granted && active && !cameraError ? <View style={{ flex: 1 }}>
              <CameraView onMountError={() => setCameraError(true)} style={{ flex: 1 }} facing="back" barcodeScannerSettings={{
            barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e", "itf14", "code128", "qr", "datamatrix"]
          }} onBarcodeScanned={r => {
            if (locked.current) return;
            const code = cleanScannedCode(r.data, r.type);
            if (!code) return;
            locked.current = true;
            setSearchText(code);
           search(code)
          }} />
              <View pointerEvents="none" style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: "center"
          }}>
                <View style={st.cameraFrame}>
                  <Text style={st.cameraText}>
                    {t("Place the barcode inside the frame", "Coloca el código dentro del marco")}
                  </Text>
                </View>
              </View>
            </View> : <View style={st.content}>
              <Text style={st.sub}>
                {cameraError ? t("The camera could not start. Close it and try again.", "No se pudo iniciar la cámara. Ciérrala e inténtalo de nuevo.") : t("Allow the camera to scan a product. You can also type its barcode.", "Permite usar la cámara para escanear. También puedes escribir el código.")}
              </Text>
              {button("Allow camera", "Permitir cámara", () => {
            setCameraError(false);
            if (permission && !permission.canAskAgain) Linking.openSettings().catch(() => setCameraError(true));
            else askPermission().catch(() => setCameraError(true));
          })}
            </View>}
          <View style={{ padding: 20 }}>
            {button("Read ingredients or warnings", "Leer ingredientes o advertencias", () => readLabel(), true)}
            <TextInput accessibilityLabel={t("Barcode number", "Número del código")} placeholder={t("Type barcode digits", "Escribe el código")} value={searchText} onChangeText={setSearchText} keyboardType="number-pad" style={st.field} />
            {button("Find product", "Buscar producto", () => search())}
          </View>
        </SafeAreaView>
      </Modal>
      <Modal visible={label} animationType="slide" onRequestClose={() => setLabelOpen(false)}>
        <SafeAreaView style={st.safe}>
          <View style={st.header}>
            <Text style={st.h2}>{t("Your package", "Tu envase")}</Text>
            <Pressable onPress={() => setLabelOpen(false)}>
              <Text style={st.link}>{t("Close", "Cerrar")}</Text>
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={st.content} keyboardShouldPersistTaps="handled">
            <Text style={st.sub}>
              {t("Enter the exact words on the ingredient or warning label.", "Escribe las palabras exactas de los ingredientes o advertencias.")}
            </Text>
            <TextInput placeholder={t("Product name", "Nombre del producto")} value={labelName} onChangeText={setLabelName} style={st.field} />
            <TextInput multiline placeholder={t("Ingredients and warnings", "Ingredientes y advertencias")} value={labelText} onChangeText={setLabelText} style={[st.field, {
            height: 180,
            textAlignVertical: "top"
          }]} />
            {kind === "food" && <>
                <Text style={st.h2}>
                  {t("Nutrition per " + (editing?.nutritionBasis === "100ml" ? "100 ml" : "100 g") + " (optional)", "Nutrición por " + (editing?.nutritionBasis === "100ml" ? "100 ml" : "100 g") + " (opcional)")}
                </Text>
                <Text style={st.small}>
                  {t("Copy all three values from the package to calculate a food score. Use grams, not the amount per serving.", "Copia los tres valores del envase para calcular la puntuación. Usa gramos, no la cantidad por porción.")}
                </Text>
                {[[t("Sugar (g)", "Azúcar (g)"), sugar, setSugar], [t("Saturated fat (g)", "Grasa saturada (g)"), satFat, setSatFat], [t("Salt (g)", "Sal (g)"), salt, setSalt]].map(([title, value, set]) => <TextInput key={title} accessibilityLabel={title} placeholder={title} value={value} onChangeText={set} keyboardType="decimal-pad" style={st.field} />)}
              </>}
            {button("See results", "Ver resultados", () => {
            if (labelText.trim().length < 3 && !sugar.trim()) return;
            const entered = [sugar, satFat, salt];
            if (entered.some(v => v.trim() !== "" && (!/^\d+(?:[.,]\d+)?$/.test(v.trim()) || Number(v.replace(",", ".")) > 100))) {
              Alert.alert(t("Use a number from 0 to 100", "Usa un número de 0 a 100"), t("Enter grams of sugar, saturated fat and salt.", "Introduce gramos de azúcar, grasa saturada y sal."));
              return;
            }

            const kept = {
              ...editing?.nutrients
            };
            for(const k of ["sugars", "saturated-fat", "salt", "sodium"]) {
              delete kept[k];
              delete kept[k + "_100g"];
            }
            const typed = {
              ...kept
            };
            const fieldPairs = [["sugars_100g", sugar], ["saturated-fat_100g", satFat], ["salt_100g", salt]];
            for (const [name, value] of fieldPairs) {
              const num = Number(value.replace(",", "."));
              if (value.trim() !== "" && Number.isFinite(num) && num >= 0) typed[name] = num;
            }
            setLabelOpen(false)
            choose({
              ...editing,
              code: editing?.code || "label-" + Date.now(),
              name: labelName || t("My product", "Mi producto"),
              brand: editing?.brand || "",
              kind: "food",
              nutritionBasis: editing?.nutritionBasis || "100g",
              ingredients: labelText,
              allergens: editing?.allergens || [],
              traces: editing?.traces || [],
              labels: editing?.labels || [],
              nutritionGrade: undefined,
              shop: undefined,
              labelClaims: [],
              ingredientTags: [],
              additiveTags: [],
              ingredientListKind: "label",
              labelText,
              nutrients: typed,
              categories: editing?.categories || [],
              sources: editing?.sources || [],
              category: editing?.category || "",
              match: "label"
            });
          })}
          </ScrollView>
        </SafeAreaView>
      </Modal>
      <Modal visible={showHow} animationType="slide" onRequestClose={() => setShowHow(false)}>
        <SafeAreaView style={st.safe}>
          <ScrollView contentContainerStyle={st.content}>
            <Text style={st.title}>
              {t("A simple score.\nA clear reason.", "Una puntuación.\nUna razón clara.")}
            </Text>
            <Text style={st.body}>
              {t("1–2: higher concern. 3: average. 4–5: lower concern. Food scores use the published nutrition grade when available. Otherwise, we compare sugar, saturated fat and salt per 100 g of food or 100 ml of drink when the label gives that basis. This is a simple Scan Safe comparison, not a medical safety test.", "1–2: mayor preocupación. 3: intermedio. 4–5: menor preocupación. Usamos la nota nutricional publicada cuando está disponible. Si no, comparamos azúcar, grasa saturada y sal por 100 g de alimento o 100 ml de bebida cuando la etiqueta lo indica. Es una comparación de Scan Safe, no una prueba médica de seguridad.")}
            </Text>
            <Text style={st.body}>
              {t("A match with an allergen you avoid lowers the score to 1. Ingredient concerns can also affect the score. Missing details are never counted as proof of safety.", "Si aparece un alérgeno que evitas, la puntuación baja a 1. Los posibles problemas de los ingredientes también pueden afectar la puntuación. La falta de datos nunca demuestra seguridad.")}
            </Text>
            {a && <Text style={st.body}>
                {a.concerns.some(c => c.id === "allergen-match") ? t("This product matches an allergen you avoid, so its score is 1.", "Este producto incluye un alérgeno que evitas, por eso su puntuación es 1.") : currentFood?.kind === "food" ? t("For food labels, less sugar, salt and saturated fat gives a higher comparison score. This does not check every possible concern.", "En las etiquetas de alimentos, menos azúcar, sal y grasa saturada da una mejor puntuación. Esto no comprueba todos los posibles problemas.") : t("For other products, the score reflects handling warnings and sensitivity concerns found in the label.", "En otros productos, la puntuación refleja las advertencias y posibles reacciones indicadas en la etiqueta.")}
              </Text>}
            {button("Got it", "Entendido", () => setShowHow(false))}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>;
}

function googleShopLink(p) {
  return "https://www.google.com/search?tbm=shop&q=" + encodeURIComponent([p.brand, p.name].filter(Boolean).join(" ").slice(0, 120));
}

function swapReason(original, other, es) {
  if (other.alternativeWhy) return other.alternativeWhy[es ? "es" : "en"];
  const labelNames = es ? ["azúcar", "grasa saturada", "sal"] : ["sugar", "saturated fat", "salt"]

  const less = [];
  if (original.nutritionBasis === other.nutritionBasis) {
    const keys = ["sugars", "saturated-fat", "salt"];
    for (let i = 0; i < keys.length; i++) {
      const a = Number(original.nutrients[keys[i] + "_100g"]);
      const b = Number(other.nutrients[keys[i] + "_100g"]);
      if (Number.isFinite(a) && Number.isFinite(b) && b < a) less.push(labelNames[i]);
    }
  }
  let msg = "";
  if (es) msg = "Es del mismo tipo de alimento y su puntuación no es menor. ";
  else msg = "It is the same type of food and its score is no lower. ";
  if (less.length > 0) {
    msg += es ? "Tiene menos " : "It has less ";
    msg += less.join(", ");
    msg += es ? " por " : " per ";
    if (other.nutritionBasis === "100ml") msg += "100 ml. ";
    else msg += "100 g. ";
  }
  if(es) msg += "No se encontró un alérgeno de tu lista en el registro revisado.";
  else msg += "The checked ingredients do not name an allergen from your avoid list; this is not an allergen-free guarantee.";

  return msg;
}
function whyScore(p, score, es, allergy) {
  const t = (a, b) => es ? b : a;
  if (allergy) return t("An allergen on your avoid list appears in the ingredients or “may contain” warning. That makes your score 1.", "Se encontró un alérgeno que evitas en los ingredientes o en “puede contener”. Por eso tu puntuación es 1.");
  if (p.categories.includes("drug")) return t("This is a medicine label. Its warnings depend on who uses it and how. A general safety score would be misleading.", "Es una etiqueta de medicamento. Sus advertencias dependen de quién lo usa y cómo. Una puntuación general sería engañosa.");
  if (p.kind === "food") {
    if (p.nutritionGrade && /^[abcde]$/i.test(p.nutritionGrade)) return t(`The product record gives this food a nutrition grade of ${p.nutritionGrade.toUpperCase()}, which maps to ${score}/5. Ingredient and allergy concerns are checked separately below.`, `El registro da a este alimento una nota nutricional ${p.nutritionGrade.toUpperCase()}, equivalente a ${score}/5. Los ingredientes y alérgenos se revisan por separado abajo.`);
    const keys = ["sugars", "saturated-fat", "salt"];
    const nameList = es ? ["azúcar", "grasa saturada", "sal"] : ["sugar", "saturated fat", "salt"];
    const values = keys.map((k, i) => {
      const v = p.nutrients[k + "_100g"] ?? (k === "salt" && p.nutrients.sodium_100g !== undefined ? Number(p.nutrients.sodium_100g) * 2.5 : undefined);
      return v === undefined ? null : `${Number(v).toLocaleString(es ? "es" : "en", { maximumFractionDigits: 2 })} g ${nameList[i]}`
    });
    if (values.every(Boolean) && score !== null) return t(`Per ${p.nutritionBasis === "100ml" ? "100 ml" : "100 g"}: ${values.join(", ")}. The score compares these three amounts; lower amounts get a higher score.`, `Por ${p.nutritionBasis === "100ml" ? "100 ml" : "100 g"}: ${values.join(", ")}. La puntuación compara estas tres cantidades; cantidades menores dan una puntuación mayor.`);
  }

  return score === null ? t("Scan the nutrition label and Scan Safe will score this product.", "Escanea la tabla nutricional y Scan Safe puntuará este producto.") : t("This score reflects the label concerns listed below. It does not measure the amount you are exposed to.", "La puntuación refleja los problemas de la etiqueta indicados abajo. No mide la cantidad a la que te expones.");
}

function spanishReason(id, p, fallback) {
  let key;
  if (id === "sugars-100g") {
    key = "sugars";
  } else if (id === "salt-100g") {
    key = "salt";
  } else if (id === "saturated-fat-100g") {
    key = "saturated-fat";
  } else {
    key = null;
  }
  if (key) {
    const v = p.nutrients[key + "_100g"] ?? (key === "salt" ? Number(p.nutrients.sodium_100g) * 2.5 : undefined);
    return `${Number(v).toLocaleString("es", { maximumFractionDigits: 2 })} g por ${p.nutritionBasis === "100ml" ? "100 ml" : "100 g"}: una cantidad alta.`;
  }
  if (id === "allergen-match") return "La lista de ingredientes o la advertencia «puede contener» coincide con un alérgeno que evitas.";

  if (id === "package-warning") return p.warnings || fallback;
  const quoted = [...fallback.matchAll(/“([^”]+)”/g)].map(m => m[1]);
  return quoted.length ? "En la etiqueta: " + quoted.join(", ") + "." : "La información del envase indica esta cantidad o advertencia." 
}

function scoreColor(n) {
  if (n === null) {
    return "#e9ede9";
  }
  if (n <= 2) {
    return "#f8dcd8";
  }
  if (n === 3) {
    return "#fff0ba";
  }
  return "#d7efdf";
}
function spanishIssue(id, fallback) {
  const m = {
    "salt-100g": ["Sal elevada", "Consumir demasiada sal con frecuencia puede aumentar la presión arterial.", "Compara la misma porción y elige menos sal."],
    "saturated-fat-100g": ["Grasa saturada elevada", "Consumir demasiada grasa saturada puede elevar el colesterol.", "Compara la misma porción y elige menos grasa saturada."],
    "package-warning": ["Advertencia importante", "El envase incluye una advertencia importante de uso.", "Sigue las instrucciones del envase y mantenlo fuera del alcance de los niños."],
    "allergen-match": ["Un alérgeno de tu lista", "Este producto contiene o puede contener un alérgeno que evitas. Puede causar una reacción grave en personas alérgicas.", "Evita este producto si tienes esta alergia. Sigue tu plan para la alergia."], 
    fragrance: ["Perfume", "Puede irritar la piel o causar alergia en personas sensibles.", "Si te afecta, elige una opción sin perfume."],
    "fragrance-allergens": ["Ingredientes de perfume", "Pueden causar alergia en la piel de personas sensibles.", "Evita los ingredientes a los que sabes que reaccionas."],
    mi: ["Conservantes", "Pueden causar reacciones alérgicas en la piel.", "Evítalos si tienes una alergia conocida."],
    formaldehyde: ["Formaldehído", "Puede irritar los ojos y las vías respiratorias. La inhalación prolongada a niveles suficientes puede aumentar el riesgo de cáncer.", "Sigue las instrucciones de ventilación y uso."],
    releaser: ["Conservante que libera formaldehído", "Puede liberar pequeñas cantidades de formaldehído y causar reacciones alérgicas.", "Evítalo si tienes alergia al formaldehído."],
    bleach: ["Lejía", "Puede irritar o quemar. Mezclarla con ácidos o amoníaco puede liberar gases peligrosos.", "Nunca mezcles productos de limpieza. Sigue las instrucciones."],
    ammonia: ["Amoníaco", "Sus vapores pueden irritar ojos y pulmones. Mezclarlo con lejía puede liberar gases peligrosos.", "Ventila y nunca lo mezcles con lejía."],
    lye: ["Ingrediente alcalino", "Concentrado puede causar quemaduras. Su presencia no indica la fuerza del producto terminado.", "Sigue las advertencias del producto."],
    methanol: ["Metanol", "Ingerirlo puede causar intoxicación grave, ceguera o muerte.", "Sigue las advertencias. No lo uses como desinfectante de manos."],
    glycol: ["Etilenglicol", "Ingerirlo puede causar intoxicación grave y daño renal.", "Mantenlo lejos de niños y mascotas."],
    toluene: ["Tolueno", "Respirar suficiente vapor puede causar mareos, dolor de cabeza y efectos en el sistema nervioso.", "Ventila y sigue las instrucciones de protección."],
    ptfe: ["Revestimiento antiadherente", "El sobrecalentamiento intenso puede liberar humos dañinos.", "Evita calentar una sartén vacía y respeta la temperatura indicada."],
    sulfites: ["Sulfitos", "Pueden causar reacciones en personas sensibles, incluidas algunas personas con asma.", "Evítalos si sabes que eres sensible."],
    aspartame: ["Aspartamo", "Aporta fenilalanina, que deben restringir las personas con fenilcetonuria.", "Si tienes esta condición, sigue tus límites indicados."],
    polyols: ["Alcoholes de azúcar", "Cantidades grandes pueden causar gases, hinchazón o diarrea.", "Revisa la porción si te causan molestias."],
    "added-sugars": ["Azúcar añadido elevado", "Consumir mucho puede dificultar una alimentación equilibrada.", "Compara las porciones y elige menos azúcar."],
    sodium: ["Sodio elevado", "Consumir demasiado de forma habitual puede aumentar la presión arterial.", "Compara productos y elige menos sodio."],
    "saturated-fat": ["Grasa saturada elevada", "Consumir mucha puede elevar el colesterol LDL.", "Compara productos y elige menos grasa saturada."],
    "sugars-100g": ["Azúcar elevado", "La cantidad de azúcar supera el límite alto para este tipo de alimento o bebida.", "Compara productos y porciones."]
  };
  return m[id] || [fallback, "Revisa la información del producto en la fuente.", "Sigue las instrucciones del envase."];
}

const st = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f7f9f5" },
  header: {
    paddingHorizontal: 22,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e1e8df",
    backgroundColor: "white"
  },
  logo: {
    fontSize: 23,
    fontWeight: "800",
    color: "#183f37"
  },
  lang: { padding: 10, borderRadius: 15, backgroundColor: "#edf5ec" },
  content: {
    padding: 22,
    paddingBottom: 35,
    gap: 16
  },
  kicker: {
    fontSize: 10,
    letterSpacing: 1.7,
    fontWeight: "800",
    color: teal
  },
  title: {
    fontSize: 38,
    lineHeight: 43,
    fontWeight: "800",
    letterSpacing: -1.5,
    color: "#193f36"
  },
  sub: { fontSize: 15, lineHeight: 23, color: "#657b6c" },
  hero: {
    padding: 25,
    borderRadius: 25,
    backgroundColor: "#12594f",
    gap: 18
  },
  scanSymbol: { fontSize: 50, color: yellow },
  heroTitle: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "700",
    color: "white"
  },
  heroText: { fontSize: 14, lineHeight: 21, color: "#d7e9dc" },
  button: {
    backgroundColor: teal,
    padding: 16,
    borderRadius: 13,
    alignItems: "center",
    minHeight: 50
  },
  bt: { color: "white", fontSize: 15, fontWeight: "700" },
  secondary: { backgroundColor: "white", borderWidth: 1, borderColor: "#cedfd1" },
  search: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d5e1d4",
    borderRadius: 14,
    backgroundColor: "white",
    overflow: "hidden"
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 15,
    color: "#173e35"
  },
  searchGo: { backgroundColor: teal, padding: 17 },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8
  },
  h2: {
    fontSize: 19,
    fontWeight: "700",
    color: "#214838",
    lineHeight: 25
  },
  link: {
    fontSize: 14,
    color: teal,
    fontWeight: "700",
    paddingVertical: 8
  },
  card: {
    padding: 20,
    gap: 12,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#dfe6da",
    backgroundColor: "white"
  },
  small: { fontSize: 12, color: "#697b6b", lineHeight: 19 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e0e7db",
    marginVertical: 5
  },
  thumb: {
    width: 48,
    height: 60,
    backgroundColor: "#f0f4ec",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center"
  },
  photo: { width: 42, height: 55, resizeMode: "contain" },
  icon: { fontSize: 30, color: teal },
  brand: {
    fontSize: 10,
    color: teal,
    fontWeight: "700",
    letterSpacing: 0.6
  },
  product: {
    fontSize: 15,
    fontWeight: "600",
    color: "#244337",
    marginTop: 4
  },
  badge: {
    padding: 10,
    borderRadius: 10,
    fontWeight: "800",
    fontSize: 17
  },
  notice: {
    padding: 15,
    backgroundColor: "#fff1c4",
    borderRadius: 10,
    lineHeight: 22
  },
  productTop: { flexDirection: "row", gap: 20, alignItems: "center" },
  bigPhoto: { width: 90, height: 110, resizeMode: "contain" },
  rating: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    padding: 22,
    borderRadius: 18
  },
  score: {
    fontSize: 48,
    fontWeight: "800",
    color: "#214b36"
  },
  body: { fontSize: 15, lineHeight: 23, color: "#3b5545" },
  nav: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#dfe7dc",
   paddingTop: 10,
    paddingBottom: 6
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    gap: 5,
    minHeight: 48
  },
  navIcon: { fontSize: 25, color: "#849082" },
  navText: { fontSize: 11, color: "#758273" },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 9 },
  chip: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#d7e3d3",
    borderRadius: 12
  },
  cameraFrame: {
    margin: 32,
    minHeight: 140,
    maxHeight: 200,
    borderWidth: 2,
    borderColor: yellow,
    borderRadius: 22,
    justifyContent: "flex-end",
    padding: 20
  },
  cameraText: {
    color: "white",
    backgroundColor: "#17493bc0",
    padding: 10,
    textAlign: "center"
  },
  field: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#cedcc9",
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 12
  }
})

registerRootComponent(App);

export default App;
