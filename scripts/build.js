const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { listDirs, clearCache } = require('./fsOps')
const logger = require('./logger')
const paths = require('./paths')

//
// PROCESS EVENT TYPE
//

const args = process.argv.splice(2, process.argv.length)
let event = null
if (args.length) {
  switch (args[0]) {
    case 'develop':
      event = 'develop'
      break
    default:
      console.log('Unknown option, reverting to `default`')
      event = 'default'
      break
  }
} else {
  event = 'default'
}

//
// CORE
//

const startup = () => {
  const startMsg = logger('start up completed in')
  // const startupMessage = `${logger()} 🚀  ${chalk.green('Starting to build your theme')}`
  const startupMessage = logger(`🚀  Starting to build your theme`)
  console.time(startMsg)
  console.log(startupMessage)
  console.timeEnd(startMsg)
}

const watch = () => {
  const options = {
    recursive: true,
  }
  paths.themes.forEach(d => {
    fs.watch(d, options, (eventType, filename) => {
      // console.log(`event type is: ${eventType}`)
      if (filename) {
        console.log(logger(`📁  File changed: ${filename}`))
        write()
      } else {
        write()
        console.log(logger(`📁  File changed: <not provided>`))
      }
    })
  })
}

const write = () => {
  const buildMsg = logger(chalk.green('build completed in'))
  console.time(buildMsg)

  // IMPORT FILES
  const importMsg = logger(`🗄  ${chalk.yellow('collecting files')}`)
  console.time(importMsg)
  // eslint-disable-next-line global-require
  const srcFiles = require('../src/rouge-2')
  console.timeEnd(importMsg)

  // WRITE OUT JSON
  const jsonString = JSON.stringify(srcFiles)
  fs.writeFile(paths.out['rouge-2'], jsonString, 'utf8', async err => {
    if (err) logger(err, 'error')

    console.log(logger(`🏗  ${chalk.yellow('Building..')}`))
    // clear cache of all files
    await clearCache(listDirs(path.join(paths.src, 'rouge-2')))
  })
  console.timeEnd(buildMsg)
}

//
// HANDLE EXITS
//

const ExitHandler = (options, exitCode) => {
  if (options.cleanup) {
    console.log('🛀🏻  Cleaning up...')
    // TODO: misc clenaup tasks
  }
  if (exitCode || exitCode === 0)
    console.log(chalk.blue('\nGracefully shutting down...'))
  if (options.exit) process.exit()
}
// process.on('exit', () => console.log('\nExiting...'))
process.on('SIGINT', ExitHandler.bind(null, { cleanup: false, exit: true }))

//
// MISSION CONTROL
//

switch (event) {
  case 'default':
    startup()
    console.log(logger(chalk.red('Default mode set')))
    return write()
  case 'develop':
    console.log(logger(chalk.yellow.underline('Mode is set to development')))
    startup()
    write()
    console.log(logger(`👁  Watching for changes..`))
    return watch()
  default:
    console.log('🤢 Someting went wrong... exiting')
    return process.exit(1)
}
