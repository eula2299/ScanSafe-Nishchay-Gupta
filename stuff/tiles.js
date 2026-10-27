import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { findPreservatives, flavorLink, getFlavorTypes, getNamedFlavors, findClaims, getClaim, ukLabelLink, fdaAdditivesLink, gmoLink, isDrink, getNutrient, getServingNutrient, howHigh, openLink } from "./helpers";
import { findAdditives } from "./additives";
function makeTiles(p, a, es = false) {
  const t = (en, sp) => es ? sp : en;
  const unit = p.nutritionBasis === "100ml" ? "100 ml" : "100 g";
  const amount = key => {
    const n = getNutrient(p, key);
    return n === null ? t("Not on record", "No figura") : `${n.toLocaleString(es ? "es" : "en", { maximumFractionDigits: 2 })} g`;
  };
  const colorNote = t(`Amounts per ${unit}. Red means high, yellow means medium, green means low.`, `Cantidades por ${unit}. Rojo: alto; amarillo: medio; verde: bajo.`) + (isDrink(p) && p.nutritionBasis !== "100ml" ? t(" The drink record has no confirmed volume basis, so its color is left gray.", " El registro no confirma una base por volumen; por eso el color queda gris.") : "");
  const fat = howHigh(p, "saturated-fat");
  const salt = howHigh(p, "salt");
  let combined;
  if (fat === "high" || salt === "high") {
    combined = "high";
  } else if (fat === "unknown" || salt === "unknown") {
    combined = "unknown"; 
  } else if (fat === "medium" || salt === "medium") {
    combined = "medium";
  } else {
    combined = "low";
  }
  const allergy = a.concerns.some(x => x.id === "allergen-match");
  const allergenList = [...new Set([...a.allergenNames, ...a.traceNames])];

  const allergyNames = {
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
  };

  const namedAllergens = allergenList.map(name => es ? allergyNames[name] || name : name);

  const preservatives = findPreservatives(p, es);
  const preservativeConcern = a.concerns.some(x => x.id === "sulfites");
  const hasIngredients = !!(p.ingredients || "").trim();
  const additives = findAdditives(p, es);
  const {
    natural,
    artificial,
    general
  } = getFlavorTypes(p);
  const named = getNamedFlavors(p, es)
  let flavor;

  if(natural && artificial) {
    flavor = t("Natural + artificial", "Naturales + artificiales");
  } else if (natural) {
    flavor = t("Natural flavors listed", "Sabores naturales indicados");
  } else if (artificial) {
    flavor = t("Artificial flavors listed", "Sabores artificiales indicados");
  } else if (general) { 
    flavor = t("Flavors listed", "Sabores indicados");
  } else if (named.length) {
    flavor = named.join(", ");
  } else {
    flavor = t("No flavor wording found", "Sin mención de sabores");
  }
  let sugarReason = colorNote;
  if (getNutrient(p, "sugars") === null){
    sugarReason = t("The record has no sugar amount. Camera label reading can fill this field. ", "El registro no incluye la cantidad de azúcar. El lector con cámara puede completar este campo. ") + colorNote;
  }
  let tiles = [];

  tiles.push({
    id: "sugar",
    title: t("Sugar", "Azúcar"),
    value: amount("sugars"),
    level: howHigh(p, "sugars"),
    reason: sugarReason,
    source: ukLabelLink
  });

  tiles.push({
    id: "saltfat",
    title: t("Salt & saturated fat", "Sal y grasa saturada"),
    value: amount("salt") + " / " + amount("saturated-fat"),
    level: combined,
    reason: t("Salt first, saturated fat second. ", "Primero sal, después grasa saturada. ") + colorNote,
    source: ukLabelLink
  });
  let allergenValue = "";
  let allergenLevel = "";
  let allergenReason = "";
  if (allergy) {
    allergenValue = t("Matches your avoid list", "Coincide con tu lista");
    allergenLevel = "high";
    allergenReason = t("A declared or possible allergen matches your preferences. " + namedAllergens.join(", ") + ".", "Un alérgeno declarado o posible coincide con tus preferencias. " + namedAllergens.join(", ") + ".");
  } else if (allergenList.length > 0) {
    allergenValue = namedAllergens.slice(0, 3).join(" · ");
    if (namedAllergens.length > 3) {
      allergenValue = allergenValue + " +" + (namedAllergens.length - 3);
    }
    allergenLevel = "medium";
    allergenReason = t("Listed allergens: " + namedAllergens.join(", ") + ".", "Alérgenos indicados: " + namedAllergens.join(", ") + ".");
  } else if(hasIngredients) {
    allergenValue = t("None listed", "Ninguno indicado");
    allergenLevel = "low";
    allergenReason = t("No milk, egg, peanut, tree nut, soy, wheat or gluten, fish, shellfish, sesame, celery, mustard, lupin, mollusc or sulfite ingredients appear in the ingredient list or its “may contain” warning.", "La lista de ingredientes y su advertencia «puede contener» no incluyen leche, huevo, cacahuete, frutos secos, soja, trigo o gluten, pescado, marisco, sésamo, apio, mostaza, altramuz, moluscos ni sulfitos.");
  } else {
    allergenValue = t("Scan label", "Escanear etiqueta"); 
    allergenLevel = "unknown";
    allergenReason = t("Tap to photograph the ingredient list. Scan Safe reads it, fills in this tile and saves it for this barcode.", "Toca para fotografiar la lista de ingredientes. Scan Safe la lee, completa este recuadro y la guarda para este código.");
  }
  tiles.push({
    id: "allergens",
    title: t("Allergens", "Alérgenos"),
    value: allergenValue,
    level: allergenLevel,
    reason: allergenReason,
    source: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies"
  });
  let pVal = "";
  let pReason = "";
  if (preservatives.length > 0) {
    pVal = preservatives.slice(0, 2).join(", ");
    if (preservatives.length > 2) pVal = pVal + " +" + (preservatives.length - 2);
    pReason = t("Preservatives in the ingredient list: ", "Conservantes en la lista de ingredientes: ") + preservatives.join(", ") + ". " + t("Tap “More food details” below for what each one does.", "Toca «Más detalles del alimento» para ver qué hace cada uno.");
  } else if (hasIngredients) {
    pVal = t("None listed", "Ninguno indicado");
    pReason = t("No preservative names or E-numbers appear in the ingredient list.", "La lista de ingredientes no incluye nombres ni números E de conservantes.")
  } else {
    pVal = t("Scan label", "Escanear etiqueta");
    pReason = t("Photograph the ingredient list to check for preservatives.", "Fotografía la lista de ingredientes para revisar los conservantes.");
  }
  let pLevel = "unknown";
  if (preservativeConcern) pLevel = "medium";
  else if (preservatives.length > 0) pLevel = "fact";
  else if(hasIngredients) pLevel = "low";
  tiles.push({
    id: "preservatives",
    title: t("Preservatives", "Conservantes"),
    value: pVal,
    level: pLevel,
    reason: pReason,
    source: fdaAdditivesLink
  });
  let flav = natural || artificial || general || named.length > 0;
  let flavorValue = t("Scan label", "Escanear etiqueta")
  if (flav) flavorValue = flavor;
  else if (hasIngredients) flavorValue = t("None listed", "Ninguno indicado");
  let flavorLevel = "unknown";
  if (artificial){
    flavorLevel = "medium";
  } else if (natural || general || named.length > 0) {
    flavorLevel = "fact";
  } else if (hasIngredients) {
    flavorLevel = "low";
  }
  let flavorReason = t("Photograph the ingredient list to check for added flavors.", "Fotografía la lista de ingredientes para revisar los aromas.");
  if (flav) {
    flavorReason = t("Natural or artificial describes where the flavor comes from. The exact flavor ingredients are usually not disclosed on the label.", "Natural o artificial describe el origen del sabor. Los ingredientes exactos del aroma no suelen figurar en la etiqueta.");
  } else if (hasIngredients) {
    flavorReason = t("No added flavorings appear in the ingredient list.", "La lista de ingredientes no incluye aromas añadidos.");
  }
  tiles.push({
    id: "flavors",
    title: t("Flavors", "Sabores"),
    value: flavorValue,
    level: flavorLevel,
    reason: flavorReason,
    source: fdaAdditivesLink
  });
  let hasTags = (p.additiveTags || []).length > 0;
  let bad1 = null;
  for (let i = 0; i < additives.length; i++) {
    if (additives[i].level === "attention") {
      bad1 = additives[i];
      break;
    }
  }
  let addVal = t("Scan label", "Escanear etiqueta");

  let addLevel = "unknown";
  let addReason = t("Photograph the ingredient list to check for additives.", "Fotografía la lista de ingredientes para revisar los aditivos.");

  if (additives.length > 0) {
    let codes = [];
    for (let i = 0; i < additives.length && i < 2; i++) codes.push(additives[i].code)
    addVal = codes.join(", ");
    if(additives.length > 2) addVal += " +" + (additives.length - 2);
    addLevel = bad1 ? "medium" : "fact";
    let bits = [];
    for (const x of additives) {
      let line = x.name + " (" + x.code + ")";
      if (x.note) line = line + ": " + x.note;
      bits.push(line);
    }
    addReason = bits.join(" · ");
  } else if (hasIngredients || hasTags) {
    addVal = t("None listed", "Ninguno indicado");
    addLevel = "low";
    if (hasIngredients) {
      addReason = t("No additives with an E-number appear in the ingredient list.", "La lista de ingredientes no incluye aditivos con número E.");
    }
  }
  let addSource = fdaAdditivesLink
  if (bad1 && bad1.source) addSource = bad1.source;
  tiles.push({
    id: "additives",
    title: t("Additives", "Aditivos"),
    value: addVal,
    level: addLevel,
    reason: addReason,
    source: addSource
  });
  return tiles;
}

