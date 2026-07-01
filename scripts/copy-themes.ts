import * as fs from "node:fs/promises"
import * as path from "node:path"

/**
 * Copies each theme package's built JSON into packages/vscode-theme/themes/.
 * vsce only packages files physically inside the extension's own directory,
 * so sibling workspace packages' dist/ output has to be copied in rather
 * than referenced by path. Run from packages/vscode-theme.
 */
const COPIES: Array<[from: string, to: string]> = [
  ["../rouge-1/dist/rouge.json", "themes/rouge.json"],
  ["../rouge-1/dist/rouge-no-italics.json", "themes/rouge-no-italics.json"],
  ["../rouge-2/dist/rouge-2.json", "themes/rouge2.json"],
  ["../rouge-3/dist/rouge-3.json", "themes/rouge3.json"],
]

async function copyThemes() {
  await fs.mkdir(path.join(process.cwd(), "themes"), { recursive: true })
  for (const [from, to] of COPIES) {
    await fs.copyFile(path.join(process.cwd(), from), path.join(process.cwd(), to))
  }
}

await copyThemes()
