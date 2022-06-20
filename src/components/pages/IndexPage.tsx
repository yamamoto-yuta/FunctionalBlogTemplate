import { Box, Typography } from '@mui/material'
import { ConfigJson } from '../../lib/api/config'
import { IndexJson } from '../../lib/api/fixed/index'
import Link from 'next/link'

export const IndexPage = ({ config, index }: { config: ConfigJson, index: IndexJson }) => {
  return (
    <div>
      <Typography variant="h1" color="text.secondary" align="center">
        {config.blog_title}
      </Typography>
      <Box sx={{ m: '3rem' }} />
      <Typography variant="body1" align="center">
        {index.site_description}
        <br />
        articles page is{' '}
        <Link href={`/articles`} passHref>
          here
        </Link>
        .
      </Typography>
    </div>
  )
}
