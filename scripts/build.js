const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { getFiles, clearCache } = require('./fsOps')
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
  const startMsg = logger(chalk.green('startup completed in'))
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
  const dirs = Object.values(paths.themes)
  fs.watch(paths.src, options, (eventType, filename) => {
    // console.log(`event type is: ${eventType}`)
    if (filename) {
      console.log(logger(`📁  File changed: ${filename}`))
      // console.log(filename.split('/')[0])
      write(filename.split('/')[0])
    } else {
      write()
      console.log(logger(`📁  File changed: <not provided>`))
    }
  })
}

const write = dirChanged => {
  const buildMsg = logger(chalk.green('build completed in'))
  console.time(buildMsg)

  // IMPORT dirChanged
  const theme = dirChanged
    ? paths.themes[dirChanged]
    : path.join(paths.src, 'rouge2')
  const importMsg = logger(`🗄  collecting files`)
  console.time(importMsg)
  // eslint-disable-next-line global-require
  const srcFiles = require(theme)
  console.timeEnd(importMsg)

  const jsonString = JSON.stringify(srcFiles)
  // WRITE OUT JSON
  console.log(
    logger(
      `🏗  ${chalk.yellow(
        `Building - ${chalk.blue.bold(theme.split('/').pop())}`
      )}`
    )
  )
  fs.writeFile(
    dirChanged ? paths.out[dirChanged] : paths.out['rouge2'],
    jsonString,
    'utf8',
    async err => {
      if (err) logger(err, 'error')

      // clear cache of all files
      await clearCache(getFiles(theme))
    }
  )
  console.timeEnd(buildMsg)
}

// write('rouge2')

//
// HANDLE EXITS
//

const ExitHandler = (options, exitCode) => {
  if (options.cleanup) {
    console.log('🛀🏻  Cleaning up...')
    clearCache()
  }
  if (exitCode || exitCode === 0)
    console.log(`\n${logger(chalk.blue('Gracefully shutting down...'))}`)
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
    console.log(logger(chalk.red('Default build mode set')))
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
