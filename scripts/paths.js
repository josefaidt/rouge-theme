const path = require('path')
const fs = require('fs')

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
