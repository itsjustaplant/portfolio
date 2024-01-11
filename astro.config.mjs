import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    gfm: false
  }), react()]
});