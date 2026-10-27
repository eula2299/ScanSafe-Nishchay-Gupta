import React, { useState, useEffect } from 'react';
import { Pressable, Text, View, TextInput, StyleSheet } from 'react-native';
import { sameCode, getNutrient, getServingNutrient, checkFood, dietOptions, checkDiet, getFoodUse, sameFood } from './helpers';

const measures = [{
  key: 'sugars',
  en: 'Sugar',
  es: 'Azúcar',
  unit: 'g',
  prefer: 'less'
}, {
  key: 'added-sugars',
  en: 'Added sugar',
  es: 'Azúcar añadido',
  unit: 'g',
  prefer: 'less'
}, {
  key: 'sodium',
  en: 'Sodium',
  es: 'Sodio',
  unit: 'mg',
  prefer: 'less'
}, {
  key: 'saturated-fat',
  en: 'Saturated fat',
  es: 'Grasa saturada',
 unit: 'g',
  prefer: 'less'
}, {
  key: 'fiber',
  en: 'Fiber',
  es: 'Fibra',
  unit: 'g',
  prefer: 'more'
}, {
  key: 'proteins',
  en: 'Protein',
  es: 'Proteínas',
  unit: 'g',
  prefer: 'more'
}, {
  key: 'energy-kcal',
  en: 'Calories',
  es: 'Calorías',
  unit: 'kcal',
  prefer: 'neutral'
}];
function unitOf(p) {
  return p.nutritionBasis === '100ml' ? 'ml' : 'g';
}
function toPositive(value) {
  const str = value.trim()
  if(!/^\d+(?:[.,]\d{1,4})?$/.test(str)) return null;
  const n = Number(str.replace(',', '.'));
  return Number.isFinite(n) && n > 0 && n <= 1000000 ? n : null;
}
function servingFromLabel(p) {
  const matches = [...(p.serving || '').matchAll(/(?:^|[\s(])(\d+(?:[.,]\d+)?)\s*(g|ml)(?=$|[\s)])/gi)];
  if (matches.length !== 1) return null;

  const amount = toPositive(matches[0][1]);
  const unit = matches[0][2].toLowerCase();

  return amount && unit === unitOf(p) ? { amount, unit } : null;
}
function amountOf(p, key, serving) {
  const get = name => serving ? getServingNutrient(p, name) : getNutrient(p, name);
  if (key === 'energy-kcal') {
    const kcal = get(key);
    const kj = get('energy-kj');
    return kcal ?? (kj === null ? null : kj / 4.184);
  }
  if(key === 'sodium') {
    const sodium = get('sodium');
    const salt = get('salt');
    if (sodium !== null) {
      return sodium * 1000;
    }
    if (salt !== null) {
      return salt / 2.5 * 1000
    }
    return null;
  }
  return get(key);
}

function amountInPortion(p, key, portion) {
  if(!Number.isFinite(portion.amount) || portion.amount <= 0 || portion.amount > 1000000) return null;
  const metric = servingFromLabel(p);
  if (portion.unit === 'serving') {
    if(!p.serving?.trim()) return null;
    const servingAmt = amountOf(p, key, true);
    if (servingAmt !== null) return servingAmt * portion.amount;
    const hundredAmt = amountOf(p, key, false);
    return metric && hundredAmt !== null ? hundredAmt * metric.amount / 100 * portion.amount : null;
  }

  if (portion.unit !== unitOf(p)) return null
  const per100 = amountOf(p, key, false);
  if (per100 !== null) return per100 * portion.amount / 100;
  const perServing = amountOf(p, key, true);
  return metric && perServing !== null ? perServing * portion.amount / metric.amount : null;
}

function portionList(p, portion) {
  const rows = [];
  for (const measure of measures) {
    const amount = amountInPortion(p, measure.key, portion);
    if (amount !== null) rows.push({
      ...measure,
      amount
    });
  }
  return rows;
}

function startPortion(p) {
  const metric = servingFromLabel(p);
  if (metric) return metric;
  if(p.serving?.trim() && measures.some(m => amountOf(p, m.key, true) !== null)) return { amount: 1, unit: 'serving' }
  return {
    amount: 100,
    unit: unitOf(p)
  };
}

