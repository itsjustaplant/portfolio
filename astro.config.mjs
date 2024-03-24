import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://justaplant.dev",
  vite: {
    ssr: {
      noExternal: "@astrojs/prism",
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: "prism",
      shikiConfig: {
        theme: "material-theme-darker",
      },
      gfm: false,
    }),
    react(),
    tailwind(),
    sitemap(),
  ],
});
