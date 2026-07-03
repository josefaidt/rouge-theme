#!/usr/bin/env bun
import * as fs from "node:fs/promises"
import * as path from "node:path"
import { rolldown } from "rolldown"

export interface ThemeOutput {
  /** key from `entries`, matches the built chunk name */
  entry: string
  /** filename to write under dist/ */
  json: string
  /** which export of the built module to serialize */
  export?: string
}

export interface ThemeConfig {
  entries: Record<string, string>
  outputs: ThemeOutput[]
}

export function defineThemeConfig(config: ThemeConfig): ThemeConfig {
  return config
}

async function build(config: ThemeConfig) {
  const bundle = await rolldown({ input: config.entries })
  await bundle.write({ dir: "dist", format: "esm", entryFileNames: "[name].mjs" })
  await bundle.close()

  for (const output of config.outputs) {
    const modulePath = path.join(process.cwd(), "dist", `${output.entry}.mjs`)
    const mod = (await import(modulePath)) as Record<string, unknown>
    const exportName = output.export ?? "default"
    const value = mod[exportName]

    if (value === undefined) {
      throw new Error(`${output.entry} has no "${exportName}" export to emit`)
    }

    const outFile = path.join(process.cwd(), "dist", output.json)
    await fs.writeFile(outFile, `${JSON.stringify(value, null, 2)}\n`)
  }
}

if (import.meta.main) {
  const configPath = path.join(process.cwd(), "rolldown.config.ts")
  const { default: config } = (await import(configPath)) as { default: ThemeConfig }
  await build(config)
}
