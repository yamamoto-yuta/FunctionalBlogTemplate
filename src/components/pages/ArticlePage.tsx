import { Box, Grid, Typography } from '@mui/material'
import { Article } from '../../lib/api/article'
import { ConfigJson } from '../../lib/api/config'
import theme from '../../lib/theme'
import { ArticleEditButton } from '../ArticleEditButton'
import { MarkdownRenderer } from '../MarkdownRenderer'
import { TagButtons } from '../TagButton'

export const ArticlePage = ({
  config,
  post,
}: {
  config: ConfigJson
  post: Article
}) => {
  return (
    <div>
      <Typography variant="h1" align="center">
        {post.title}
      </Typography>
      <Typography fontSize="14px" align="center" color="text.secondary">
        {post.posted_at}に公開
      </Typography>
      {post.updated_at && (
        <Typography
          fontSize="14px"
          align="center"
          color="text.secondary"
          sx={{ mt: 0.3 }}
        >
          {post.updated_at}に更新
        </Typography>
      )}

      <Box sx={{ m: 3 }} />
      <Box
        sx={{
          borderRadius: '16px',
          backgroundColor: theme.palette.background.paper,
          pl: { sm: '2rem', xs: '1rem' },
          pr: { sm: '2rem', xs: '1rem' },
          pt: '2rem',
          pb: '2rem',
          m: 0,
        }}
      >
        <Grid container>
          <Grid item sm={11.3} xs={10.3}>
            <TagButtons tags={post.tags} />
          </Grid>
          <Grid item sm={0.7} xs={1.7}>
            <ArticleEditButton
              slug={post.slug}
              issues_page_url={config.issues_page_url}
            />
          </Grid>
        </Grid>
        <Box sx={{ m: 3 }} />
        <MarkdownRenderer>{post.content}</MarkdownRenderer>
      </Box>
    </div>
  )
}
