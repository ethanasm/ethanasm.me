# Privacy-preserving traffic analytics

`ethanasm.me` uses a Cloudflare Worker to send coarse, unlinkable page-view
events to Axiom while GitHub Pages remains the origin.

```text
Visitor -> Cloudflare Worker -> GitHub Pages
                    |
                    +-> Axiom (path, status, duration, country/region/city)
```

The Worker does not read or send IP addresses, user agents, referrers, cookies,
query strings, fingerprints, or visitor identifiers. Axiom cannot calculate
unique or returning visitors from these events.

## 1. Create the Axiom dataset

1. In Axiom, create an Events dataset named `ethanasm-site-traffic`.
2. Set its retention period to 30 days.
3. Create an advanced API token with only ingest permission for this dataset.
4. Keep the token available for the Worker secret step below.

If the Axiom organization uses a custom edge deployment, replace
`AXIOM_API_URL` in `wrangler.jsonc` with that deployment's base URL.

## 2. Put the existing domain behind Cloudflare

1. Add `ethanasm.me` as a Cloudflare zone.
2. Confirm Cloudflare imported all current DNS records, including the GitHub
   Pages apex records and any `www` record.
3. At the domain registrar, replace the authoritative nameservers with the two
   nameservers Cloudflare assigns.
4. Wait until the zone shows **Active**.
5. In Cloudflare DNS, set the apex and `www` web records to **Proxied** (orange
   cloud). Do not proxy mail-related records.
6. Set SSL/TLS encryption mode to **Full (strict)**.
7. Verify `https://ethanasm.me` still loads before deploying the Worker.

GitHub Pages remains configured with the `ethanasm.me` custom domain. Do not
remove `public/CNAME`.

## 3. Minimize Cloudflare logging

The committed `wrangler.jsonc` disables Workers Observability, including
invocation logs. Keep it disabled.

In the Cloudflare zone:

1. Do not configure HTTP or Workers Logpush.
2. Under **Rules -> Transform Rules -> Managed Transforms**, enable
   **Remove visitor IP headers** so raw visitor IP headers are not forwarded to
   GitHub Pages.
3. Do not add `console.log(request)` or request headers to the Worker.

Cloudflare still has to process a visitor's IP transiently to accept and route
the network connection. The configuration prevents the site analytics from
reading it and prevents Axiom from receiving it.

## 4. Authenticate and deploy

From the repository root:

```bash
npm install
npx wrangler login
npx wrangler secret put AXIOM_TOKEN
npm run worker:deploy
```

`wrangler secret put` may ask to create the Worker before storing its first
secret. Accept that prompt. Never place the Axiom token in `wrangler.jsonc`, an
environment file committed to Git, or frontend code.

The deploy attaches these routes:

```text
ethanasm.me/*
www.ethanasm.me/*
```

## 5. Verify

1. Open `https://ethanasm.me` in a private browser window.
2. In Axiom, open the Stream view for `ethanasm-site-traffic`.
3. Confirm an event contains only `_time`, `event`, `path`, `status`,
   `duration_ms`, and the `geo` fields.
4. Specifically confirm there are no IP, user-agent, referrer, cookie, query,
   or visitor-ID fields.
5. Confirm `https://ethanasm.me/privacy` is available from the footer.

## Axiom queries

Views over time:

```apl
['ethanasm-site-traffic']
| summarize views=count() by bin(_time, 1d)
```

Views by city and region:

```apl
['ethanasm-site-traffic']
| summarize views=count() by ['geo.country'], ['geo.region'], ['geo.city']
| sort by views desc
```

Popular pages:

```apl
['ethanasm-site-traffic']
| summarize views=count() by path
| sort by views desc
```

These are page-view counts, not unique visitor counts.
