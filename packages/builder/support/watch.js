const { watch, promises: fs } = require('fs')

module.exports = function watch(dir) {
  const options = {
    recursive: true,
  }
  watch(dir, options, (eventType, filename) => {
    // console.log(`event type is: ${eventType}`)
    if (filename) {
      console.log(`📁  File changed: ${filename}`)
      console.log('FILE CHANGES', filename, filename.split('/')[0]);
      write(filename.split('/')[0])
    } else {
      write()
      console.log(logger(`📁  File changed: <not provided>`))
    }
  })
}