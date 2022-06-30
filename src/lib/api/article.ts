import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getTagsJson, Tag } from './tags'
import { formatDatetime } from '../datetime'

export type Article = {
  slug: string
  content: string
  title: string
  posted_at: string
  updated_at: string
  tags: Tag[]
  description: string
}

export type ArticlesMap = {
  [slug: string]: Article
}

const postsDirectory = path.join(process.cwd(), 'contents', 'articles')

/**
 * return all article slugs
 */
export const getArticleSlugs = () => {
  try {
    const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true })
    return allDirents
      .filter((dirent) => dirent.isDirectory())
      .map(({ name }) => name)
  } catch (err) {
    console.log(err)
    return []
  }
}

/**
 * return an Article with selected fields specified by slug.
 * @param slug slug to specify article
 * @param fields fields to get
 */
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

  const tagsDict = getTagsJson()
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'tags') {
      const tag_ids = data['tag_ids']
      items[field] = tag_ids.map((tag_id: string) => {
        return tagsDict[tag_id]
      })
    }
    if (
      field === 'posted_at' ||
      field === 'updated_at'
    ) {
      if (data[field] === undefined) {
        items[field] = ''
      } else {
        items[field] = data[field].toString()//formatDatetime(data[field])
      }
    }
    if (
      field === 'title' ||
      field === 'description'
    ) {
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
 * return all posts with selected fields.
 * @param fields fields to get
 */
export const getAllArticles = (fields: string[] = []) => {
  const slugs = getArticleSlugs()
  const posts = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    .sort((a, b) => (a.posted_at > b.posted_at ? -1 : 1))
  return posts
}

/**
 * 指定したタグがついている記事を全て取得する
 * @param tag_name 取得するタグ名
 */
export function getTagedArticles(tag_name: string) {
  const allPosts = getAllArticles(['slug', 'title', 'posted_at', 'tags'])

  const tagedPosts = allPosts.filter((post) =>
    post.tags.some((tag) => tag.name === tag_name),
  )
  return tagedPosts
}

/**
 * convert Article[] into ArticlesMap.
 * @param posts Article[] to convert
 */
export const articlesListToMap = (posts: Article[]) => {
  const postsMap: ArticlesMap = Object.create(null)
  posts.forEach((post, i) => {
    postsMap[post.slug] = {
      slug: post.slug,
      title: post.title,
      tags: post.tags,
      posted_at: post.posted_at,
      content: '',
      updated_at: '',
      description: '',
    }
  })
  return postsMap
}

/**
 * extract article link (e.g. #1 ) from text.
 * @param text some text
 */
export const extractArticleLink = (text: string) => {
  const articleLinkPattern = /^#(\d+)\s*$/gm
  const slugs: string[] = [...text.matchAll(articleLinkPattern)].map(
    (match) => {
      return match[1]
    },
  )
  return slugs
}
