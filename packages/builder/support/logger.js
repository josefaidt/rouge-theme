const chalk = require('chalk')

module.exports = function logger(phrase) {
  const d = new Date()
  const timeStr = `[${d.toTimeString().split(' ')[0]}]`
  return `${chalk.gray(timeStr)} ${phrase || ''}`
}
