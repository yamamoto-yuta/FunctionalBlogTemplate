import fs from 'fs'
import path from 'path'

export type ExternalMetadata = {
  [url: string]: {
    title: string
    url_domain: string
    url_domain_link: string
    description: string
    image_url: string
    site_name: string | undefined
  }
}

export function getExternalMetadataJson() {
  const jsonPath = path.join(
    process.cwd(),
    'contents',
    'etc',
    'external_ogp.json',
  )
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const metadata = JSON.parse(jsonText) as ExternalMetadata
  return metadata
}
