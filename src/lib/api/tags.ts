import fs from 'fs'
import path from 'path'
import { Article, getArticleBySlug, getArticleSlugs } from './article'

export type Tag = {
  name: string
  color: string
  description: string
}

const tagsDirectory = path.join(process.cwd(), 'contents', 'etc')

/**
 * return a tags.json object.
 */
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

/**
 * return tags contained in all articles.
 */
export function getAllTags() {
  // 全記事を取得する
  const slugs: string[] = getArticleSlugs()
  const allPost: Article[] = Array.from(
    slugs.map((slug: string) => getArticleBySlug(slug, ['tags'])),
  )
  // 全記事のタグを配列にする
  let tags: Tag[] = []
  allPost.forEach((post) => {
    tags = [...tags, ...post.tags]
  })
  // 重複するタグを消す
  tags = tags
    .filter(
      (element, index, self) =>
        self.findIndex(
          (e) =>
            e.name === element.name &&
            e.color === element.color &&
            e.description === element.description,
        ) === index,
    )
    .sort((a, b) => (a.name < b.name ? -1 : 1))

  return tags
}
