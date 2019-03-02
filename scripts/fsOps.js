const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const logger = require('./logger')

// const testPath = path.join(process.cwd(), 'src', 'rouge-2')

const getFiles = directory => {
  const results = [directory]
  fs.readdirSync(directory, { withFileTypes: true }).forEach(f => {
    const fullPath = path.join(directory, f.name)
    if (f.isDirectory()) {
      results.push(fullPath)
      // results.push(...traverseDir(fullPath))
      traverseDirSync(fullPath, results)
    }
  })
  return results
}

const traverseDirSync = (dir, filelist) => {
  const files = fs.readdirSync(dir)
  filelist = filelist || []
  files.forEach(file => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      filelist = traverseDirSync(fullPath, filelist)
    } else {
      filelist.push(path.join(dir, file))
    }
  })
  return filelist
}

const clearCache = fileArray => {
  const cleanupMsg = logger(`🛀🏻  ${chalk.cyan('cleaned cache')}`)
  console.time(cleanupMsg)
  fileArray.forEach(f => delete require.cache[require.resolve(f)])
  console.timeEnd(cleanupMsg)
}

// console.log(listDirs(testPath))

module.exports = {
  getFiles,
  clearCache,
}
