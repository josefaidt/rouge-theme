const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')
const _dirname = process.cwd()

const jsonPath = path.join(_dirname, 'themes', 'rouge-2_legacy.json')
const outFile = path.join(_dirname, 'src', 'rouge-2', `rouge-2.js`)
const json = require(process.argv[2] || jsonPath)

const parsedJson = JSON.stringify(json, null, 2)

if (typeof parsedJson === 'string' && parsedJson.length >= 20) {
  const jsExportText = 'module.exports = '
  fs.writeFile(outFile, `${jsExportText}${parsedJson}`, err => {
    if (err) return new Error(err)

    console.log('Successfully converted JSON file')
    exec(`yarn prettier --write ${outFile}`, (err, stdout, stderr) => {
      if (err) return new Error(err)
      console.log(stdout)
      if (stderr) console.log(`stderr: ${stderr}`)
    })
  })
} else {
  console.error(`Unable to write parsed JSON: type of ${typeof parsedJson}`)
}
