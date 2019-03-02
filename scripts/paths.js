const path = require('path')
const fs = require('fs')

const _dirname = process.cwd()
const paths = {
  _dirname,
  src: path.join(_dirname, 'src'),
  dest: path.join(_dirname, 'themes'),
  themes: [],
  out: {},
}

paths.out = {
  'rouge-2': path.join(paths.dest, 'rouge-2.json'),
}

// TODO: async theme directory addition
const files = fs.readdirSync(paths.src, { withFileTypes: true })
files.forEach(f => {
  if (f.isDirectory()) {
    // console.log(f.name)
    paths.themes.push(path.join(paths.src, f.name))
    // Object.defineProperty(paths.out, f.name, {
    //   value: path.resolve(paths.dest, `${f.name}.json`),
    //   writable: true,
    // })
  }
})

module.exports = paths
