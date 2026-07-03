import { defineThemeConfig } from "@rouge/builder"

export default defineThemeConfig({
  entries: { "rouge-1": "rouge-1.ts", "no-italics": "no-italics.ts" },
  outputs: [
    { entry: "rouge-1", json: "rouge-1.json" },
    { entry: "no-italics", json: "rouge-1-no-italics.json" },
  ],
})