function gmoInfo(p, es = false) {
  const t = (en, sp) => es ? sp : en;
  const labelStatements = findClaims((p.labelText || "") + "\n" + (p.ingredients || ""), p.labels || [], {
    name: "Product label",
    url: p.sources[0]?.url || gmoLink
  });
  const nonGMO = !!getClaim(p, "non-gmo") || labelStatements.some(claim => claim.kind === "non-gmo");
  const bioengineered = !!getClaim(p, "bioengineered") || labelStatements.some(claim => claim.kind === "bioengineered");
  const organic = (p.labels || []).some(x => /^(?:[a-z]{2}:)?(?:organic|usda-organic|eu-organic)$/.test(x));
  if (nonGMO && bioengineered) return {
    value: t("Conflicting label statements", "Declaraciones contradictorias"),
    source: p.sources[0]?.url || gmoLink
  };
  if (nonGMO) return {
    value: t("Non-GMO claim on label", "Declarado sin OGM"),
    source: getClaim(p, "non-gmo")?.source.url || p.sources[0]?.url || gmoLink
  };
  if (bioengineered) return {
    value: t("Contains bioengineered ingredients", "Contiene ingredientes bioingenierizados"),
    source: getClaim(p, "bioengineered")?.source.url || p.sources[0]?.url || gmoLink
  };

  if (organic) return {
    value: t("Certified organic (GMOs not allowed under organic rules)", "Ecológico certificado (las normas ecológicas no permiten OGM)"),
    source: "https://www.ams.usda.gov/publications/content/can-gmos-be-used-organic-products"
  };

  return null;
}

