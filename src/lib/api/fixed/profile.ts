import fs from 'fs'
import path from 'path'

// -----------
// Edit here ! 
type FixedJson = {
    site_description: string
    skills_data: {image: string, title: string, description: string, tags: string[]}[]
    works_data: {image: string, title: string, description: string, url: string}[]
    time_line:  {text:string, date:string}[]  
}
const fixedDefault: FixedJson = {
    site_description: '',
    skills_data: [],
    works_data: [],
    time_line:  [],
}
const fixedFileName = 'profile.json'
export type { FixedJson as ProfileJson }
export { getJson as getProfileJson }
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

