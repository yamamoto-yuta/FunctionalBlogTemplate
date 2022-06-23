import fs from 'fs'
import path from 'path'

// -----------
// Edit here !
type FixedJson = {
  site_description: string
  author_description_detail: string
  skills_data: SkillData[]
  works_data: WorkData[]
  time_line: { text: string; date: string }[]
}
export type SkillData = {
  image_url: { url: string; path: string }
  title: string
  description: string
  tags: string[]
}
export type WorkData = {
  image_url: { url: string; path: string }
  title: string
  description: string
  url: string
}
const fixedDefault: FixedJson = {
  site_description: '',
  author_description_detail: '',
  skills_data: [],
  works_data: [],
  time_line: [],
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