export function makeReport(p, a, es = false) {
  const t = (en, sp) => es ? sp : en;
  const unit = p.nutritionBasis === "100ml" ? "100 ml" : "100 g";
  const amount = n => n.toLocaleString(es ? "es" : "en", { maximumFractionDigits: 2 });

  const titles = {
    energy: t("Calories", "Calorías"),
    proteins: t("Protein", "Proteínas"),
    carbohydrates: t("Carbs", "Carbohidratos"),
    fat: t("Total fat", "Grasa total"),
    sugars: t("Sugar", "Azúcar"),
    "saturated-fat": t("Saturated fat", "Grasa saturada"),
    salt: t("Salt", "Sal"),
    fiber: t("Fiber", "Fibra")
  };
  const calories = getNutrient(p, "energy-kcal") ?? (getNutrient(p, "energy-kj") !== null ? getNutrient(p, "energy-kj") / 4.184 : null);
  const servingCalories = getServingNutrient(p, "energy-kcal") ?? (getServingNutrient(p, "energy-kj") !== null ? getServingNutrient(p, "energy-kj") / 4.184 : null);
  const unavailable = [];
  const nutrition = [];
  for (const key of ["energy", "proteins", "carbohydrates", "fat", "sugars", "saturated-fat", "fiber", "salt"]) {
    const standard = key === "energy" ? calories : getNutrient(p, key);
    const portion = key === "energy" ? servingCalories : getServingNutrient(p, key);
    const n = standard ?? portion;
    const rowUnit = standard === null && portion !== null ? p.serving : unit;
    if (n === null) {
      unavailable.push(titles[key]);
      continue;
    }
    const tracked = key === "sugars" || key === "saturated-fat" || key === "salt";
    const rating = tracked && standard !== null ? howHigh(p, key) : "fact";
    const level = rating === "unknown" ? "fact" : rating;
    let reason;
    if (standard === null || rating === "unknown") {
      reason = t(`Amount per ${rowUnit}, as printed on the product label.`, `Cantidad por ${rowUnit}, tal como figura en la etiqueta.`);
    } else if (tracked) {
      reason = t(`Per ${unit}. Compared using the UK food-label thresholds: low, medium or high.`, `Por ${unit}. Se compara con los límites británicos para etiquetas: bajo, medio o alto.`);
    } else if (key === "energy") {
      reason = t("Energy from the published nutrition amounts. Portion size changes how much you eat.", "Energía de los valores nutricionales publicados. La cantidad consumida depende de la porción.");
    } else if (key === "fiber") {
      reason = t("Fiber supports a varied diet. This amount is shown separately from the rating.", "La fibra forma parte de una dieta variada. Esta cantidad se muestra aparte de la puntuación.");
    } else if (key === "carbohydrates") {
      reason = t("Total carbohydrates in this food, including sugars. Sugar is also shown on its own.", "Carbohidratos totales de este alimento, incluidos los azúcares. El azúcar también se muestra por separado.");
    } else if (key === "fat"){
      reason = t("All types of fat added together. Saturated fat is also shown on its own.", "La suma de todos los tipos de grasa. La grasa saturada también se muestra por separado.");
    } else {
      reason = t("Protein amount in the food. A higher amount alone does not make the whole product healthier.", "Cantidad de proteínas. Una cantidad mayor no hace por sí sola que el producto sea más saludable.")
    }
    nutrition.push({
      key,
      name: titles[key],
      amount: n,
      value: amount(n) + (key === "energy" ? " kcal" : " g"),
      level,
      reason,
      unit: rowUnit
    });
  }
  const additives = findAdditives(p, es);
  const legacy = makeTiles(p, a, es);

  const hasIngredients = !!p.ingredients.trim();
  const facts = legacy.filter(tile => tile.id === "flavors" && tile.level !== "unknown" && tile.level !== "low").map(tile => ({
    id: tile.id,
    title: tile.title,
    value: tile.value,
    reason: tile.reason,
    source: tile.source
  }));

  const gmo = gmoInfo(p, es);

  if (gmo) facts.push({
    id: "gmo",
    title: t("GMO", "OGM"),
    value: gmo.value,
    reason: t("Shown only when the label or record states it. It does not change the score.", "Solo aparece cuando la etiqueta o el registro lo indican. No cambia la puntuación."),
    source: gmo.source
  });
  const organic = p.labels.some(x => /^(?:[a-z]{2}:)?(?:organic|eu-organic|usda-organic|ab-agriculture-biologique|agriculture-biologique|uk-organic|bio)$/.test(x));
  if (organic) facts.push({
    id: "organic",
    title: t("Organic label", "Etiqueta ecológica"),
    value: t("Organic claim listed", "Declaración ecológica"),
    reason: t("The product details include an organic label. This is a labeling claim, not a test for pesticide residues.", "Los detalles incluyen una etiqueta ecológica. Es una declaración del producto, no un análisis de residuos de pesticidas."),
    source: p.sources[0]?.url || "https://www.ams.usda.gov/grades-standards/organic-standards"
  });
  const allergenNames = {
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
  };

  const translate = arr => arr.map(v => es ? allergenNames[v] || v : v);
  const allergy = {
    contains: translate(a.allergenNames),
    traces: translate(a.traceNames.filter(x => !a.allergenNames.includes(x))),
    matchesAvoid: a.concerns.some(c => c.id === "allergen-match")
  };
  if (!hasIngredients) unavailable.push(t("Ingredient list", "Lista de ingredientes"));
  const positives = nutrition.filter(n => n.level === "low").map(n => ({
    id: n.key,
    text: t("Low " + n.name.toLowerCase(), "Bajo en " + n.name.toLowerCase()),
    detail: n.value + " / " + n.unit
  }));
  const watch = nutrition.filter(n => n.level === "high" || n.level === "medium").map(n => ({
    id: n.key,
    text: t((n.level === "high" ? "High " : "Moderate ") + n.name.toLowerCase(), (n.level === "high" ? "Alto en " : "Moderado en ") + n.name.toLowerCase()),
    detail: n.value + " / " + n.unit,
    high: n.level === "high"
  }));

  if (allergy.matchesAvoid) watch.unshift({
    id: "allergy",
    text: t("An allergen you avoid", "Un alérgeno que evitas"),
    detail: [...allergy.contains, ...allergy.traces].join(", "),
    high: true
  });
  for (const thing of additives.filter(x => x.level === "attention")) watch.push({
    id: thing.id,
    text: thing.name,
    detail: thing.note,
    high: false
  });

  return {
    unit,
    nutrition,
    additives,
    facts,
    allergy,
    positives,
    watch,
    unavailable,
    hasIngredients,
    partial: unavailable.length > 0,
    ingredientCount: a.declaredIngredients.length
  };
}

