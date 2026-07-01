import { defineConfig } from "rolldown"

export default defineConfig({
  input: {
    index: "src/index.ts",
    "no-italics": "src/no-italics.ts",
  },
  output: {
    dir: "dist",
    format: "esm",
    entryFileNames: "[name].mjs",
  },
})
