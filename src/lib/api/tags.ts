import fs from 'fs'
import path from 'path'

export type Tag = {
  name: string
  color: string
  description: string
}

const tagsDirectory = path.join(process.cwd(), 'contents', 'etc')

export const getTagsJson = () => {
  try {
    const jsonPath = path.join(tagsDirectory, 'tags.json')
    const jsonText = fs.readFileSync(jsonPath, 'utf-8')
    const tagsDict = JSON.parse(jsonText)
    return tagsDict
  } catch (err) {
    return {}
  }
}
