import { Box, Link, Typography } from '@mui/material'
import { Article } from '../../lib/api/article'
import { ConfigJson } from '../../lib/api/config'
import { IndexJson } from '../../lib/api/fixed/index'
import theme from '../../lib/theme'
import { HeaderTitle } from '../HeaderTitle'
import { MarkdownRenderer } from '../MarkdownRenderer'
import { PostCards } from '../PostCard'
import { PostsCarousel } from '../PostsCarousel'

export const IndexPage = ({
  config,
  index,
  stared_posts,
  new_posts,
}: {
  config: ConfigJson
  index: IndexJson
  stared_posts: Article[]
  new_posts: Article[]
}) => {
  return (
    <div>
      <HeaderTitle config={config}/>
      <Box sx={{ m: '3rem' }} />

      <MarkdownRenderer>{'## おすすめの記事'}</MarkdownRenderer>
      <PostsCarousel posts={stared_posts} />

      <Box sx={{ mt: '2rem' }} />
      <MarkdownRenderer>{'## 新着記事'}</MarkdownRenderer>
      <Box sx={{ ml: { sm: '3rem', xs: 0 }, mr: { sm: '3rem', xs: 0 } }}>
        <PostCards posts={new_posts} page={1} postNumPerPage={6} />
        <Typography align="right" sx={{ mr: '2rem' }}>
          <Link href="/article/list">
            <a>{'>>もっと見る'}</a>
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{
          borderRadius: '16px',
          backgroundColor: theme.palette.background.paper,
          pl: { sm: '2rem', xs: '1rem' },
          pr: { sm: '2rem', xs: '1rem' },
          pt: 0,
          pb: '1rem',
          mt: '4rem',
        }}
      >
        <MarkdownRenderer>{index.site_description}</MarkdownRenderer>
      </Box>
    </div>
  )
}
