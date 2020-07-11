const { watch, existsSync: exists, promises: fs } = require('fs')
const path = require('path')
const c = require('chalk')
const write = require('./_write')

module.exports = async function build(entry, options) {
  const outDir = path.join(entry, options.out || 'out')
  const themeDir = path.join(entry, 'themes')
  const themes = await fs.readdir(themeDir)
  for (const theme of themes) {
    await write(path.join(themeDir, theme), outDir)
  }
}