import fs from 'fs'
import path from 'path'

export type ConfigJson = {
    blog_title: string
    site_introduction: string
    copylight_name: string
    copylight_url: string
    root_url: string
    url_domain: string
    url_subpath: string
    issues_edit_page: string
    //favicon_image_url: string
    author_name: string
    author_introduction: string
    //avatar_image_url: string
    //sns: { name: string; url: string }[]
}
  
export function getConfigJson() {
    const jsonPath = path.join(process.cwd(), 'consts', 'profile.json')
    const jsonText = fs.readFileSync(jsonPath, 'utf-8')
    let config = JSON.parse(jsonText) as ConfigJson
    return config
}
  