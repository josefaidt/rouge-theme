import * as fs from "node:fs/promises"
import * as path from "node:path"
import * as util from "node:util"

/**
 * Imports a rolldown-built ESM module and writes its default export as JSON.
 * Paths are resolved relative to the current working directory (the theme
 * package invoking this script from its own `build` script).
 */
async function emit(inputPath: string, outputPath: string) {
  const modulePath = path.join(process.cwd(), inputPath)
  const mod = (await import(modulePath)) as { default?: unknown }

  if (mod.default === undefined) {
    throw new Error(`${inputPath} has no default export to emit`)
  }

  const outFile = path.join(process.cwd(), outputPath)
  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await fs.writeFile(outFile, `${JSON.stringify(mod.default, null, 2)}\n`)
}

const { positionals } = util.parseArgs({ allowPositionals: true })
const [inputPath, outputPath] = positionals

if (!inputPath || !outputPath) {
  throw new Error("usage: emit-theme-json.ts <built-module.mjs> <output.json>")
}

await emit(inputPath, outputPath)
