const { existsSync: exists, promises: fs } = require('fs')
const path = require('path')
const recursiveReadDir = require('./fs/recursiveReadDir')

module.exports = async function loadCommands(dir = path.join(__dirname, '../bin')) {
  const sbinPath = path.join(__dirname, '../sbin')
  let commands = []
  if (exists(sbinPath)) {
    const sbinFiles = await recursiveReadDir(sbinPath, { fullPath: true })
    if (sbinFiles.length) {
      for (let sbin of sbinFiles) {
        import(sbin).then(commands.push).catch(err => console.error('Error importing system command', path.basename(sbin)))
      }
    }
  }
  if (exists(dir)) {
    const binFiles = await recursiveReadDir(dir, { fullPath: true, not: [/^_[A-z].*\.js$/] })
    if (binFiles.length) {
      for (let bin of binFiles) {
        let mod
        try {
          mod = await import(bin)
        } catch (error) {
          throw new Error('Unable to import command', bin, error)
        }
        if (mod.default) commands.push(mod.default)
        else commands.push(mod)
      }
    }
  }
  return commands
}