export function getTiles(p, a, es = false) {
  const t = (en, sp) => es ? sp : en;

  const report = makeReport(p, a, es);

  let unit = "100 g";
  if(p.nutritionBasis === "100ml") unit = "100 ml";
  function fmt(n, digits = 2) {
    return n.toLocaleString(es ? "es" : "en", { maximumFractionDigits: digits }) + " g";
  }
  const addLabel = t("Scan label", "Escanear etiqueta");
  const notFound = t("Tap to read the package", "Toca para leer el envase");
  const missingNutrition = t("Tap to photograph the nutrition label. Scan Safe reads it, fills in this tile and saves it for this barcode.", "Toca para fotografiar la tabla nutricional. Scan Safe la lee, completa este recuadro y la guarda para este código.");
  const flavors = getFlavorTypes(p);

  const preservativeNames = findPreservatives(p, es);
  const tiles1 = makeTiles(p, a, es);
  let finalTiles = [];
  for (const tile of tiles1) {
    let value = tile.value;
    let reason = tile.reason;
    let hint = t("Tap for details", "Toca para ver más");
    let level = tile.level;
    let source = tile.source;
    let needsLabel = false;
    if (tile.id == "sugar") {
      const standard = getNutrient(p, "sugars");
      const portion = getServingNutrient(p, "sugars");
      if(standard !== null){
        hint = t("per ", "por ") + unit;
         if (level === "unknown") {
          level = "fact";
          reason = t("Amount per " + unit + ".", "Cantidad por " + unit + ".")
        }
      } else if (portion !== null) {
        value = fmt(portion);
        level = "fact";
        hint = t("per ", "por ") + p.serving;
        reason = t("Sugar for the serving printed on this product: ", "Azúcar para la porción indicada en este producto: ") + p.serving + ".";
      } else {
        value = addLabel;
        level = "unknown";
        needsLabel = true;
        hint = notFound;
        reason = missingNutrition;
      }
    }
    if (tile.id == "saltfat") {
      const salt = getNutrient(p, "salt");
      const fat = getNutrient(p, "saturated-fat");
      const salt2 = getServingNutrient(p, "salt");
      const fat2 = getServingNutrient(p, "saturated-fat");
      let saltText = "–";
      let fatText = "–";
      if (salt !== null || fat !== null) {
        if (salt !== null) saltText = fmt(salt, 2);
        if (fat !== null) fatText = fmt(fat, 2);
        value = saltText + " / " + fatText;
        hint = t("Salt / sat. fat · ", "Sal / grasa sat. · ") + unit;
        if (level === "unknown") level = "fact";
      } else if (salt2 !== null || fat2 !== null) {
        if (salt2 !== null) saltText = fmt(salt2, 2);
        if(fat2 !== null) fatText = fmt(fat2, 2);
        value = saltText + " / " + fatText;
        level = "fact";
        hint = t("Salt / sat. fat · ", "Sal / grasa sat. · ") + p.serving;
        reason = t("Salt first, saturated fat second, for the serving printed on this product: ", "Primero sal, después grasa saturada, para la porción indicada en este producto: ") + p.serving + ".";
      } else {
        value = addLabel;
        level = "unknown";
        needsLabel = true;
        hint = notFound;
        reason = missingNutrition;
      }
    }
    if (tile.id == "allergens") {
      let parts = [];
      if (report.allergy.contains.length > 0) parts.push(t("Contains: ", "Contiene: ") + report.allergy.contains.join(", ")); 
      if (report.allergy.traces.length > 0) parts.push(t("May contain: ", "Puede contener: ") + report.allergy.traces.join(", "));
      if (parts.length > 0){
        reason = parts.join(". ") + ". " + t("Avoid this product if any of these match your allergies.", "Evita el producto si alguno coincide con tus alergias.");
      }
      if (report.allergy.matchesAvoid) {
        hint = t("Avoid-list match", "Coincide con tu lista");
      } else if (report.allergy.traces.length > 0) {
        hint = t("Includes possible traces", "Incluye posibles trazas");
      } else if (level === "low") {
        hint = t("From the ingredient list", "Según los ingredientes");
      } else if(level === "unknown") {
        hint = notFound;
      } else {
        hint = t("Ingredients and allergy warnings", "Ingredientes y advertencias");
      }
      const gluten = getClaim(p, "gluten-free");
      if (parts.length == 0 && gluten && level === "unknown") {
        value = t("Gluten-free", "Sin gluten");
        level = "fact";
        hint = t("Label statement", "Declaración de la etiqueta");
        reason = t("The product label states gluten-free. This statement covers gluten only.", "La etiqueta indica sin gluten. Esta declaración solo cubre el gluten.");
        source = gluten.source.url
      }
    }
    if (tile.id == "preservatives") {
      if(level === "unknown") hint = notFound;
      else hint = t("From the ingredient list", "Según los ingredientes");
      let claim = getClaim(p, "no-added-preservatives");
      if (!claim) claim = getClaim(p, "no-artificial-preservatives");
      let noArtificial = false;
      if (claim && claim.kind === "no-artificial-preservatives") noArtificial = true;
      let contradicts = false;
      if (!noArtificial && preservativeNames.length > 0) contradicts = true;
      if (/\b(?:bht|bha|tbhq|butylated hydroxytoluene|butylated hydroxyanisole)\b/i.test(p.ingredients)) contradicts = true;
      if (claim && !contradicts) {
        if (noArtificial && preservativeNames.length > 0){
          value = preservativeNames.join(", ");
        } else if (noArtificial) {
          value = t("No artificial preservatives", "Sin conservantes artificiales");
        } else {
          value = t("No added preservatives", "Sin conservantes añadidos");
        }
        level = preservativeNames.length > 0 ? "fact" : "low";
        hint = t("Label statement", "Declaración de la etiqueta");
        reason = t("The product label states this.", "La etiqueta del producto lo indica.");
        if (preservativeNames.length > 0){
          reason = reason + " " + t("The ingredient list also names: ", "La lista de ingredientes también incluye: ") + preservativeNames.join(", ") + ".";
        }
        source = claim.source.url;
      }
    }
    if (tile.id == "flavors") {
      if (level === "unknown") hint = notFound;
      else hint = t("From the ingredient list", "Según los ingredientes");
      let claim = getClaim(p, "no-added-flavors");
      if (!claim) claim = getClaim(p, "no-artificial-flavors");
      const namedCount = getNamedFlavors(p).length;
      let contradicts;
      if (claim && claim.kind === "no-artificial-flavors") contradicts = flavors.artificial;
      else contradicts = flavors.general || namedCount > 0;
      const namedHere = getNamedFlavors(p, es);
      if (claim && !contradicts) {
        let keepOld = claim.kind === "no-artificial-flavors" && (flavors.natural || namedCount > 0);
        if (!keepOld) {
          if (claim.kind === "no-artificial-flavors") value = t("No artificial flavors", "Sin sabores artificiales");
          else value = t("No added flavors", "Sin sabores añadidos");
        }
        level = flavors.natural ? "fact" : "low";
        hint = t("Label statement", "Declaración de la etiqueta");
        reason = t("The product label states this.", "La etiqueta del producto lo indica.");
        source = claim.source.url;
      } else if (namedHere.length > 0 && !flavors.natural && !flavors.artificial && !flavors.general) {
        value = namedHere.join(", ")
        level = "fact";
        reason = t("This ingredient adds flavor. Its name alone does not show how it was made or how much is used.", "Este ingrediente aporta sabor. Su nombre no indica cómo se obtuvo ni la cantidad utilizada.");
        source = flavorLink;
      }
    }
    if (tile.id == "additives") {
      let flagged = 0;
      for(const x of findAdditives(p, es)) {
        if (x.level === "attention") flagged++;
      }
      if (level === "unknown") hint = notFound;
      else if (flagged > 0) hint = t(flagged + " to watch · tap", flagged + " a vigilar · toca");
      else hint = t("E-numbers in the ingredients", "Números E en los ingredientes");
    }
    if(level === "unknown") needsLabel = true;
    if (needsLabel && p.sources[0] && p.sources[0].url && level === "unknown") source = p.sources[0].url;
    finalTiles.push({
      ...tile,
      value: value,
      reason: reason,
      hint: hint,
      level: level,
      source: source,
      needsLabel: needsLabel
    });
  }

  return finalTiles
}

