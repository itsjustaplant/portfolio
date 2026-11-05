import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  devToolbar: { enabled: false },
  site: "https://justaplant.dev",
  integrations: [react(), sitemap()],
});
