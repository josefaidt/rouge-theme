import colors from "./editorColors"
import tokenColors from "./tokenColors"
import semanticTokenColors from "./tokenColors/semantic"

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
