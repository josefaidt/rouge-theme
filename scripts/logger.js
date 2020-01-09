const chalk = require('chalk')

const logger = phrase => {
  const d = new Date()
  const timeStr = `[${d.toTimeString().split(' ')[0]}]`
  return `${chalk.gray(timeStr)} ${phrase || ''}`
}

module.exports = logger
