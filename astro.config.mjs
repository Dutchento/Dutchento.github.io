import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dutchento.org",
  integrations: [tailwind(), mdx(), sitemap(), icon(), playformCompress(), compressor()]
});