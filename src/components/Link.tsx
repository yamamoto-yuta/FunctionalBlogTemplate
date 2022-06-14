import Link from "next/link"
import { domainPath } from "../lib/consts"
import styled from 'styled-components'
import theme from "../lib/theme"

const Atag = styled.a`
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

export const InternalLink = ({href, alt}: {href: string, alt: string}) => {
    return (
      <Link href={href} passHref>
        <Atag>{alt}</Atag>
      </Link>
    )
}

export const ExternalLink = ({href, alt}: {href: string, alt: string}) => {
    return (
      <Atag href={href} target="_blank" rel="noopener noreferrer">
        {alt}
      </Atag>
    )
}

export const TextLink = ({href, alt}: {href: string, alt: string}) => {
    const thisSiteUrl = new RegExp(`https?://${domainPath}`)
    if (
        href.startsWith('#') ||
        href.startsWith('/') ||
        href.match(thisSiteUrl)
      ) {
        return <InternalLink href={href} alt={alt} />
    } else {
        return <ExternalLink href={href} alt={alt} />
    }
}