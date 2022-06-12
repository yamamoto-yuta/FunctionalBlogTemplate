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

const configDirectory = path.join(process.cwd(), 'contents', 'etc')

export function getConfigJson() {
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
            root_url: '',
            url_domain: '',
            url_subpath: '',
            issues_edit_page: '',
            author_name: 'author_name',
            author_introduction: 'author_introduction',
            avatar_image_url: '',
            sns: undefined,
        }
        return config
    }
}
