import { Box, Button } from '@mui/material'
import Link from 'next/link'
import { Tag } from '../lib/api/tags'
import { hex2hsl, hsl2hex, setHsl } from '../lib/colorHsl'
import theme from '../lib/theme'

const tagColorGenerate = (themeHex: string, mode: 'light' | 'dark') => {
  const themeHsl = hex2hsl(themeHex)
  let fg, bg, ol, fgHover, bgHover, olHover
  if (mode === 'light') {
    fg = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 30 }))
    bg = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 98 }))
    ol = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 30 }))
    fgHover = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 30 }))
    bgHover = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 93 }))
    olHover = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 30 }))
  } else if (mode === 'dark') {
    fg = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 75 }))
    bg = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 11 }))
    ol = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 35 }))
    fgHover = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 75 }))
    bgHover = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 17 }))
    olHover = hsl2hex(setHsl(themeHsl, { h: undefined, s: undefined, l: 35 }))
  }
  return { fg, bg, ol, fgHover, bgHover, olHover }
}

export const TagButton = ({ tag }: { tag: Tag }) => {
  const tagColor = tagColorGenerate(tag.color, theme.palette.mode)
  return (
    <Link href={`/article/tags/${tag.name}`} passHref>
      <Button
        variant="outlined"
        size="small"
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          pt: 0,
          pb: 0,
          mt: 0,
          mb: 0.7,
          color: `#${tagColor.fg}`,
          borderColor: `#${tagColor.ol}`,
          backgroundColor: `#${tagColor.bg}`,
          '&:hover': {
            color: `#${tagColor.fgHover}`,
            borderColor: `#${tagColor.olHover}`,
            backgroundColor: `#${tagColor.bgHover}`,
          },
        }}
      >
        {tag.name}
      </Button>
    </Link>
  )
}

export const TagButtons = ({ tags }: { tags: Tag[] }) => {
  if (tags === undefined) {
    return <div />
  }
  return (
    <Box>
      {tags.map((tag: Tag) => {
        return (
          <Box key={tag.name} sx={{ mr: 0.5, display: 'inline' }}>
            <TagButton tag={tag} />
          </Box>
        )
      })}
    </Box>
  )
}
