import fs from 'fs'
import path from 'path'

// -----------
// Edit here ! 
export type FixedJson = {
    site_description: string
}
const fixedDefault: FixedJson = {
    site_description: ''
}
const fixedFileName = 'index.json'
// -----------


/**
 * return a index.json object.
 */
 export const getJson = () => {
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
