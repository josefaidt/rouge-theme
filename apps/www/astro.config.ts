import mdx from "@astrojs/mdx"
import rouge from "@rouge/rouge-1"
import rouge2 from "@rouge/rouge-2"
import rouge3 from "@rouge/rouge-3"
import tailwindcss from "@tailwindcss/vite"
import expressiveCode from "astro-expressive-code"
import { defineConfig } from "astro/config"

export default defineConfig({
  integrations: [expressiveCode({ themes: [rouge3, rouge2, rouge] }), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
})
