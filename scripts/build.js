const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

//
// PATHS
//

const _dirname = process.cwd()
const paths = {
  _dirname,
  src: path.join(_dirname, 'src'),
  dest: path.join(_dirname, 'themes'),
  themes: [],
}

paths.out = {
  'rouge-2': path.join(paths.dest, 'rouge-2.json'),
}

// TODO: async theme directory addition
fs.readdir(paths.src, { withFileTypes: true }, (err, files) => {
  if (err) throw new Error(err)
  files.forEach(f => {
    if (f.isDirectory()) {
      paths.themes.push(path.join(paths.src, f.name))
    }
  })
})

const logger = phrase => {
  const d = new Date()
  const timeStr = `[${d.toTimeString().split(' ')[0]}]`
  return `${chalk.gray(timeStr)} ${phrase || ''}`
}

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
  fs.watch(path.join(_dirname, 'src', 'rouge-2'), options, (eventType, filename) => {
    // console.log(`event type is: ${eventType}`)
    if (filename) {
      console.log(logger(`🗄  File changed: ${filename}`))
      write()
    } else {
      write()
      console.log(logger(`🗄  File changed: <not provided>`))
    }
  })
}

const write = () => {
  const buildMsg = logger(chalk.green('build completed in'))
  console.time(buildMsg)
  // eslint-disable-next-line global-require
  const srcFiles = require('../src/rouge-2')
  const jsonString = JSON.stringify(srcFiles)
  fs.writeFile(paths.out['rouge-2'], jsonString, 'utf8', err => {
    if (err) throw new Error(err)
    console.log(logger(`🏗  ${chalk.yellow('Building..')}`))
    delete require.cache[require.resolve('../src/rouge-2')]
    console.timeEnd(buildMsg)
  })
}

//
// HANDLE EXITS
//

const ExitHandler = (options, exitCode) => {
  if (options.cleanup) {
    console.log('🛀🏻  Cleaning up...')
  }
  if (exitCode || exitCode === 0) console.log(chalk.blue('\nGracefully shutting down...'))
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
    startup()
    write()
    console.log(logger(chalk.yellow('Mode is set to development')))
    console.log(logger(`👁  Watching for changes..`))
    return watch()
  default:
    console.log('🤢 Someting went wrong... exiting')
    return process.exit(1)
}
