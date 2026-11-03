import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  devToolbar: { enabled: false },
  site: "https://justaplant.dev",
  integrations: [react(), tailwind(), sitemap()],
});
