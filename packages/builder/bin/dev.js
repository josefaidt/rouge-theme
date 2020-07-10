const { existsSync: exists, promises: fs } = require('fs')
const path = require('path')

module.exports = function dev(entry, options) {
  console.log('ENTRY', entry)
}