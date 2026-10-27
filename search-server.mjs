import { createServer } from 'node:http';
import { pathToFileURL } from 'node:url';

export function createResearchServer({
  key = process.env.BRAVE_SEARCH_API_KEY,
  fetchImpl = fetch,
  dailyBudget = Number(process.env.SEARCH_DAILY_BUDGET || 100)
} = {}) {
  const cache = new Map(),
    active = new Map(),
    limits = new Map();
  let used = 0,
    day = '';
  const send = (res, status, body) => {
    res.writeHead(status, {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(JSON.stringify(body));
  };
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      if (req.method !== 'GET') return send(res, 405, { error: 'method_not_allowed' });
      if (url.pathname === '/health') return send(res, 200, { ok: true, searchConfigured: !!key });
      if (url.pathname !== '/v1/product-pages') return send(res, 404, { error: 'not_found' });
      if (!key) return send(res, 503, { error: 'search_not_configured' });
      const barcode = url.searchParams.get('barcode') || '';
      if (!/^(?:\d{8}|\d{12}|\d{13}|\d{14})$/.test(barcode))
        return send(res, 400, { error: 'invalid_barcode' });
      const code = barcode.replace(/^0+/, ''),
        now = Date.now();
      const old = cache.get(code);
      if (old && old.expires > now) return send(res, 200, old.body);
      for (const [k, v] of limits) if (v.until < now) limits.delete(k);
      const ip = req.socket.remoteAddress || 'unknown',
        limit = limits.get(ip) || { n: 0, until: now + 3600000 };
      if (limit.n >= 30 || limits.size > 10000) return send(res, 429, { error: 'rate_limit' });
      limit.n++;
      limits.set(ip, limit);
      const today = new Date().toISOString().slice(0, 10);
      if (day !== today) {
        day = today;
        used = 0;
      }
      if (!Number.isFinite(dailyBudget) || dailyBudget <= 0 || used >= dailyBudget)
        return send(res, 429, { error: 'daily_budget' });
      let task = active.get(code);
      if (!task) {
        used++;
        task = (async () => {
          const search = new URL('https://api.search.brave.com/res/v1/web/search');
          search.searchParams.set('q', '"' + barcode + '" ingredients nutrition product');
          search.searchParams.set('count', '10');
          const response = await fetchImpl(search, {
            headers: { Accept: 'application/json', 'X-Subscription-Token': key },
            signal: AbortSignal.timeout(8000)
          });
          if (!response.ok) throw Error('provider_unavailable');
          const data = await response.json();
          const urls = [
            ...new Set(
              (data.web?.results || []).flatMap((result) => {
                try {
                  const u = new URL(result.url);
                  if (u.protocol !== 'https:' || u.username || u.password || u.port) return [];
                  const h = u.hostname.replace(/^www\./, '');
                  if (!['target.com', 'walmart.com', 'vitacost.com', 'walgreens.com'].includes(h))
                    return [];
                  if (/\/(?:search|s|c|browse)(?:\/|$)/.test(u.pathname)) return [];
                  u.search = '';
                  u.hash = '';
                  return [u.toString()];
                } catch {
                  return [];
                }
              })
            )
          ].slice(0, 6);
          const body = { barcode, urls };
          cache.set(code, { body, expires: Date.now() + (urls.length ? 12 * 3600000 : 60000) });
          while (cache.size > 500) cache.delete(cache.keys().next().value);
          return body;
        })();
        active.set(code, task);
        void task.then(
          () => active.delete(code),
          () => active.delete(code)
        );
      }
      return send(res, 200, await task);
    } catch {
      return send(res, 502, { error: 'provider_unavailable' });
    }
  });
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT || 8787);
  createResearchServer().listen(port, '0.0.0.0', () =>
    console.log('Scan Safe product search listening on ' + port)
  );
}
