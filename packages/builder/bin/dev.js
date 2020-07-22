const { watch, existsSync: exists, promises: fs } = require('fs')
const path = require('path')
const c = require('chalk')
const write = require('./_write')

module.exports = async function dev(entry, options) {
  let init = false
  const outDir = path.join(entry, options.out || 'out')
  const themeDir = path.join(entry, 'themes')
  const themes = await fs.readdir(themeDir)
  for (const theme of themes) {
    const _write = async () => await write(path.join(themeDir, theme), outDir)
    await _write()

    watch(path.join(themeDir, theme), { recursive: true }, async (eventType, filename) => {
      // console.log(`event type is: ${eventType}`)
      if (filename) {
        console.log(`📁  File changed: ${filename}`)
        await _write()
      }
    })

  }
}