function compareTwo(a, b, portion, avoid = []) {
  const compatible = portion.unit !== 'serving' && unitOf(a) === unitOf(b) && portion.unit === unitOf(a);
  const rows = [];
  if (compatible) {
    for (const measure of measures) {
      const left = amountInPortion(a, measure.key, portion);
      const right = amountInPortion(b, measure.key, portion);
      if (left === null || right === null) continue;
      const delta = right - left
      let better = 'neither';
      if (!(Math.abs(delta) < 0.0001) && measure.prefer !== 'neutral') {
        if (measure.prefer === 'less') better = right < left ? 'right' : 'left';
        else better = right > left ? 'right' : 'left';
      }
      rows.push({
        ...measure,
        left,
        right,
        delta,
        better
      });
    }
  }
  const purpose = getFoodUse(a);
  const sameUse = !!purpose && purpose.id === getFoodUse(b)?.id;
  const allergies = p => {
    const result = checkFood(p, avoid);
    return [...new Set([...result.allergenNames, ...result.traceNames])].filter(n => avoid.some(x => x.toLowerCase() === n.toLowerCase()));
  };
  return {
    compatible,
    sameUse,
    rows,
    leftAllergies: allergies(a),
    rightAllergies: allergies(b)
  };
}

function comparePrice(a, b, portion) {
  const valid = x => Number.isFinite(x.price) && x.price > 0 && x.price <= 1000000 && Number.isFinite(x.size) && x.size > 0 && x.size <= 1000000 && /^[A-Z]{3}$/.test(x.currency) && ['g', 'ml'].includes(x.unit);
  if(!valid(a) || !valid(b) || a.unit !== b.unit || a.currency !== b.currency || portion.unit !== a.unit || !Number.isFinite(portion.amount) || portion.amount <= 0 || portion.amount > 1000000) return null;
  const left = a.price / a.size * portion.amount;
  const right = b.price / b.size * portion.amount;
  return {
    left,
    right,
    difference: Math.abs(left - right),
    percent: Math.abs(left - right) / Math.max(left, right) * 100,
    cheaper: Math.abs(left - right) < 0.00001 ? 'same' : left < right ? 'left' : 'right',
    currency: a.currency
  };
}

function squish(str) {
  return str.toLowerCase().normalize('NFKC').replace(/[\s.,;:()_-]+/g, ' ').trim();
}


export function whatChanged(before, after, avoid = [], es = false) {
  if(!(sameCode(before.code, after.code) || before.code === after.code)) return []
  const t = (en, sp) => es ? sp : en;
  const changes = [];
  const old = checkFood(before);
  const now = checkFood(after);
  const allergyNames = {
    Milk: 'Leche',
    Egg: 'Huevo',
    Peanut: 'Cacahuete',
    'Tree nuts': 'Frutos secos',
    Soy: 'Soja',
    Wheat: 'Trigo', 
    Fish: 'Pescado',
    Shellfish: 'Marisco',
    Sesame: 'Sésamo',
    Gluten: 'Gluten',
    Celery: 'Apio',
    Mustard: 'Mostaza',
    Lupin: 'Altramuz',
    Molluscs: 'Moluscos',
    Sulfites: 'Sulfitos'
  };
  const added = [...new Set([...now.allergenNames.filter(x => !old.allergenNames.includes(x)), ...now.traceNames.filter(x => ![...old.allergenNames, ...old.traceNames].includes(x))])];
  if (added.length) changes.push({
    id: 'allergens',
    title: t('More allergy information', 'Más información de alérgenos'),
    detail: added.map(x => es ? allergyNames[x] || x : x).join(', '),
    attention: added.some(n => avoid.some(x => x.toLowerCase() === n.toLowerCase()))
  });
  const unit = unitOf(after);
  if (unit === unitOf(before)) for(const m of measures) {
    const a = amountInPortion(before, m.key, { amount: 100, unit });
    const b = amountInPortion(after, m.key, { amount: 100, unit });
    if (a === null || b === null || Math.abs(a - b) <= Math.max(0.01, Math.abs(a) * 0.02)) continue;
    const f = n => n.toLocaleString(es ? 'es' : 'en', { maximumFractionDigits: 2 });
    changes.push({
      id: m.key,
      title: es ? m.es : m.en,
      detail: `${f(a)} → ${f(b)} ${m.unit} / 100 ${unit}`, 
      attention: false
    });
  }
  const sameLanguage = before.ingredientLanguage && after.ingredientLanguage ? before.ingredientLanguage === after.ingredientLanguage : before.sources[0]?.url === after.sources[0]?.url;

  if (before.ingredients.trim() && after.ingredients.trim() && sameLanguage && squish(before.ingredients) !== squish(after.ingredients)) changes.push({
    id: 'ingredients',
    title: t('Ingredient text updated', 'Texto de ingredientes actualizado'),
    detail: t('Compare your saved copy with the latest product details.', 'Compara la copia guardada con los datos más recientes.'),
    attention: false,
    before: before.ingredients,
    after: after.ingredients
  });

  return changes;
}

