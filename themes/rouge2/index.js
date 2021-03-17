const colors = require('./editorColors')
const tokenColors = require('./tokenColors')
const semanticTokenColors = require('./tokenColors/semantic')

module.exports = {
  "$schema": "vscode://schemas/color-theme",
  name: 'Rouge 2',
  type: 'dark',
  colors,
  tokenColors,
  semanticClass: 'theme.rouge',
  semanticHighlighting: false,
  semanticTokenColors,
}
