# Portfolio

Static Astro site with plain CSS. A compact floating footer uses React and `use-lanyard` to show live Spotify activity. It is hidden when nothing is playing.

Requires Node.js 22.23.4 or newer. Use Node.js 24 LTS for local development.
The `.node-version` file pins Node.js 24.11.0 for Cloudflare Pages and compatible version managers. If Cloudflare has a `NODE_VERSION` environment variable configured, set it to `24.11.0` as well.

```sh
npm ci
npm run dev
```

Before committing, run `npm run check` and `npm run build`. Use `npm run preview` to inspect the production build.