function fmtNum(n, es) {
  return n.toLocaleString(es ? 'es' : 'en', { maximumFractionDigits: 2 });
}

function ActionButton({
  label,
  onPress,
  testID = undefined
}) {
  return <Pressable testID={testID} accessibilityRole="button" onPress={onPress} style={shopStyles.action}>
      <Text style={shopStyles.actionText}>{label}</Text>
    </Pressable>;
}

function AmountBox({
  label,
  value,
  onChange,
  testID
}) {
  return <View style={shopStyles.inputWrap}>
      <Text style={shopStyles.caption}>{label}</Text>
      <TextInput testID={testID} accessibilityLabel={label} keyboardType="decimal-pad" value={value} onChangeText={onChange} style={shopStyles.input} />
    </View>;
}

export function ShoppingStuff({
  product,
  other,
  alternative: swap,
  products,
  avoid,
  es,
  onChoose,
  onScan,
  onClear
}) {
  const t = (en, sp) => es ? sp : en;
  const [portionOpen, setPortionOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(!!other);
  const [pricesOpen, setPricesOpen] = useState(false);
  const [portion, setPortion] = useState(startPortion(product));
  const [quantity, setQuantity] = useState(String(startPortion(product).amount));
  const [edited, setEdited] = useState(false);
  const [sharedAmount, setSharedAmount] = useState('100');
  const [goal, setGoal] = useState('sugars');

  const [pickerQuery, setPickerQuery] = useState('');
  const [leftPrice, setLeftPrice] = useState('');
  const [rightPrice, setRightPrice] = useState('');
  const [leftSize, setLeftSize] = useState('');
  const [rightSize, setRightSize] = useState('');

  const [currency, setCurrency] = useState('USD');
  useEffect(() => {
    if (!edited) {
      const next = startPortion(product);
      setPortion(next);
      setQuantity(String(next.amount));
    }
  }, [product, edited]);
  const otherCode = other?.code;
  useEffect(() => {
    setLeftPrice('');
    setRightPrice('');
    setLeftSize('');
    setRightSize('');
    setPricesOpen(false);
    if (otherCode) setCompareOpen(true);
  }, [otherCode]);
  const count = toPositive(quantity);
  const choice={
    ...portion,
    amount: count || 0
  };

  const rows = portionList(product, choice);
  const comparisonQuantity = toPositive(sharedAmount);

  const common = {
    amount: comparisonQuantity || 0,
    unit: unitOf(product)
  };
  const comparison = other ? compareTwo(product, other, common, avoid) : null;

  const goalRows = comparison?.rows.filter(r => ['sugars', 'sodium', 'fiber', 'proteins'].includes(r.key)) || [];
  const selected = goalRows.find(r => r.key === goal) || goalRows[0];
  const goalName = measures.find(m => m.key === (selected?.key || goal));
  const money = n => {
    try {
      return new Intl.NumberFormat(es ? 'es' : 'en', { style: 'currency', currency, maximumFractionDigits: 2 }).format(n);
    } catch {
      return fmtNum(n, es) + ' ' + currency;
    }
  };

  const values = [leftPrice, rightPrice, leftSize, rightSize].map(toPositive);
  const priceComparison = other && values.every(v => v !== null) ? comparePrice({
    price: values[0],
    size: values[2],
    unit: unitOf(product),
    currency
  }, {
    price: values[1],
    size: values[3],
    unit: unitOf(other),
    currency
  }, common) : null;
  const purpose = getFoodUse(product)?.id;
  let opts = [];
  const lookingFor = pickerQuery.toLocaleLowerCase();
  for (const p of products) {
    if (sameFood(p.code, product.code)) continue;
    if ([p.name, p.brand].join(' ').toLocaleLowerCase().includes(lookingFor)) opts.push(p);
  }
  opts.sort((a, b) => Number(getFoodUse(b)?.id === purpose) - Number(getFoodUse(a)?.id === purpose));

  opts = opts.slice(0, 6);
  const safeOther = other && !sameFood(other.code, product.code) ? other : null;
  const allergyEs = nameList => nameList.map(n => es ? {
    Milk: 'Leche',
    Egg: 'Huevo',
    Peanut: 'Cacahuete',
    'Tree nuts': 'Frutos secos',
     Soy: 'Soja',
    Wheat: 'Trigo',
    Fish: 'Pescado',
    Shellfish: 'Marisco',
    Sesame: 'Sésamo',
    Gluten: 'Gluten',
    Celery: 'Apio',
    Mustard: 'Mostaza',
    Lupin: 'Altramuz',
    Molluscs: 'Moluscos',
    Sulfites: 'Sulfitos'
  }[n] || n : n).join(', ');

  return <View style={shopStyles.stack}>
      <View style={shopStyles.card}>
        <Pressable testID="portion-toggle" accessibilityRole="button" accessibilityState={{ expanded: portionOpen }} onPress={() => setPortionOpen(!portionOpen)} style={shopStyles.headingRow}>
          <View style={shopStyles.grow}>
            <Text style={shopStyles.title}>{t('Your portion', 'Tu porción')}</Text>
            <Text style={shopStyles.caption}>
              {t('See the amounts in what you eat.', 'Ve las cantidades de lo que comes.')}
            </Text>
          </View>
          <Text style={shopStyles.symbol}>{portionOpen ? '−' : '+'}</Text>
        </Pressable>
        {portionOpen && <View style={shopStyles.stack}>
            <View style={shopStyles.chips}>
              {[unitOf(product), ...(product.serving ? ['serving'] : [])].map(unit => <Pressable key={unit} accessibilityRole="radio" accessibilityState={{
            selected: portion.unit === unit
          }} style={[shopStyles.chip, portion.unit === unit && shopStyles.selected]} onPress={() => {
            setEdited(true);
            setPortion({
              amount: unit === 'serving' ? 1 : 100,
              unit
            });
            setQuantity(unit === 'serving' ? '1' : '100');
          }}>
                  <Text>
                    {unit === 'serving' ? t('Label serving', 'Porción de la etiqueta') : unit}
                  </Text>
                </Pressable>)}
            </View>
            <AmountBox testID="portion-amount" label={portion.unit === 'serving' ? t('Number of servings', 'Número de porciones') : t('Amount in ', 'Cantidad en ') + portion.unit} value={quantity} onChange={v => {
          setEdited(true);
          setQuantity(v);
        }} />
            <View style={shopStyles.chips}>
              {[0.5, 1, 2].map(multiplier => <ActionButton key={multiplier} label={multiplier === 0.5 ? t('Half', 'La mitad') : multiplier === 1 ? t('Reset', 'Restablecer') : t('Double', 'El doble')} onPress={() => {
            setEdited(true);
            const initial = startPortion(product);
            const amount = multiplier === 1 ? initial.amount : (count || initial.amount) * multiplier;
            setPortion(multiplier === 1 ? initial : portion);
            setQuantity(String(Math.min(amount, 1000000)));
          }} />)}
            </View>
            {portion.unit === 'serving' && <Text style={shopStyles.caption}>
                {t('One label serving: ', 'Una porción de la etiqueta: ')}
                {product.serving}
              </Text>}
            {!count ? <Text accessibilityRole="alert" style={shopStyles.caption}>
                {t('Enter an amount greater than zero.', 'Introduce una cantidad mayor que cero.')}
              </Text> : <>
                <View testID="portion-rows">
                  {rows.map(row => <View key={row.key} style={shopStyles.row}>
                      <Text style={[shopStyles.body, shopStyles.grow]}>{es ? row.es : row.en}</Text>
                      <Text style={shopStyles.value}>
                        {fmtNum(row.amount, es)} {row.unit}
                      </Text>
                    </View>)}
                </View>
                {!rows.length && <Text style={shopStyles.caption}>
                    {t('Portion amounts appear when this product has a nutrition panel.', 'Las cantidades aparecen cuando el producto tiene información nutricional.')}
                  </Text>}
              </>}
            <Text style={shopStyles.caption}>
              {t('Calculated from this product’s nutrition label. Changing the portion does not change its 1–5 rating.', 'Calculado con la información nutricional del producto. Cambiar la porción no cambia su puntuación de 1 a 5.')}
            </Text>
          </View>}
      </View>
      <View style={shopStyles.card}>
        <Pressable testID="compare-toggle" accessibilityRole="button" accessibilityState={{ expanded: compareOpen }} onPress={() => setCompareOpen(!compareOpen)} style={shopStyles.headingRow}>
          <View style={shopStyles.grow}>
            <Text style={shopStyles.title}>{t('Compare & save', 'Compara y ahorra')}</Text>
            <Text style={shopStyles.caption}>
              {t('Two foods. Equal portions. A clearer choice.', 'Dos alimentos. Porciones iguales. Una elección más clara.')}
            </Text>
          </View>
          <Text style={shopStyles.symbol}>{compareOpen ? '−' : '+'}</Text>
        </Pressable>
        {compareOpen && <View style={shopStyles.stack}>
            {!safeOther ? <>
                <ActionButton testID="compare-scan" label={t('Scan a second product', 'Escanear otro producto')} onPress={onScan} />
                {swap && <ActionButton testID="compare-alternative" label={t('Compare the suggested swap', 'Comparar la alternativa sugerida')} onPress={() => onChoose(swap)} />}
                {!!products.length && <>
                    <Text style={shopStyles.label}>
                      {t('Or choose from your scans', 'O elige de tus escaneos')}
                    </Text>
                    <TextInput testID="compare-search" accessibilityLabel={t('Search foods to compare', 'Buscar alimentos para comparar')} placeholder={t('Name or brand', 'Nombre o marca')} value={pickerQuery} onChangeText={setPickerQuery} style={shopStyles.input} />
                    {opts.map(p => <ActionButton key={p.code} testID={'compare-pick-' + p.code} label={[p.brand, p.name].filter(Boolean).join(' · ')} onPress={() => onChoose(p)} />)}
                  </>}
              </> : <>
                <View testID="comparison-products" style={shopStyles.columns}>
                  {[product, safeOther].map((p, i) => <View key={p.code} style={shopStyles.column}>
                      <Text style={shopStyles.label}>
                        {i === 0 ? t('This product', 'Este producto') : t('Compare with', 'Comparar con')}
                      </Text>
                      <Text style={shopStyles.body}>{p.name}</Text>
                      <Text style={shopStyles.value}>{checkFood(p, avoid).score ?? '—'} / 5</Text>
                    </View>)}
                </View>
                {!!comparison && (comparison.leftAllergies.length > 0 || comparison.rightAllergies.length > 0) && <View testID="comparison-allergy-alert" style={shopStyles.alert}>
                      <Text style={shopStyles.label}>
                        {t('An allergen you avoid', 'Un alérgeno que evitas')}
                      </Text>
                      {comparison.leftAllergies.length > 0 && <Text style={shopStyles.body}>
                          {product.name}: {allergyEs(comparison.leftAllergies)}
                        </Text>}
                      {comparison.rightAllergies.length > 0 && <Text style={shopStyles.body}>
                          {safeOther.name}: {allergyEs(comparison.rightAllergies)}
                        </Text>}
                      <Text style={shopStyles.caption}>
                        {t('These include possible traces. A lower price or nutrient amount does not remove an allergy warning.', 'Se incluyen posibles trazas. Un precio o una cantidad menor no elimina una advertencia de alergia.')}
                      </Text>
                    </View>}
                {comparison?.compatible ? <>
                    {!comparison.sameUse && <Text style={shopStyles.caption}>
                        {t('These foods may serve different purposes. Use the amounts to compare, rather than treating them as direct substitutes.', 'Estos alimentos pueden tener usos distintos. Compara las cantidades teniendo en cuenta cómo los usarías.')}
                      </Text>}
                    <AmountBox testID="compare-amount" label={t('Equal portion for both (', 'Porción igual para ambos (') + unitOf(product) + ')'} value={sharedAmount} onChange={setSharedAmount} />
                    {!comparisonQuantity && <Text accessibilityRole="alert" style={shopStyles.caption}>
                        {t('Enter an amount greater than zero.', 'Introduce una cantidad mayor que cero.')}
                      </Text>}
                    {!!goalRows.length && <Text style={shopStyles.label}>
                        {t('What matters to you?', '¿Qué te importa más?')}
                      </Text>}
                    <View style={shopStyles.chips}>
                      {['sugars', 'sodium', 'fiber', 'proteins'].filter(key => goalRows.some(r => r.key === key)).map(key => {
                const m = measures.find(mm => mm.key === key);
                return <Pressable key={key} testID={'compare-goal-' + key} accessibilityRole="radio" accessibilityState={{
                  selected: selected?.key === key
                }} style={[shopStyles.chip, selected?.key === key && shopStyles.selected]} onPress={() => setGoal(key)}>
                              <Text>{es ? m.es : m.en}</Text>
                            </Pressable>;
              })}
                    </View>
                    {selected && <Text testID="comparison-focus" style={shopStyles.focus}>
                        {Math.abs(selected.delta) < 0.0001 ? t('The same amount of ', 'La misma cantidad de ') + (es ? goalName.es : goalName.en).toLocaleLowerCase() : `${selected.better === 'right' ? safeOther.name : product.name}: ${fmtNum(Math.abs(selected.delta), es)} ${selected.unit} ${t(selected.prefer === 'more' ? 'more ' : 'less ', selected.prefer === 'more' ? 'más de ' : 'menos de ')}${(es ? goalName.es : goalName.en).toLocaleLowerCase()}`}
                        {t(' per equal portion.', ' por porción igual.')}
                      </Text>}
                    <View testID="comparison-rows">
                      {comparison.rows.map(row => <View key={row.key} style={shopStyles.row}>
                          <Text style={[shopStyles.caption, shopStyles.grow]}>{es ? row.es : row.en}</Text>
                          <Text style={[shopStyles.tableValue, row.better === 'left' && shopStyles.best]}>
                            {fmtNum(row.left, es)} {row.unit}
                          </Text>
                          <Text style={[shopStyles.tableValue, row.better === 'right' && shopStyles.best]}>
                            {fmtNum(row.right, es)} {row.unit}
                          </Text>
                        </View>)}
                    </View>
                    <Text style={shopStyles.caption}>
                      {t('Only amounts supplied for both foods are compared. Green marks less sugar, sodium or saturated fat, or more fiber or protein; it is not an overall safety rating.', 'Solo se comparan cantidades disponibles para ambos. Verde indica menos azúcar, sodio o grasa saturada, o más fibra o proteínas; no es una garantía de seguridad.')}
                    </Text>
                    <ActionButton testID="price-toggle" label={t('Compare shelf prices', 'Comparar precios de la tienda')} onPress={() => setPricesOpen(!pricesOpen)} />
                    {pricesOpen && <View style={shopStyles.priceBox}>
                        <Text style={shopStyles.label}>
                          {t('Which costs less for the same amount?', '¿Cuál cuesta menos por la misma cantidad?')}
                        </Text>
                        <Text style={shopStyles.caption}>
                          {t('Enter the prices and pack sizes you see in the store. Use the same currency for both.', 'Introduce los precios y tamaños que ves en la tienda. Usa la misma moneda para ambos.')}
                        </Text>
                        <TextInput testID="price-currency" accessibilityLabel={t('Currency code, for example USD or EUR', 'Código de moneda, por ejemplo USD o EUR')} value={currency} onChangeText={v => setCurrency(v.replace(/[^a-z]/gi, '').toUpperCase().slice(0, 3))} autoCapitalize="characters" maxLength={3} style={shopStyles.input} />
                        <Text style={shopStyles.label}>{product.name}</Text>
                        <View style={shopStyles.columns}>
                          <AmountBox testID="price-left" label={t('Pack price', 'Precio del envase')} value={leftPrice} onChange={setLeftPrice} />
                          <AmountBox testID="size-left" label={t('Pack size (', 'Tamaño (') + unitOf(product) + ')'} value={leftSize} onChange={setLeftSize} />
                        </View>
                        <Text style={shopStyles.label}>{safeOther.name}</Text>
                        <View style={shopStyles.columns}>
                          <AmountBox testID="price-right" label={t('Pack price', 'Precio del envase')} value={rightPrice} onChange={setRightPrice} />
                          <AmountBox testID="size-right" label={t('Pack size (', 'Tamaño (') + unitOf(safeOther) + ')'} value={rightSize} onChange={setRightSize} />
                        </View>
                        {priceComparison ? <View testID="price-result" style={shopStyles.stack}>
                            <Text style={shopStyles.body}>
                              {product.name}: {money(priceComparison.left)}
                            </Text>
                            <Text style={shopStyles.body}>
                              {safeOther.name}: {money(priceComparison.right)}
                            </Text>
                            <Text style={shopStyles.focus}>
                              {priceComparison.cheaper === 'same' ? t('Same cost', 'Mismo precio') : (priceComparison.cheaper === 'left' ? product.name : safeOther.name) + t(' costs ', ' cuesta ') + money(priceComparison.difference) + t(' less', ' menos')}
                              {t(' per ', ' por ')}
                              {sharedAmount} {common.unit}.
                            </Text>
                          </View> : <Text style={shopStyles.caption}>
                            {t('Add both prices, both pack sizes and a three-letter currency code.', 'Añade ambos precios, ambos tamaños y un código de moneda de tres letras.')}
                          </Text>}
                        <Text style={shopStyles.caption}>
                          {t('Based on your entries. No live price or store-stock claim.', 'Basado en los valores que introduces. No indica precio ni existencias en tiempo real.')}
                        </Text>
                      </View>}
                  </> : <Text style={shopStyles.body}>
                    {t('One food uses grams and the other uses milliliters. Choose foods with the same measure for an equal-portion comparison.', 'Un alimento usa gramos y el otro mililitros. Elige alimentos con la misma medida para comparar porciones iguales.')}
                  </Text>}
                <ActionButton testID="compare-clear" label={t('Choose a different product', 'Elegir otro producto')} onPress={onClear} />
              </>}
          </View>}
      </View>
    </View>;
}

export function ChangesCard({
  previous,
  product,
  avoid,
  es,
  onDismiss
}) {
  const [open, setOpen] = useState(false)
  const changes = whatChanged(previous, product, avoid, es);
  const t=(en, sp) => es ? sp : en;
  if (!changes.length) return null;
  const attention = changes.some(c => c.attention);
  return <View testID="product-changes" style={[shopStyles.card, attention && shopStyles.alert]}>
      <Text style={shopStyles.label}>{t('Since your last scan', 'Desde tu último escaneo')}</Text>
      <Text style={shopStyles.title}>
        {attention ? t('An allergy warning was added', 'Se añadió una advertencia de alergia') : t('Product details changed', 'Los datos del producto cambiaron')}
      </Text>
      <Text style={shopStyles.caption}>
        {t('Compared with your saved copy', 'Comparado con la copia guardada')}
        {previous.scannedAt ? ' · ' + new Date(previous.scannedAt).toLocaleDateString(es ? 'es' : 'en') : ''}
      </Text>
      <ActionButton testID="changes-toggle" label={open ? t('Hide changes', 'Ocultar cambios') : t('See what changed', 'Ver qué cambió')} onPress={() => setOpen(!open)} />
      {open && <View style={shopStyles.stack}>
          {changes.map(c => <View key={c.id} style={shopStyles.stack}>
              <Text style={shopStyles.label}>{c.title}</Text>
              <Text style={shopStyles.body}>{c.detail}</Text>
              {c.before && <>
                  <Text style={shopStyles.caption}>
                    {t('Before: ', 'Antes: ')}
                    {c.before}
                  </Text>
                  <Text style={shopStyles.body}>
                    {t('Now: ', 'Ahora: ')}
                    {c.after}
                  </Text>
                </>}
            </View>)}
          <Text style={shopStyles.caption}>
            {t('A change can come from a new label, a corrected record or a different source. This comparison does not establish a recipe change.', 'Un cambio puede venir de una nueva etiqueta, una corrección o una fuente distinta. Esta comparación no confirma un cambio de receta.')}
          </Text>
          <ActionButton testID="changes-dismiss" label={t('Reviewed', 'Revisado')} onPress={onDismiss} />
        </View>}
    </View>;
}

const shopStyles = StyleSheet.create({
  stack: { gap: 12 },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#dfe6dc',
    gap: 14
  },
  headingRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    minHeight: 48
  },
  grow: { flex: 1 },
  title: {
    fontSize: 20,
    lineHeight: 27,
    fontWeight: '800',
    color: '#193f36'
  }, 
  label: {
     fontSize: 14,
    lineHeight: 21,
    fontWeight: '700',
    color: '#29483b'
  },
  caption: { fontSize: 12, lineHeight: 19, color: '#5c7064' },
  body: { fontSize: 15, lineHeight: 23, color: '#264b3e' },
  symbol: {
    fontSize: 26,
    color: '#106d65'
  },
  value: { fontSize: 17, fontWeight: '700', color: '#193f36' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1eb'
  },
  tableValue: {
    width: '26%',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'right',
    color: '#29483b'
  },
  best: { color: '#216b49', fontWeight: '800' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    padding: 12,
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#d7e3d3',
    borderRadius: 12,
    justifyContent: 'center'
  },
  selected: { backgroundColor: '#c5e8d8', borderColor: '#106d65' },
  action: {
    padding: 13,
    minHeight: 46,
    borderRadius: 12,
    backgroundColor: '#edf6f1',
    justifyContent: 'center'
  },
  actionText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '700',
    color: '#106d65'
  },
  input: {
    borderWidth: 1,
    borderColor: '#cedcc9',
    borderRadius: 12,
    padding: 13,
    fontSize: 16,
    minHeight: 48,
    backgroundColor: 'white',
    color: '#193f36'
  },
  inputWrap: { flex: 1, gap: 6, minWidth: 100 },
  columns: { flexDirection: 'row', gap: 12 },
  column: {
    flex: 1,
    gap: 6,
    backgroundColor: '#f1f6f2',
    padding: 12,
    borderRadius: 14
  },
  alert: {
    backgroundColor: '#fde5df',
    padding: 16,
    borderRadius: 16,
    gap: 8
  },
  focus: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '700',
    color: '#106d65',
    backgroundColor: '#edf6ed',
    padding: 12,
    borderRadius: 12
  },
  priceBox: {
    gap: 12,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#f5f7ef'
  }
});

