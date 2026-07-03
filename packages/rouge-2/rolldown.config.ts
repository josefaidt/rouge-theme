import { defineThemeConfig } from "@rouge/builder"

export default defineThemeConfig({
  entries: { "rouge-2": "rouge-2.ts" },
  outputs: [{ entry: "rouge-2", json: "rouge-2.json" }],
})
