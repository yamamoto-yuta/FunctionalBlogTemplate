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
    author_name: string | undefined
    author_introduction: string | undefined
    avatar_image_url: string | undefined
    sns: { name: string; url: string }[] | undefined
}

export function getConfigJson() {
    const jsonPath = path.join(process.cwd(), 'contents', 'etc', 'config.json')
    let jsonText: string
    try {
        jsonText = fs.readFileSync(jsonPath, 'utf-8')
    } catch (err) {
        console.log('config.json not exists.')
        // Set default values
        jsonText = `
        {
            "blog_title": "Simple Blog Design",
            "site_introduction": "Simple template of RibbonCMS sideF",
            "copylight_name": "RibbonCMS",
            "copylight_url": "https://github.com/RibbonCMS",
            "root_url": "https://ribboncms.github.io/RibbonCMS_sideF/",
            "issues_page_url": "",
            "favicon_image_url": "",
            "author_name": "RibbonCMS team",
            "author_introduction": "",
            "url_domain": "",
            "url_subpath": ""
        }`
    }
    let config = JSON.parse(jsonText) as ConfigJson
    return config
}
