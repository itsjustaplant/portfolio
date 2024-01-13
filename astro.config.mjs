import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    gfm: false
  }), react(), tailwind()]
});