const tileColors = {
  low: { ink: "#216b49", bg: "#e3f3e8" },
  medium: {
    ink: "#805600",
    bg: "#fff0bf"
  },
  high: {
    ink: "#a33429",
    bg: "#fde5df"
  },
  fact: { ink: "#28596e", bg: "#e7f0f5" },
  unknown: { ink: "#536057", bg: "#edf0ed" }
};
export function HealthCheck({
  product,
  analysis,
  es,
  loading = false,
  onAddLabel
}) {
  const [open, setOpen] = useState(null)
  const t = (en, sp) => es ? sp : en;
  const tiles = getTiles(product, analysis, es).map(tile => loading && tile.level === "unknown" ? {
    ...tile,
    value: t("Reading…", "Leyendo…"),
    hint: t("Checking more food databases", "Consultando más bases de datos"),
    reason: t("Checking USDA FoodData Central, brand and store pages and the published label photos for this barcode.", "Consultando USDA FoodData Central, páginas de marcas y tiendas y las fotos publicadas de la etiqueta de este código."),
    needsLabel: false
  } : tile)
  const selected = tiles.find(x => x.id === open);

  const missing = !loading && tiles.some(tile => tile.needsLabel);
  return <View style={styles.stack} testID="health-dashboard">
      <View style={styles.between}>
        <Text style={styles.heading}>{t("Your health check", "Tu evaluación")}</Text>
        <Text style={styles.caption}>
          {loading ? t("Checking more sources…", "Consultando más fuentes…") : t("Tap a tile", "Toca un recuadro")}
        </Text>
      </View>
      <View style={styles.grid}>
        {tiles.map(tile => <Pressable key={tile.id} testID={"health-tile-" + tile.id} accessibilityRole="button" accessibilityLabel={`${tile.title}: ${tile.value}`} accessibilityState={{
        expanded: open === tile.id
      }} onPress={() => tile.needsLabel && onAddLabel ? onAddLabel() : setOpen(open === tile.id ? null : tile.id)} style={[styles.tile, {
        backgroundColor: tileColors[tile.level].bg,
        borderColor: open === tile.id ? tileColors[tile.level].ink : "transparent"
      }]}>
            <View style={styles.between}>
              <Text style={styles.tileTitle}>{tile.title}</Text>
              <View style={[styles.dot, {
            backgroundColor: tileColors[tile.level].ink
          }]} />
            </View>
            <Text style={[styles.tileValue, {
          color: tileColors[tile.level].ink
        }]}>
              {tile.value}
            </Text>
            <Text style={styles.tileHint}>{tile.hint}</Text>
          </Pressable>)}
      </View>
      <Text style={styles.caption}>
        {t("Green: good · Yellow: take care · Red: high · Blue: label facts.", "Verde: bien · Amarillo: atención · Rojo: alto · Azul: datos de la etiqueta.")}
        {missing ? " " + t("Gray tiles: tap one to read that part straight from the package.", "Recuadros grises: toca uno para leer ese dato directamente del envase.") : ""}
      </Text>
      {selected && <View testID="health-tile-explanation" style={styles.card}>
          <Text style={styles.heading}>{selected.title}</Text>
          <Text style={styles.body}>{selected.reason}</Text>
          <Pressable accessibilityRole="link" onPress={() => openLink(selected.source, es)}>
            <Text style={styles.link}>{t("Read more ↗", "Más información ↗")}</Text>
          </Pressable>
        </View>}
    </View>;
}

