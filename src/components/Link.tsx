import Link from 'next/link'
import { css } from '@emotion/react'
import { domainPath } from '../lib/consts'
import theme from '../lib/theme'

const linkStyle = css`
  color: ${theme.palette.primary.main};
  &:hover {
    color: ${theme.palette.primary.dark};
  }
  &:visited {
    color: ${theme.palette.primary.dark};
    &:hover {
      color: ${theme.palette.primary.dark};
    }
  }
`

export const InternalLink = ({ href, alt }: { href: string; alt: string }) => {
  return (
    <Link href={href} passHref>
      <a css={linkStyle}>{alt}</a>
    </Link>
  )
}

export const ExternalLink = ({ href, alt }: { href: string; alt: string }) => {
  return (
    <a css={linkStyle} href={href} target="_blank" rel="noopener noreferrer">
      {alt}
    </a>
  )
}

export const TextLink = ({ href, alt }: { href: string; alt: string }) => {
  const thisSiteUrl = new RegExp(`https?://${domainPath}`)
  if (href.startsWith('#') || href.startsWith('/') || href.match(thisSiteUrl)) {
    return <InternalLink href={href} alt={alt} />
  } else {
    return <ExternalLink href={href} alt={alt} />
  }
}