export function DietPicker({
  selected,
  onChange,
  es
}) {
  return <View style={dietStyles.card}>
      <Text style={dietStyles.title}>{es ? 'Tus preferencias alimentarias' : 'Your food preferences'}</Text>
      <Text style={dietStyles.body}>
        {es ? 'Gratis. Las recomendaciones deben confirmar cada preferencia que elijas. Usa la lista de alérgenos para las alergias.' : 'Free. Recommendations must confirm each preference you choose. Use the allergen list for allergies.'}
      </Text>
      <View style={dietStyles.chips}>
        {dietOptions.map(p => <Pressable accessibilityRole="checkbox" accessibilityState={{
        checked: selected.includes(p.id)
      }} key={p.id} style={[dietStyles.chip, selected.includes(p.id) && dietStyles.selected]} onPress={() => onChange(selected.includes(p.id) ? selected.filter(x => x !== p.id) : [...selected, p.id])}>
            <Text style={dietStyles.body}>
              {selected.includes(p.id) ? '✓ ' : ''}
              {es ? p.es : p.en}
            </Text>
          </Pressable>)}
      </View>
    </View>;
}
export function DietResults({
  product,
  selected,
  es
}) {
 if (!selected.length) return null;
  return <View style={dietStyles.card}>
      <Text style={dietStyles.title}>{es ? '¿Se adapta a ti?' : 'Does it fit you?'}</Text>
      {checkDiet(product, selected, es).map(c => {
      const label = dietOptions.find(p => p.id === c.id);
      return <View key={c.id} style={[dietStyles.result, {
        backgroundColor: c.status === 'conflict' ? '#f9d6d1' : c.status === 'declared' ? '#e5edf1' : '#fff0bb'
      }]}>
            <Text style={dietStyles.title}>
              {es ? label.es : label.en} ·{' '}
              {c.status === 'conflict' ? es ? 'No coincide' : 'Does not fit' : c.status === 'declared' ? es ? 'Declarado' : 'Label says yes' : es ? 'Sin declaración en la fuente' : 'No source statement'}
            </Text>
            <Text style={dietStyles.body}>{c.detail}</Text>
          </View>;
    })}
    </View>;
}

const dietStyles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 18,
    backgroundColor: 'white',
    gap: 12,
    borderWidth: 1,
    borderColor: '#dfe6da'
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#214838'
  },
  body: { fontSize: 14, lineHeight: 21, color: '#3b5545' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d7e3d3'
  },
  selected: { backgroundColor: '#c5e8d8', borderColor: '#106d65' },
  result: { padding: 14, borderRadius: 12, gap: 6 }
})
