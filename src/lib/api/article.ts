import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getTagsJson, Tag } from './tags'


export type Article = {
    slug: string
    content: string
    title: string
    posted_at: string
    updated_at: string
    tags: Tag[]
    description: string
}

const postsDirectory = path.join(process.cwd(), 'contents', 'articles')

export const getArticleSlugs = () => {
    try {
        const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true })
        return allDirents
                .filter((dirent) => dirent.isDirectory())
                .map(({ name }) => name)
    } catch (err){
        console.log(err)
        return []
    }
}

export const getArticleBySlug = (slug: string, fields: string[] = []) => {
    const fullPath = path.join(postsDirectory, slug, 'index.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
  
    const items: Article = {
      slug: '',
      content: '',
      title: '',
      posted_at: '',
      updated_at: '',
      tags: [{ name: '', color: '', description: '' }],
      description: '',
    }
  
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = slug
      }
      if (field === 'content') {
        items[field] = content
      }
      if (field === 'tags') {
        const tag_ids = data['tag_ids']
        const tagsDict = getTagsJson()
        items[field] = tag_ids.map((tag_id: string) => {
          return tagsDict[tag_id]
        })
      }
      if (field === 'title' || field === 'posted_at' || field === 'updated_at' || field === 'description' ) {
        if (data[field] === undefined) {
          items[field] = ''
        } else {
          items[field] = data[field]
        }
      }
    })
    return items
}

/**
 * return selected fields of all posts
 * @param fields fields to get
 */
export function getAllArticles(fields: string[] = []) {
    const slugs = getArticleSlugs()
    const posts = slugs
      .map((slug) => getArticleBySlug(slug, fields))
      .sort((a, b) => (a.posted_at > b.posted_at ? -1 : 1))
    return posts
  }
  