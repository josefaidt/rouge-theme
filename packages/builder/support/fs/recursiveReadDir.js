const { promises: fs } = require('fs')
const path = require('path')

const initial = {
  only: ['js'],
  fullPath: false,
  not: []
}
module.exports = async function recursiveReadDir(basePath, options = initial) {
  if (!options || !Object.keys(options).length) options = initial
  else options = { ...initial, ...options }
  const result = []
  const crawl = async filePath => {
    const files = await fs.readdir(filePath, { withFileTypes: true })
    for (const file of files) {
      const _path = path.join(filePath, file.name)
      if (file.isDirectory()) await crawl(_path)
      else if (options.only.some(o => file.name.endsWith(o))) {
        if (options.not.length) {
          if (options.not.some(r => !r.test(file.name))) {
            if (options.fullPath) {
              result.push(_path)
            } else {
              result.push(path.basename(_path).replace(basePath, ''))
            }
          }
        } else {
          if (options.fullPath) {
            result.push(_path)
          } else {
            result.push(path.basename(_path).replace(basePath, ''))
          }
        }
      }
    }
  }
  await crawl(basePath)
  return result
}
