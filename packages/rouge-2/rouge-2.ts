import colors from "./lib/editorColors"
import tokenColors from "./lib/tokenColors"
import semanticTokenColors from "./lib/tokenColors/semantic"

export { default as palette } from "./lib/palette"

export default {
  $schema: "vscode://schemas/color-theme",
  name: "Rouge 2",
  type: "dark",
  colors,
  tokenColors,
  semanticClass: "theme.rouge",
  semanticHighlighting: false,
  semanticTokenColors,
}
