import { defineThemeConfig } from "@rouge/builder"

export default defineThemeConfig({
  entries: { "rouge-3": "rouge-3.ts" },
  outputs: [{ entry: "rouge-3", json: "rouge-3.json" }],
})
