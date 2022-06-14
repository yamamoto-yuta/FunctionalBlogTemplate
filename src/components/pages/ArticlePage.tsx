import { Box } from '@mui/material'
import { Article } from '../../lib/api/article'
import { ConfigJson } from '../../lib/api/config'
import theme from '../../lib/theme'
import { MarkdownRenderer } from '../MarkdownRenderer'

export const ArticlePage = ({
  config,
  post,
}: {
  config: ConfigJson
  post: Article
}) => {
  return (
    <div>
      <Box sx={{m: 6}} />
      <Box sx={{ borderRadius: '16px', backgroundColor: theme.palette.background.paper, pl: {sm: '2rem', xs: '1rem'}, pr: {sm: '2rem', xs: '1rem'}, pt: '2rem', pb: '2rem', m: 0 }}>
        <MarkdownRenderer>{post.content}</MarkdownRenderer>
      </Box>
    </div>
  )
}