export function NutritionBox({
  product,
  analysis,
  es,
  loading = false,
  onAddLabel
}) {
  const [open, setOpen] = useState(null)

  const t = (en, sp) => es ? sp : en;
  const full = makeReport(product, analysis, es);

  const report = {
    ...full,
    nutrition: full.nutrition.filter(thing => !["sugars", "salt", "saturated-fat"].includes(thing.key))
  };
  const selected = report.nutrition.find(thing => thing.key === open);

  const gmo = report.facts.find(thing => thing.id === "gmo");

  return <View style={styles.card} testID="nutrition-overview">
      <Text style={styles.heading}>{t("Nutrition", "Nutrición")}</Text>
      <Text style={styles.caption}>
        {report.nutrition.length ? t("Tap an amount to learn more.", "Toca una cantidad para saber más.") : loading ? t("Checking more food databases…", "Consultando más bases de datos…") : t("Tap below to read the nutrition label from the package.", "Toca abajo para leer la tabla nutricional del envase.")}
      </Text>
      {!report.nutrition.length && !loading && onAddLabel && <Pressable accessibilityRole="button" onPress={onAddLabel} style={styles.labelButton}>
          <Text style={styles.labelButtonText}>{t("Photograph the nutrition label", "Fotografiar la tabla nutricional")}</Text>
        </Pressable>}
      {!!report.nutrition.length && <View style={styles.grid}>
          {report.nutrition.map(thing => <Pressable key={thing.key} testID={"nutrition-" + thing.key} accessibilityRole="button" accessibilityLabel={`${thing.name}: ${thing.value}, ${t("per", "por")} ${thing.unit}`} accessibilityState={{
        expanded: open === thing.key
      }} onPress={() => setOpen(open === thing.key ? null : thing.key)} style={[styles.nutritionItem, {
        borderColor: open === thing.key ? tileColors.fact.ink : "#e4ebe6"
      }]}>
              <Text style={styles.tileTitle}>{thing.name}</Text>
              <Text style={styles.nutritionValue}>{thing.value}</Text>
              <Text style={styles.caption}>{t("per ", "por ") + thing.unit}</Text>
            </Pressable>)}
        </View>}
      {selected && <View testID="nutrition-explanation" style={styles.stack}>
          <Text style={styles.rowTitle}>{selected.name}</Text>
          <Text style={styles.body}>{selected.reason}</Text>
        </View>}
      {gmo && <Pressable testID="product-gmo-statement" accessibilityRole="link" onPress={() => openLink(gmo.source, es)}>
          <Text style={styles.caption}>{gmo.title + ": " + gmo.value + " ↗"}</Text>
        </Pressable>}
    </View>;
}

