const { watch, existsSync: exists, promises: fs } = require('fs')
const path = require('path')
const c = require('chalk')
const recursiveReadDir = require('../support/fs/recursiveReadDir')
// const watch = require('../support/watch')

async function write(themePath, outDir) {
  const themeName = path.basename(themePath)
  const importMsg = console.info(`🗄   Collecting files`)
  console.time(importMsg)
  let source
  try {
    // eslint-disable-next-line global-require
    source = await import(path.join(themePath, 'index.js'))
  } catch (error) {
    throw new Error('Unable to import theme', themeName)
  }
  console.timeEnd(importMsg)

  const jsonString = JSON.stringify(source)
  // WRITE OUT JSON
  console.log(
    `🏗  ${c.yellow(
      `Building - ${c.blue.bold(themeName)}`
    )}`
  )
  const buildMsg = c.green('build completed in')
  console.time(buildMsg)
  try {
    const outFile = path.join(outDir, path.basename(themePath), `${themeName}.json`)
    if (!exists(path.dirname(outFile))) await fs.mkdir(path.dirname(outFile), { recursive: true })
    await fs.writeFile(
      path.join(outDir, themeName, `${themeName}.json`),
      jsonString,
      'utf8')
  } catch (error) {
    if (error) console.error(error, 'error')
    // clear cache of all files
    await clearCache(await recursiveReadDir(themePath))
  }
  console.timeEnd(buildMsg)
}

module.exports = async function dev(entry, options) {
  let init = false
  const outDir = path.join(entry, options.out || 'out')
  const themeDir = path.join(entry, 'themes')
  const themes = await fs.readdir(themeDir)
  for (const theme of themes) {
    const _write = async () => await write(path.join(themeDir, theme), outDir)
    if (!init) {
      await _write()
      init = true
    }
    watch(path.join(themeDir, theme), { recursive: true }, async (eventType, filename) => {
      // console.log(`event type is: ${eventType}`)
      if (filename) {
        console.log(`📁  File changed: ${filename}`)
        await _write()
      } else {
        console.log(`📁  File changed: <not provided>`)
        await _write()
      }
    })
  }
}