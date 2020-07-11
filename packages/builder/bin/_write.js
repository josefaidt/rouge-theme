const { existsSync: exists, promises: fs } = require('fs')
const path = require('path')
const c = require('chalk')
const recursiveReadDir = require('../support/fs/recursiveReadDir')

module.exports = async function write(themePath, outDir) {
  const themeName = path.basename(themePath)
  const importMsg = `🗄  Collecting files`
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