import path from 'path'
import fs from 'fs'

export type RelatedSlugs = {
  [slug: string]: string[]
}

export function getRelatedJson() {
  const jsonPath = path.join(
    process.cwd(),
    'contents',
    'etc',
    'related_articles.json',
  )
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const relatedSlugs = JSON.parse(jsonText) as RelatedSlugs
  return relatedSlugs
}
