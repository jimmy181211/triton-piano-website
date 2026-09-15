# Piano Club at UCSD website

Public website for the proposed Piano Club at UCSD. The club is currently going through the CSI approval process and no program will begin before approval is complete.

## Local preview

Serve the tracked static files from the repository root:

```sh
python -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173`.

## Checks

```sh
npm install
npm run check
```

## Continuous deployment

Cloudflare Workers Builds is connected directly to this repository. Every push to `main` runs `npm run check`, then `npx wrangler deploy` publishes the contents of `dist/` as Worker static assets.

The production domain is [tritonpiano.org](https://tritonpiano.org).
