import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { getLocales } from 'expo-localization'
import { claimTypes, cleanDiet, onlyStrings, strOr } from './helpers'

function asObject(value){
  return value !== null && typeof value === 'object' && !Array.isArray(value) ? value : {}
}

function httpsOnly(value) {
  try {
    const url = new URL(strOr(value))
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : undefined
  } catch (e) {
    return undefined
  }
}
function validDate(value) {
  return typeof value === 'string' && Number.isFinite(Date.parse(value)) ? value : undefined
}

function readSource(value) {
  const v = asObject(value)
  const url = httpsOnly(v.url)
  return url && strOr(v.name) ? {
    name: strOr(v.name),
    url,
    updated: strOr(v.updated) || undefined,
    kind: strOr(v.kind) || undefined
  } : null;
}

function loadFood(value) {
  const p = asObject(value)

  if(p.kind !== 'food' || !strOr(p.code) || !strOr(p.name)) return null
  let nutrients = {}
  for (const [name, amount] of Object.entries(asObject(p.nutrients))) {
    if (!/^[a-z0-9_-]+$/i.test(name)) continue
    if (typeof amount !== 'number' && (typeof amount !== 'string' || amount.trim() === '')) continue
    if (!Number.isFinite(Number(amount)) || Number(amount) < 0) continue
    nutrients = {
      ...nutrients,
      [name]: amount
    }
  }
  const shop = asObject(p.shop)

  const shopUrl = httpsOnly(shop.url)
  const claimList = Array.isArray(p.labelClaims) ? p.labelClaims : []
  const goodSources = []
  for (const val of Array.isArray(p.sources) ? p.sources : []) {
    const savedSource = readSource(val)
    if (savedSource) goodSources.push(savedSource)
  }
  const goodClaims = [];

  for (const val of claimList) {
    const claim = asObject(val)
    const savedSource = readSource(claim.source)
    const checkedAt = validDate(claim.checkedAt)
    if (!savedSource || !checkedAt) continue
    const kind = strOr(claim.kind)
    if(claimTypes.includes(kind)) goodClaims.push({ kind, source: savedSource, checkedAt })
  }

  return {
    code: strOr(p.code),
    name: strOr(p.name),
    brand: strOr(p.brand),
    kind: 'food',
    category: strOr(p.category),
    categories: onlyStrings(p.categories),
    ingredients: strOr(p.ingredients),
    allergens: onlyStrings(p.allergens),
    traces: onlyStrings(p.traces),
    labels: onlyStrings(p.labels),
    countries: onlyStrings(p.countries),
    nutrients,
    sources: goodSources,
    match: p.match === 'label' ? 'label' : p.match === 'selected' ? 'selected' : 'barcode',
    image: httpsOnly(p.image),
    ingredientTags: onlyStrings(p.ingredientTags),
    additiveTags: onlyStrings(p.additiveTags),
    ingredientListKind: p.ingredientListKind === 'photo' ? 'photo' : p.ingredientListKind === 'structured' ? 'structured' : 'label',
    nutritionBasis: p.nutritionBasis === '100ml' ? '100ml' : '100g',
    nutritionGrade: /^[abcde]$/i.test(strOr(p.nutritionGrade)) ? strOr(p.nutritionGrade) : undefined,
    serving: strOr(p.serving) || undefined,
    warnings: strOr(p.warnings) || undefined,
    allergenStatement: strOr(p.allergenStatement) || undefined,
    labelText: strOr(p.labelText) || undefined,
    ingredientLanguage: strOr(p.ingredientLanguage) || undefined,
    scannedAt: validDate(p.scannedAt),
    downloadedAt: validDate(p.downloadedAt),
    enrichmentCheckedAt: typeof p.enrichmentCheckedAt === 'number' && Number.isFinite(p.enrichmentCheckedAt) ? p.enrichmentCheckedAt : undefined,
   alternativeWhy: typeof asObject(p.alternativeWhy).en === 'string' && typeof asObject(p.alternativeWhy).es === 'string' ? {
      en: strOr(asObject(p.alternativeWhy).en),
      es: strOr(asObject(p.alternativeWhy).es)
    } : undefined,
    shop: shopUrl && strOr(shop.code) && validDate(shop.checkedAt) ? {
      url: shopUrl,
      code: strOr(shop.code),
      retailer: strOr(shop.retailer),
      checkedAt: validDate(shop.checkedAt)
    } : undefined,
    labelClaims: goodClaims
  };
}

function readSaved(raw, language = 'en') {
  const parsed = JSON.parse(raw)
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw Error('Invalid saved state')
  const p = asObject(parsed)
  if (p.version !== undefined && p.version !== 1) throw Error('Unsupported saved state')
  function products(value) {
    const savedList = []
    if (!Array.isArray(value)) return savedList
    for (const entry of value) {
      const food = loadFood(entry)
      if (food) savedList.push(food)
    }
    return savedList
  }
  return {
    history: products(p.history),
    library: products(p.library),
    previousScans: products(p.previousScans),
    saved: onlyStrings(p.saved),
    avoid: onlyStrings(p.avoid),
    lang: p.lang === 'es' ? 'es' : p.lang === 'en' ? 'en' : language,
    diet: cleanDiet(p.diet),
    offline: p.offline === true
  }
}

export class Saver {
  constructor(storage) {
    this.previous = null
    this.loaded = false
    this.queue = Promise.resolve()
    this.storage = storage
  }
  async load(language) {
    const raw = await this.storage.getItem('scan-safe')
    try {
      const state = readSaved(raw ?? '{}', language)
      this.previous = raw
      this.loaded = true
      return { state, recovered: false }
    } catch (err) {
      console.log('saved data broke, using backup', err);
      const backup = await this.storage.getItem('scan-safe-backup')
      if (!backup) throw Error('Saved scans could not load')
      const state = readSaved(backup, language)
      this.previous = backup
      this.loaded = true
      return { state, recovered: true }
    }
  }
  save(state) {
    if (!this.loaded) return Promise.reject(Error('Saved scans have not loaded'))

    const payload = JSON.stringify({
      version: 1,
      ...state
    });
    const task = this.queue.catch(() => {}).then(async () => {
      if (payload === this.previous) return
      if (this.previous !== null) await this.storage.setItem('scan-safe-backup', this.previous)
      await this.storage.setItem('scan-safe', payload);
      this.previous = payload
    })

    this.queue = task
    return task
  }
}
export class CrashCatcher extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (!this.state.failed) return this.props.children
    const es = getLocales()[0]?.languageCode === 'es'
    return <View style={{
      flex: 1,
      justifyContent: 'center',
      padding: 28,
      backgroundColor: '#f7f9f5',
      gap: 18
    }}>
        <Text accessibilityRole="header" style={{ fontSize: 28, fontWeight: '700', color: '#193f36' }}>
          Scan Safe
        </Text>
        <Text style={{ fontSize: 17, lineHeight: 25 }}>
          {es ? 'Vamos a abrir la app de nuevo. Tus escaneos guardados se conservan.' : 'Let’s open the app again. Your saved scans will be kept.'}
        </Text>
        <Pressable accessibilityRole="button" onPress={() => this.setState({
        failed: false
      })} style={{ backgroundColor: '#106d65', padding: 18, borderRadius: 14 }}>
          <Text style={{ textAlign: 'center', fontWeight: '700', color: 'white' }}>
            {es ? 'Abrir de nuevo' : 'Open again'}
          </Text>
        </Pressable>
      </View>
  }
}
