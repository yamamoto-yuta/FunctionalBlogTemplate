import fs from 'fs'
import path from 'path'

// -----------
// Edit here ! 
type FixedJson = {
    site_description: string
}
const fixedDefault: FixedJson = {
    site_description: ''
}
const fixedFileName = 'index.json'
export type { FixedJson as IndexJson }
export { getJson as getIndexJson }
// -----------


/**
 * return a index.json object.
 */
 const getJson = () => {
    const fixedDirectory = path.join(process.cwd(), 'contents', 'fixed')
    const jsonPath = path.join(fixedDirectory, fixedFileName)
  try {
    const jsonText = fs.readFileSync(jsonPath, 'utf-8')
    let fixed = JSON.parse(jsonText) as FixedJson
    return fixed
  } catch (err) {
    console.log(`${fixedFileName} not exists.`)
    return fixedDefault
  }
}

