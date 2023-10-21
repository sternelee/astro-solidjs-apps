import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [
    solid(),
    UnoCSS({
      injectReset: true,
    }),
    mdx()
  ],
});
