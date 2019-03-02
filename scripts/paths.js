const path = require('path')
const fs = require('fs')

const _dirname = process.cwd()
const paths = {
  _dirname,
  src: path.join(_dirname, 'src'),
  dest: path.join(_dirname, 'themes'),
  themes: {},
  out: {},
  outType: 'json',
}

const files = fs.readdirSync(paths.src, { withFileTypes: true })
files.forEach(f => {
  if (f.isDirectory()) {
    paths.themes[f.name] = path.join(paths.src, f.name)
    paths.out[f.name] = path.resolve(paths.dest, `${f.name}.${paths.outType}`)
  }
})

module.exports = paths