export function MoreDetails({
  product,
  analysis,
  es,
  showNutrition = true
}) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(null);
  const t = (en, sp) => es ? sp : en;
  const r = makeReport(product, analysis, es);

  return <View style={styles.card}>
      <Pressable testID="food-details-toggle" accessibilityRole="button" accessibilityState={{ expanded }} onPress={() => setExpanded(!expanded)} style={styles.between}>
        <Text style={styles.heading}>{t("More food details", "Más detalles del alimento")}</Text>
        <Text style={styles.chevron}>{expanded ? "−" : "+"}</Text>
      </Pressable>
      {expanded && <View style={styles.stack}>
          {showNutrition && !!r.nutrition.length && <>
              <Text style={styles.rowTitle}>{t("Nutrition", "Nutrición")}</Text>
              {r.nutrition.map(n => <View key={n.key} style={styles.row}>
                  <View style={[styles.dot, {
            backgroundColor: tileColors[n.level].ink
          }]} />
                  <Text style={[styles.body, styles.grow]}>{n.name}</Text>
                  <Text style={styles.rowTitle}>{n.value + " / " + n.unit}</Text>
                </View>)}
            </>}
          {!!r.additives.length && <>
              <Text style={styles.heading}>
                {t("Additives", "Aditivos")} · {r.additives.length}
              </Text>
              {r.additives.map(thing => <View key={thing.id}>
                  <Pressable accessibilityRole="button" accessibilityState={{
            expanded: open === thing.id
          }} onPress={() => setOpen(open === thing.id ? null : thing.id)} style={styles.row}>
                    <View style={[styles.dot, {
              backgroundColor: tileColors[thing.level === "attention" ? "medium" : "fact"].ink
            }]} />
                    <View style={styles.grow}>
                      <Text style={styles.rowTitle}>{thing.name}</Text>
                      <Text style={styles.caption}>
                        {thing.role} · {thing.code}
                      </Text>
                    </View>
                    <Text style={styles.chevron}>{open === thing.id ? "−" : "+"}</Text>
                  </Pressable>
                  {open === thing.id && <View style={styles.stack}>
                      <Text style={styles.body}>{thing.explanation}</Text>
                      {thing.note && <Text style={styles.body}>{thing.note}</Text>}
                      <Pressable accessibilityRole="link" onPress={() => openLink(thing.source, es)}>
                        <Text style={styles.link}>{t("Why it matters ↗", "Por qué importa ↗")}</Text>
                      </Pressable>
                    </View>}
                </View>)}
            </>}
          {(r.allergy.contains.length > 0 || r.allergy.traces.length > 0) && <>
              <Text style={styles.heading}>{t("Allergens", "Alérgenos")}</Text>
              {r.allergy.contains.length > 0 && <Text style={styles.body}>
                  {t("Contains: ", "Contiene: ")}
                  {r.allergy.contains.join(", ")}
                </Text>}
              {r.allergy.traces.length > 0 && <Text style={styles.body}>
                  {t("May contain: ", "Puede contener: ")}
                  {r.allergy.traces.join(", ")}
                </Text>}
            </>}
          {r.facts.filter(f => f.id === "organic").map(f => <View key={f.id}>
                <Text style={styles.rowTitle}>
                  {f.title}: {f.value}
                </Text>
                <Text style={styles.caption}>{f.reason}</Text>
              </View>)}
          {r.partial && <Text style={styles.caption}>
              {t("Scan the label to add: ", "Escanea la etiqueta para añadir: ")}
              {r.unavailable.join(" · ")}.
            </Text>}
        </View>}
    </View>
}

