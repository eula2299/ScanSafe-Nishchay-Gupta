import { findClaims, combineClaims, wait, timeoutSig, sameCode, cleanShopUrl, samePage, shopPagesFor, guessCategory } from './helpers'

function cleanStr(v) {
    return typeof v === 'string' ? v.trim() : ''
}

function asList(v) {
    return Array.isArray(v) ? v : []
}

function stripHtml(v) {
    return cleanStr(v).replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&(?:nbsp|#160);/g, ' ').replace(/&(?:lt|#60);/g, '<').replace(/&(?:gt|#62);/g, '>').replace(/\s+/g, ' ').trim()
}

const millsNames = {
    calories: 'energy-kcal',
    'total fat': 'fat',
    'saturated fat': 'saturated-fat',
    sodium: 'sodium',
    salt: 'salt',
    'dietary fiber': 'fiber',
    protein: 'proteins',
    'total carbohydrate': 'carbohydrates',
    sugars: 'sugars',
    'total sugars': 'sugars',
    'added sugars': 'added-sugars',
    'sugar, added': 'added-sugars'
}

const millsCodes = {
    FATNLEA: 'fat',
    FASAT: 'saturated-fat',
    NA: 'sodium',
    'CHO-': 'carbohydrates',
    FIBTSW: 'fiber',
    SUGAD: 'added-sugars',
    'ENER-': 'energy-kcal',
    'SUGAR-': 'sugars',
    'PRO-': 'proteins'
}


function findJsonObject(html, pattern) {
    const match = pattern.exec(html)
    if (!match) return null
    const start = html.indexOf('{', match.index)
    let depth = 0
    let quoted = false
    let escaped = false
    for (let i = start; i < html.length; i++) {
        const ch = html[i]
        if (quoted) {
            if (escaped) escaped = false;
            else if (ch === '\\') escaped = true;
            else if (ch === '"') quoted = false
            continue
        }
        if (ch === '"') quoted = true;
        else if (ch === '{') depth++;
        else if (ch === '}' && --depth === 0) {
            try {
                return JSON.parse(html.slice(start, i + 1))
            } catch(err) {
                return null
            }
        }
    }
    return null
}

function smartLabelLink(value) {
    try {
        const raw = cleanStr(value)
        const secure = /^http:\/\/smartlabel\.generalmills\.com\/\d{8,14}$/.test(raw) ? raw.replace(/^http:/, 'https:') : raw
        const u = new URL(secure)
        if (u.protocol !== 'https:' || u.username || u.password || u.port || u.search || u.hash) return null
        if (u.hostname === 'smartlabel.generalmills.com' && /^\/\d{8,14}$/.test(u.pathname)) return u.href
        if (u.hostname === 'smartlabel.1worldsync.com' && /^\/[a-z0-9_-]+\/\d{8,14}(?:-[a-z0-9-]+)?\.html$/i.test(u.pathname)) return u.href;
        if (u.hostname === 'smartlabel.labelinsight.com' && /^\/product\/\d+$/.test(u.pathname)) return u.href
    } catch (err) {}
    return null
}

function getAttr(tag, key) {
    return tag.match(new RegExp('\\b' + key + `\\s*=\\s*["']([^"']*)["']`, 'i'))?.[1] || ''
}

function findBlocks(html, tag, attr, value) {
    const out = []
    const toks = new RegExp('<\\/?' + tag + '\\b[^>]*>', 'gi')
    let match
    const stack = []
    while (match = toks.exec(html)) {
        if (match[0].startsWith('</')) {
            const open = stack.pop()
            if (open?.selected) out.push(html.slice(open.start, match.index))
            continue
        }
        const found = attr ? getAttr(match[0], attr) : ''
        stack.push({
            start: toks.lastIndex,
            selected: !attr || (attr === 'class' ? found.split(/\s+/).includes(value) : found === value)
        })
    }

    return out
}

function millsId(index, pageUrl, code) {
    const url = smartLabelLink(pageUrl)

    if (!url || new URL(url).hostname !== 'smartlabel.generalmills.com') return null
    const id = new URL(url).pathname.slice(1)

    const ids = [...index.matchAll(/<input\b[^>]*>/gi)].filter(m => getAttr(m[0], 'id') === 'hdnGTINId').map(m => getAttr(m[0], 'value'))

    return sameCode(id, code) && ids.length && ids.every(x => sameCode(x, code)) ? id : null;
}

function millsFeatureId(information, code) {
    for (const tag of information.match(/<a\b[^>]*>/gi) || []) {
        const id = getAttr(tag, 'data-heading').match(/^About this Product~(\d{8,14})$/i)?.[1]
        if (id && sameCode(id, code)) return id
    }
    return null
}

function millsFood(parts, pageUrl, code) {
    if (Object.values(parts).some(str => str && str.length > 2500000) || !millsId(parts.index, pageUrl, code)) return null
    const upcs = findBlocks(parts.header, 'div', 'class', 'upc').map(stripHtml)
    if (!upcs.length || !upcs.every(id => sameCode(id, code))) return null
    const name = stripHtml(findBlocks(parts.header, 'div', 'class', 'product-header-name')[0])
    const brand = stripHtml(findBlocks(parts.header, 'div', 'class', 'product-subheader')[0])
    if (!name) return null
    const src = {
        name: (brand || 'General Mills') + ' · SmartLabel',
        url: smartLabelLink(pageUrl),
        kind: 'brand-product-label',
        updated: new Date().toISOString().slice(0, 10)
    }
    const lists = findBlocks(parts.ingredients, 'ul', 'id', 'ingredients-list')
    const ingredientList = lists.length === 1 ? findBlocks(lists[0], 'li', 'class', 'ingredient-li').map(row => {
        const nameList = findBlocks(row, 'div', 'class', 'ing-head').map(stripHtml).filter(Boolean)
        return nameList.length > 1 ? nameList[0] + ' (' + nameList.slice(1).join(', ') + ')' : nameList[0] || ''
    }).filter(Boolean) : []
    const ingredients = ingredientList.join(', ').replace(/, (ADDED TO (?:PRESERVE|RETAIN) FRESHNESS)\b/gi, ' $1')
    const allergyLists = findBlocks(parts.allergens, 'ul', 'id', 'allergens-list')
    const declarations = []
    if (allergyLists.length === 1) {
        for (const row of findBlocks(allergyLists[0], 'li', 'class', 'allergen-li')) {
            const allergen = stripHtml(findBlocks(row, 'h3')[0])
            const presence = stripHtml(findBlocks(row, 'div', 'class', 'contain-link')[0])
            if (allergen && /^(?:contains|may contain)$/i.test(presence)) declarations.push(presence + ': ' + allergen)
        }
    }
    const featureRoot=millsFeatureId(parts.information || '', code) ? findBlocks(parts.features || '', 'div', 'id', 'other-details') : []
    const claimText = featureRoot.length === 1 ? findBlocks(featureRoot[0], 'span', 'class', 'claims-plain-text').map(stripHtml).join('. ') : ''
    const labelClaims = findClaims(stripHtml(parts.header) + '. ' + claimText, [], src)

    const labelNames = []
    const rows = []
    const panels = findBlocks(parts.nutrition, 'div', 'class', 'nutritional-container')
    let nutrition = {
        nutrients: {},
        serving: '',
        nutritionBasis: '100g'
    }
    if (panels.length === 1) {
        const servingBlocks = findBlocks(panels[0], 'div', 'class', 'servings')
        const serving = servingBlocks.length === 1 ? findBlocks(servingBlocks[0], 'p').map(stripHtml).filter(str => !/^serving size$/i.test(str)).join(' ') : ''
        const options = findBlocks(parts.index, 'select', 'id', 'ddlServingSize')[0] || ''
        const option = options.match(/<option\b[^>]*value=["']As Packaged["'][^>]*>([\s\S]*?)<\/option>/i)?.[1]
        const count = [...parts.index.matchAll(/<input\b[^>]*>/gi)].find(m => getAttr(m[0], 'id') === 'hdnServingSizeCount')
        const packaged = option ? stripHtml(option) === serving : !!count && getAttr(count[0], 'value') === '1'
        if (packaged && serving) {
            for (const row of findBlocks(panels[0], 'li')) {
                let nm = stripHtml(findBlocks(row, 'label')[0])
                if (nm === 'Total Sugar') nm = 'Total Sugars'
                if (nm === 'Includes' && /\bAdded Sugars?\b/i.test(stripHtml(row))) nm = 'Added Sugars'
                const amounts = findBlocks(row, 'span', 'class', 'gram-value')
                if (amounts.length !== 1) continue
                const match = stripHtml(amounts[0]).match(/^(\d+(?:\.\d+)?)\s*(g|mg)$/i)
                if (match) rows.push({
                    name: nm,
                    value: match[1],
                    uom: match[2]
                })
            }
            const calories = findBlocks(panels[0], 'div', 'class', 'cal');
            if (calories.length === 1) {
                const values = findBlocks(calories[0], 'p').map(stripHtml)
                if (values.length === 2 && /^calories$/i.test(values[0])) rows.push({
                    name: 'Calories',
                    value: values[1],
                    uom: 'kcal'
                })
            }
            nutrition = makePanel(rows, serving, undefined, undefined)
        }
    }
    const category = guessCategory(brand + ' ' + name) || '';

    return {
        code,
        name,
        brand,
        kind: 'food',
        category,
        categories: category ? [category] : [],
        ingredients,
        ingredientListKind: 'label',
        allergenStatement: declarations.join('. '),
        allergens: [],
        traces: [],
        labels: labelNames,
        labelClaims,
        ...nutrition,
        sources: [src],
        match: 'barcode'
    }
}

async function getMillsFood(index, pageUrl, code) {
    const id = millsId(index, pageUrl, code)
    if (!id) return null
    const base = 'https://smartlabel.generalmills.com'
    const section = async (path, data) => {
        try {
            const url = base + path
            const r = await fetch(url, {
                credentials: 'omit',
                signal: timeoutSig(6500),
                ...(data ? {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(data).toString()
                } : {})
            })
            if (!r.ok || r.url && r.url !== url) return ''
            return await r.text()
        } catch (err){
            return ''
        }
    }
    const [header, nutrition, ingredients, allergens, information] = await Promise.all([section('/GTIN/ProductInfo?gtinID=' + id), section('/GTIN/GetNutritionalDetails', { id, servingSize: 'As Packaged' }), section('/GTIN/Ingredients', { id, isNutri: 'true' }), section('/GTIN/Allergens', { id, isNutri: 'true' }), section('/GTIN/Information', { id })])
    const featureId = millsFeatureId(information, code)
    const features = featureId ? await section('/GTIN/OtherDetailsSub', {
        id: featureId,
        heading: 'About this Product',
        subHed: '',
        type: ''
    }) : ''
    return millsFood({
        index,
        header,
        nutrition,
        ingredients,
        allergens,
        information,
        features
    }, pageUrl, code)
}

function makePanel(rows, serving, sizeValue, sizeUnit) {
    let size = Number(sizeValue)
    let unit = cleanStr(sizeUnit).toLowerCase()
    if (!['g', 'ml'].includes(unit) || !Number.isFinite(size) || size <= 0) {
        const metric = serving.match(/(?:^|\()(\d+(?:\.\d+)?)\s*(g|ml)\s*(?:\)|$)/i)
        size = metric ? Number(metric[1]) : NaN
        unit = metric?.[2].toLowerCase() || ''
    }
    const convertible = ['g', 'ml'].includes(unit) && Number.isFinite(size) && size > 0
    const nutrients = {}
    const conflicts = new Set()
    for (const row of rows) {
        const key = millsCodes[cleanStr(row.codeValue)] || millsNames[stripHtml(row.name || row.nutrientTypeCode).toLowerCase()]
        if (!key) continue
        const raw = row.value ?? row.nutrientQuantityContained
        const u = cleanStr(row.uom || row.nutrientQuantityContainedQual).toLowerCase()
        if (!/^\d+(?:\.\d+)?$/.test(String(raw ?? '').trim()) || row.symbol && row.symbol !== '=') continue
        if (!(key === 'energy-kcal' ? ['cal', 'kcal', 'calories'].includes(u) : ['g', 'grm', 'mg'].includes(u))) continue
        const amount = Number(raw) * (u === 'mg' ? 0.001 : 1)
        const per100 = amount * 100 / size
        if (nutrients[key + '_serving'] !== undefined && nutrients[key + '_serving'] !== amount) conflicts.add(key)
        if (serving) nutrients[key + '_serving'] = amount
        if(convertible && per100 <= (key === 'energy-kcal' ? 1000 : 100)) nutrients[key + '_100g'] = per100
    }
    for (const key of conflicts) {
        delete nutrients[key + '_serving']
        delete nutrients[key + '_100g']
    } 
    return {
        nutrients,
        serving,
        nutritionBasis: unit === 'ml' ? '100ml' : '100g'
    }
}

function smartLabelFood(html, pageUrl, code) {
    const url = smartLabelLink(pageUrl)
    if (!url || html.length > 2500000) return null
    const sync = new URL(url).hostname === 'smartlabel.1worldsync.com'
    const data = findJsonObject(html, sync ? /\bvar\s+data\s*=\s*\{/ : /\bproduct\s*:\s*\{\s*"id"\s*:/)
    if (!data) return null
    let name = ''
    let brand = ''
    let ingredients = ''

    let allergenStatement = ''
    let claimText = ''
    let labelNames = []
    let nutrition = {
        nutrients: {},
        serving: '',
        nutritionBasis: '100g'
    }
    if (sync) {
        const pageCode = new URL(url).pathname.match(/\/(\d{8,14})(?:-|\.)/)?.[1]
        const ids = [cleanStr(data.GTIN), ...asList(data.itemIDs).filter(x => /^GTIN(?:_\d+)?$/.test(cleanStr(x.itemIdType?.code))).map(x => cleanStr(x.itemId))].filter(Boolean)
        if (!pageCode || !sameCode(pageCode, code) || !ids.length || !ids.every(id => sameCode(id, code))) return null
        const raw = data.nutrients?.UNPREPARED
        if (!raw || !Array.isArray(data.ingredientStatement)) return null
        name = stripHtml(data.productName)
        brand = stripHtml(data.brandName)
        ingredients = data.ingredientStatement.map(stripHtml).filter(Boolean).join('\n')
        allergenStatement = stripHtml(data.allergenStatement);
        const declarations = []
        for (const x of asList(data.allergens)) {
            if (/^(?:contains|may contain)$/i.test(cleanStr(x.allergenLoc))) { 
                declarations.push(cleanStr(x.allergenLoc) + ': ' + stripHtml(x.shortDesc || x.allergenType))
            }
        }
        allergenStatement = [allergenStatement, ...declarations].filter(Boolean).join('. ')
        claimText = [...asList(data.claims?.tradeItemFeatureBenefit), ...asList(data.claims?.tradeItemMarketingMessage)].map(x => stripHtml(x.value)).join('. ')
        labelNames = []
        for (const x of asList(data.certs?.nestle_packagingMarkedLabelAccreditation)) {
            if (/^Non GMO Project$/i.test(cleanStr(x.value))) {
                labelNames.push('en:non-gmo')
            } else if (/^USDA Organic$/i.test(cleanStr(x.value))) {
                labelNames.push('en:organic')
            }
        }
        if (raw.nutrientBasisQuantityTypeCode === 'By serving') {
            const metric = cleanStr(raw.servingSize) + ' ' + cleanStr(raw.servingSizeQual)
            const household = stripHtml(raw.householdServingSize)
            nutrition = makePanel(asList(raw.nutrient), household ? household + ' (' + metric + ')' : metric, raw.servingSize, raw.servingSizeQual)
        }
    } else {
        if (!sameCode(cleanStr(data.upc), code) || smartLabelLink(data.landingPageUrl) !== url || data.productType !== 'Food' || data.isFoodProduct !== true || data.isPetFoodProduct === true) return null
        name = stripHtml(data.title)
        brand = stripHtml(data.brand)
        ingredients = stripHtml(data.rawIngredients)
        allergenStatement = stripHtml(data.warnings)
        const declarations = []
        for (const x of asList(data.allergenSection?.allergens)) {
            if (/^(?:contains|may contain)$/i.test(cleanStr(x.presence))) {
                declarations.push(cleanStr(x.presence) + ': ' + stripHtml(x.displayName || x.name))
            }
        }
        allergenStatement = [allergenStatement, ...declarations].filter(Boolean).join('. ')
        claimText = [...asList(data.otherSection?.claims?.claims), ...asList(data.otherSection?.gmoDisclosures)].map(x => stripHtml(x.name)).join('. ')
        const panels = asList(data.nutritionSection?.nutrientPanels)
        if (panels.length === 1 && /^per serv(?:e|ing)$/i.test(cleanStr(panels[0].name))) {
            const p = panels[0]
            nutrition = makePanel(asList(p.nutrients), stripHtml(p.servingSize) + (cleanStr(p.servingSizeUom) ? ' ' + cleanStr(p.servingSizeUom) : ''), p.servingSize2, p.servingSizeUom2) 
        }
    }
    if (!name) return null;
    const src = {
        name: brand + ' · SmartLabel',
        url,
        kind: 'brand-product-label',
        updated: new Date().toISOString().slice(0, 10)
    }
    const labelClaims = findClaims(claimText, labelNames, src)
    const claimTags = { 'non-gmo': 'en:non-gmo', 'gluten-free': 'en:gluten-free' }
    for (const claim of labelClaims) {
        const tag = claimTags[claim.kind]
        if (tag && !labelNames.includes(tag)) labelNames.push(tag)
    }
    const category = guessCategory(brand + ' ' + name) || ''
    return {
        code,
        name,
        brand,
        kind: 'food',
        category,
        categories: category ? [category] : [],
        ingredients,
        ingredientListKind: 'label',
        allergenStatement,
        allergens: [],
        traces: [],
        labels: labelNames,
        labelClaims,
        ...nutrition,
        sources: [src],
        match: 'barcode'
    }
}

let smartLabelWait = 0

async function getSmartLabel(code) {
    if (!/^\d{8,14}$/.test(code) || Date.now() < smartLabelWait) return null
    try {
        const url = 'https://api.smartlabel.org/api/search?product=' + encodeURIComponent(code) + '&perPage=5&page=1'
        const r = await fetch(url, {
            credentials: 'omit',
            signal: timeoutSig(6500)
        })
        if ([401, 403, 429].includes(r.status)) {
            smartLabelWait = Date.now() + 300000
            return null
        }
        if (!r.ok) return null
        const data = await r.json()
        const matches = asList(data?.data?.data).filter(x => x.product_classification === 'food_beverage' && sameCode(cleanStr(x.upc), code) && smartLabelLink(x.url))
        for (const match of matches.slice(0, 2)) {
            try {
                const pageUrl = smartLabelLink(match.url)
                const page = await fetch(pageUrl, {
                    credentials: 'omit',
                    signal: timeoutSig(6500)
                })
                if (!page.ok || smartLabelLink(page.url || pageUrl) !== pageUrl) continue
                const html = await page.text()
                const p = new URL(pageUrl).hostname === 'smartlabel.generalmills.com' ? await getMillsFood(html, pageUrl, code) : smartLabelFood(html, pageUrl, code)
                if (p) return p
            } catch (e) {}
        }
    } catch (e) {}
    return null
}

function resetSmartLabel() {
    smartLabelWait = 0
}

function stripTags(str) {
    return str.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&(?:nbsp|#160);/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Math.min(Number(n), 1114111))).replace(/\s+/g, ' ').trim()
}
const panelLabels = {
    'Non-GMO': 'en:non-gmo',
    Organic: 'en:organic',
    'Gluten Free': 'en:gluten-free',
    Vegan: 'en:vegan',
    Vegetarian: 'en:vegetarian'
}
function allObjects(value) {
    const out = [];

    const queue = [value]
    let count = 0
    while (queue.length && count++ < 30000) {
        const x = queue.shift()
        if (!x || typeof x !== 'object') continue
        if (Array.isArray(x)) {
            queue.push(...x)
            continue
        }
        out.push(x)
        queue.push(...Object.values(x))
    }
    return out
}

function panelToNutrients(pnl) {
    const nutrients = {}
    const originalUnit = cleanStr(pnl?.serving_size_unit_of_measurement)
    const originalSize = cleanStr(pnl?.serving_size)
    const description = stripTags(cleanStr(pnl?.description))
    let serving
    if (description && !/^per serving$/i.test(description)) {
        serving = description
    } else if (originalSize && originalUnit) {
        serving = originalSize + ' ' + originalUnit
    } else {
        serving = ''
    }
    let unit = originalUnit.toLowerCase()
    let size = Number(originalSize)
    if (!['g', 'ml'].includes(unit)) {
        const explicit = cleanStr(pnl?.description).match(/\((\d+(?:\.\d+)?)\s*(g|ml)\)/i)
        if (explicit) {
            size = Number(explicit[1])
            unit = explicit[2].toLowerCase()
        }
    }
    if (['oz', 'ounce', 'ounces'].includes(unit)) {
        size *= 28.349523125
        unit = 'g';
    }
    const basis = unit === 'ml' ? '100ml' : '100g'

    const convertible = ['g', 'ml'].includes(unit) && Number.isFinite(size) && size > 0
    const map={
        Calories: 'energy-kcal',
        Sugars: 'sugars',
        'Total Sugars': 'sugars',
        'Added Sugars': 'added-sugars',
        'Saturated Fat': 'saturated-fat',
        Sodium: 'sodium',
        Salt: 'salt',
        'Dietary Fiber': 'fiber',
        Protein: 'proteins',
        'Total Fat': 'fat',
        'Total Carbohydrate': 'carbohydrates'
    }
    const conflicting = new Set()
    for (const row of Array.isArray(pnl?.nutrients) ? pnl.nutrients : []) {
        const key = map[row.name];
        const u = cleanStr(row.unit_of_measurement).toLowerCase();
        if (!key || row.quantity === null || row.quantity === undefined || String(row.quantity).trim() === '') continue
        const v = Number(row.quantity)
        if (!Number.isFinite(v) || v < 0) continue
        if (!(key === 'energy-kcal' ? ['cal', 'kcal', 'calories'].includes(u) : ['g', 'grm', 'mg'].includes(u))) continue
        const grams = v * (u === 'mg' ? 0.001 : 1)
        const servingKey = key + '_serving'
        if (nutrients[servingKey] !== undefined && nutrients[servingKey] !== grams) conflicting.add(key)
        if (serving) nutrients[servingKey] = grams
        if (convertible) {
            const amount = grams * 100 / size
            if (amount <= (key === 'energy-kcal' ? 1000 : 100)) nutrients[key + '_100g'] = amount
        }
    }

    for (const key of conflicting) {
        delete nutrients[key + '_serving']
        delete nutrients[key + '_100g']
    }

    return {
        nutrients,
        basis,
        serving
    }
}

function mainPanel(panels) {
    if (panels.length === 1) return panelToNutrients(panels[0])
    const sameUnit = panels.length > 1 && panels.every(p => p.serving_size_unit_of_measurement === panels[0].serving_size_unit_of_measurement && Number(p.serving_size) > 0)
    const alternatePortions = sameUnit && panels.every(p => !cleanStr(p.description) || /^\d+(?:\.\d+)?\s*(?:oz|g|ml)\s*\(\d+(?:\.\d+)?\s*(?:g|ml)\)(?:\s+of Per)?$/i.test(cleanStr(p.description))) && /\(\d+(?:\.\d+)?\s*(?:g|ml)\)/i.test(cleanStr(panels[0].description))
    return alternatePortions ? panelToNutrients(panels[0]) : {
        nutrients: {},
        basis: '100g',
        serving: ''
    }
}


function foodFromShopPage(html, pageUrl, barcode) {
    const direct = cleanShopUrl(pageUrl)

    if (!direct || html.length > 2500000) return null
    const host = new URL(direct).hostname
    const src = {
        name: host.replace(/^www\./, ''),
        url: direct,
        kind: 'retailer-product-page',
        updated: new Date().toISOString().slice(0, 10)
    }
    const checkedAt = new Date().toISOString()
    const json = []
    for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        if (!/(?:id=["']__NEXT_DATA__["']|type=["']application\/ld\+json["'])/i.test(script[1])) continue
        try {
            json.push(JSON.parse(script[2]))
        } catch {
            continue
        }
    }
    const bits = []
    for (const piece of json) bits.push(...allObjects(piece))
    let p = null
    if (host === 'www.target.com' || host === 'target.com') {
        const id = new URL(direct).pathname.match(/A-(\d+)$/)?.[1]
        const node = bits.find(x => String(x.tcin) === id && sameCode(cleanStr(x.item?.primary_barcode), barcode))
        const thing = node?.item
        if (!thing || thing.product_classification?.product_type_name !== 'GROCERY') return null
        const facts = thing.enrichment?.nutrition_facts || {};
        const panels = facts.value_prepared_list || []
        const pnl = mainPanel(panels)
        const name = stripTags(cleanStr(thing.product_description?.title))
        if (!name) return null
        const category = guessCategory(name) || (/almond butter/i.test(name) ? 'en:almond-butters' : /peanut butter/i.test(name) ? 'en:peanut-butters' : /sparkling water/i.test(name) ? 'en:carbonated-waters' : '')
        const bullets = (thing.product_description?.bullet_descriptions || []).filter(v => typeof v === 'string').map(stripTags)
        const diet = bullets.filter(v => /^Dietary Needs:/i.test(v)).join(' ')
        let claimBits = [thing.product_description?.downstream_description]
        for (const b of thing.product_description?.soft_bullets?.bullets || []) claimBits.push(b)
        for (const v of bullets) {
            if (/^(?:Features|Dietary Needs):/i.test(v)) claimBits.push(v)
        }
        claimBits = claimBits.filter(x => typeof x === 'string')
        const claimText = stripTags(claimBits.join(' '))
        const productLabels = []
        for (const itemLabel of thing.wellness_merchandise_attributes || []) {
            const nm = panelLabels[itemLabel.value_name]
            if (nm && !productLabels.includes(nm)) productLabels.push(nm)
        }
        for (const [label, tag] of Object.entries(panelLabels)) {
            const wording = new RegExp('\\b' + label.replace(' ', '[ -]') + '\\b', 'i');
            if (wording.test(diet) && !productLabels.includes(tag)) productLabels.push(tag)
        }
        const labelClaims = findClaims(claimText, productLabels, src, checkedAt)
        const allergenStatement = [stripTags(cleanStr(facts.warning)), ...bullets.filter(v => /^(?:contains|may contain|allergen(?: information|s)?|contiene|puede contener)\s*:/i.test(v))].filter(Boolean).join('. ')
        p = {
            code: barcode,
            name,
            brand: cleanStr(thing.primary_brand?.name),
            kind: 'food',
            category,
            categories: category ? [category] : [],
            image: cleanStr(thing.enrichment?.images?.primary_image_url) || undefined,
            ingredients: cleanStr(facts.ingredients),
            allergens: [],
            traces: [],
            allergenStatement,
            labels: productLabels,
            nutrients: pnl.nutrients,
            nutritionBasis: pnl.basis,
            serving: pnl.serving,
            sources: [src],
            match: 'barcode',
            labelClaims
        }
    } else {
        let node = null;
        for (const x of bits) {
            let types = x['@type']
            if (!Array.isArray(types)) types = [types]
            if (!types.includes('Product')) continue
            let codeOk = false
            for (const k of ['gtin', 'gtin8', 'gtin12', 'gtin13', 'gtin14']) {
                if (sameCode(cleanStr(x[k]), barcode)) codeOk = true
            }
            if (!codeOk) continue
            let pageOk = false
            for (const offer of [].concat(x.offers || [])) {
                if (typeof offer.url === 'string' && samePage(offer.url, direct)) pageOk = true
            }
            if (pageOk) {
                node = x
                break
            }
        }
        if (!node || !cleanStr(node.name)) return null
        p = {
            code: barcode,
            name: stripTags(node.name),
            brand: typeof node.brand === 'string' ? node.brand : cleanStr(node.brand?.name),
            kind: 'product',
            category: '',
            categories: [],
            ingredients: '',
            allergens: [],
            traces: [],
            labels: [],
            nutrients: {},
            sources: [src],
            match: 'barcode'
        }
    }
    return {
        ...p,
        shop: {
            code: barcode,
            url: direct,
            retailer: host.includes('target.com') ? 'Target' : host.includes('vitacost.com') ? 'Vitacost' : host.replace(/^www\./, ''),
            checkedAt
        }
    }
}

const webCache = new Map()

let upcWait = 0

async function readShopPage(url, code) {
    try {
        const direct = cleanShopUrl(url)
        if (!direct) return null
        const r = await fetch(direct, {
            signal: timeoutSig(6500),
            credentials: 'omit'
        })
        if (!r.ok) return null
        const final = r.url || direct
        if (!samePage(final, direct)) return null
        return foodFromShopPage(await r.text(), final, code)
    } catch (err) {
        return null
    }
}

async function followOfferLink(link, domain) {
    if (cleanShopUrl(link)) return cleanShopUrl(link)
    try {
        const u = new URL(link)
        if (u.protocol !== 'https:' || u.hostname !== 'www.upcitemdb.com' || u.pathname !== '/norob/alink/') return null
        if (!/^(?:www\.)?(?:target\.com|walmart\.com|vitacost\.com|walgreens\.com)$/.test(domain)) return null
        const r = await fetch(link, {
            signal: timeoutSig(6500),
            credentials: 'omit'
        })
        const final = cleanShopUrl(r.url)
        if (!final) return null
        const host = new URL(final).hostname.replace(/^www\./, '')
        return host === domain.replace(/^www\./, '') ? final : null
    } catch (e) {
        return null
    }
}

async function findShopPages(code) {
    const urls = []
    const endpoint = process.env.EXPO_PUBLIC_PRODUCT_SEARCH_URL

    if (endpoint && /^https:\/\//.test(endpoint)) try {
        const u = new URL(endpoint)
        u.searchParams.set('barcode', code)
        const r = await fetch(u.toString(), { 
            signal: timeoutSig(6500)
        })
        if (r.ok) {
            const j = await r.json()
            let added = 0
            if (Array.isArray(j.urls)) {
                for (const x of j.urls) {
                    if (added >= 5) break
                    if (cleanShopUrl(x)) {
                        urls.push(cleanShopUrl(x))
                        added++
                    }
                }
            }
        }
    } catch {}
    try {
        const thing = await getUpcItem(code)
        let offers = []
        const allOffers = thing && thing.offers || []
        for (const o of allOffers) {
            if (/^(?:www\.)?(?:target\.com|walmart\.com|vitacost\.com|walgreens\.com)$/.test(cleanStr(o.domain))) offers.push(o)
        }
        offers.sort(function (a, b) {
            return Number(b.domain === 'target.com') - Number(a.domain === 'target.com')
        })
        offers = offers.slice(0, 2)
        const resolved = await Promise.all(offers.map(o => followOfferLink(cleanStr(o.link), cleanStr(o.domain))))
        urls.push(...resolved.filter(v => !!v))
    } catch (err) {}
    return [...new Set(urls)]
}

const upcCache = new Map()

export function getUpcItem(code) {
    const key = String(code).replace(/^0+/, '')

    const old = upcCache.get(key)
    if (old) return old
    async function go() {
        for (let attempt = 0; attempt < 2; attempt++) {
            if (Date.now() < upcWait) return null
            try {
                const r = await fetch('https://api.upcitemdb.com/prod/trial/lookup?upc=' + encodeURIComponent(code), {
                    signal: timeoutSig(6500)
                })
                if (r.status === 429) {
                    upcWait = Date.now() + 300000
                    return null
                }
                if (!r.ok) return null
                const j = await r.json()
                for (const x of j.items || []) {
                    if (sameCode(String(x.ean || x.upc || ''), code)) return x
                }
                return null
            } catch (err) {
                await wait(1200)
            }
        }
        return null;
    }
    const value = go()
    upcCache.set(key, value)
    while (upcCache.size > 150) upcCache.delete(upcCache.keys().next().value)

    return value
}

function mixResults(a, b) {
    if (!a) return b
    if (!b || !sameCode(a.code, b.code)) return a
    if (a.kind !== 'food' && b.kind === 'food') return {
        ...b,
        shop: b.shop || a.shop
    }
    if (b.kind !== 'food') return {
        ...a,
        shop: a.shop || b.shop
    }
    const recipe = v => v.toLowerCase().replace(/^\s*(?:ingredients?|ingredientes|ingrédients|zutaten)\s*:\s*/i, '').replace(/[^\p{L}\p{N}]/gu, '')

    if (a.ingredients && b.ingredients && recipe(a.ingredients) !== recipe(b.ingredients)) return {
        ...a,
        shop: a.shop || b.shop
    }
    const sameBasis = (a.nutritionBasis || '100g') === (b.nutritionBasis || '100g')

    const hasStandard = Object.keys(a.nutrients).some(k => k.endsWith('_100g'))
    const sameServing = !a.serving || a.serving.toLowerCase().replace(/\s/g, '') === b.serving?.toLowerCase().replace(/\s/g, '')

    let added = {}
    for (const k in b.nutrients) {
        let ok
        if (k.endsWith('_serving')) ok = sameServing;
        else ok = sameBasis || !hasStandard
        if (ok) added[k] = b.nutrients[k]
    }
    return {
        ...a,
        ingredients: a.ingredients || b.ingredients,
        allergenStatement: [a.allergenStatement, b.allergenStatement].filter(Boolean).join('. '),
        allergens: [...new Set([...a.allergens, ...b.allergens])],
        traces: [...new Set([...a.traces, ...b.traces])],
        labels: [...new Set([...a.labels, ...b.labels])],
        labelClaims: combineClaims(a.labelClaims, b.labelClaims),
        serving: a.serving || b.serving,
        nutritionBasis: hasStandard ? a.nutritionBasis : b.nutritionBasis,
        nutrients: {
            ...added,
            ...a.nutrients
        },
        shop: a.shop || b.shop,
        sources: [...a.sources, ...b.sources.filter(str => !a.sources.some(x => x.url === str.url))]
    }
}
function spindriftClaims(html, p) {
    if (p.kind !== 'food' || !sameCode(p.code, '856579002330') || !/^spindrift$/i.test(p.brand.trim()) || html.length > 2500000) return []
    const claimList = []
    const src = {
        name: 'Spindrift · sparkling water FAQs',
        url: 'https://drinkspindrift.com/pages/faqs',
        kind: 'brand-family-statement'
    }
    const checkedAt = new Date().toISOString()
    for (const script of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
        try {
            const faq = JSON.parse(script[1])
            if (faq['@type'] !== 'FAQPage' || !Array.isArray(faq.mainEntity)) continue
            for (const question of faq.mainEntity){
                const answer = stripTags(cleanStr(question.acceptedAnswer?.text))
                if (question.name === 'Do your products contain GMOs?' && /^All of the ingredients in our sparkling water are non-GMO certified\./.test(answer)) claimList.push({ kind: 'non-gmo', source: src, checkedAt })
                if(question.name === 'Are your products Kosher or Gluten Free?' && /^Yes to both! Please note our Kosher designation is OU\.$/.test(answer)) claimList.push({ kind: 'gluten-free', source: src, checkedAt })
            }
        } catch (err) {}
    }
    return combineClaims(claimList)
}


let faqCache
export async function getBrandClaims(p) {
    if (p.kind !== 'food' || !sameCode(p.code, '856579002330') || !/^spindrift$/i.test(p.brand.trim())) return []
    if (faqCache && faqCache.expires > Date.now()) return faqCache.value
    async function go() {
        try {
            const url = 'https://drinkspindrift.com/pages/faqs'
            const response = await fetch(url, {
                signal: timeoutSig(8000)
            })
            if (!response.ok || response.url && response.url !== url) return []
            return spindriftClaims(await response.text(), p)
        } catch {
            return []
        }
    }

    const value = go()
    faqCache = {
        expires: Date.now() + 300000,
        value
    }
    return value
}

export async function searchWeb(code) {
    if (!/^\d{8,14}$/.test(code)) return null
    const key = code.replace(/^0+/, '')
    const old = webCache.get(key)
    if (old && old.expires > Date.now()) return old.value
    const retail = async () => {
        const seeds = shopPagesFor(code)
        let res = null

        for (const url of seeds) res = mixResults(res, await readShopPage(url, code))
        const urls = (await findShopPages(code)).filter(url => !seeds.some(seed => samePage(seed, url))).slice(0, 4)

        for (let i = 0; i < urls.length; i += 2) {
            const products = await Promise.all(urls.slice(i, i + 2).map(url => readShopPage(url, code)))
            for (const p of products) res = mixResults(res, p)
        }
        return res
    }
    const value = Promise.all([getSmartLabel(code), retail()]).then(([brand, shops]) => mixResults(brand, shops))
    webCache.set(key, {
        expires: Date.now() + 300000,
        value
    });

    while (webCache.size > 100) webCache.delete(webCache.keys().next().value)

    return value
}

function clearWebCache() {
    webCache.clear()
    faqCache = undefined
    upcWait = 0;
    resetSmartLabel()
}
