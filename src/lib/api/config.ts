import fs from 'fs'
import path from 'path'

export type ConfigJson = {
  blog_title: string
  site_introduction: string
  copylight_name: string
  copylight_url: string
  issues_page_url: string
  author_name: string
  avatar_image_url: string
  author_introduction: string
  sns: { name: string; url: string }[] | undefined
}

const configDirectory = path.join(process.cwd(), 'contents', 'etc')

/**
 * return a config.json object.
 */
export const getConfigJson = () => {
  const jsonPath = path.join(configDirectory, 'config.json')
  try {
    const jsonText = fs.readFileSync(jsonPath, 'utf-8')
    let config = JSON.parse(jsonText) as ConfigJson
    return config
  } catch (err) {
    console.log('config.json not exists.')
    let config: ConfigJson = {
      blog_title: 'blog_title',
      site_introduction: 'site_introduction',
      copylight_name: 'copylight_name',
      copylight_url: 'copylight_url',
      issues_page_url: '',
      author_name: 'author_name',
      author_introduction: 'author_introduction',
      avatar_image_url: '',
      sns: undefined,
    }
    return config
  }
}