const styles = StyleSheet.create({
  labelButton: {
    marginTop: 4,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#106d65",
    alignItems: "center"
  },
  labelButtonText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 15
  },
  stack: {
    gap: 12
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  tile: {
    flexBasis: "46%",
    flexGrow: 1,
    minWidth: 125,
    minHeight: 142,
    padding: 14,
    borderRadius: 18,
    borderWidth: 2,
    justifyContent: "space-between",
    gap: 10
  },
  nutritionItem: {
    flexBasis: "46%",
    flexGrow: 1,
    minWidth: 110,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: "#f6f9f7",
    gap: 3
  },
  nutritionValue: {
    fontSize: 21,
    lineHeight: 28,
    fontWeight: "800",
    color: "#244838"
  },
  tileTitle: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "700", 
    color: "#29483b",
    flex: 1
  },
  tileValue: { fontSize: 17, lineHeight: 24, fontWeight: "800" },
  tileHint: { fontSize: 11, lineHeight: 16, color: "#4c6255" },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: "#dfe6dc",
    gap: 12
  },
  heading: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "800",
    color: "#193f36"
  },
  caption: { fontSize: 12, lineHeight: 19, color: "#5c7064" },
  body: { fontSize: 15, lineHeight: 23, color: "#264b3e" },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minHeight: 48,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#edf1eb"
  },
  dot: { height: 8, width: 8, borderRadius: 4 },
  grow: { flex: 1 },
  rowTitle: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "700",
    color: "#244838"
  },
  between: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8
  },
  chevron: { fontSize: 24, color: "#738777" },
  link: {
    fontSize: 14,
    color: "#106d65",
    fontWeight: "700",
    paddingVertical: 8
  }
});
