import { Divider, Typography } from '@mui/material'
import { Article } from '../lib/api/article'
import { PostCards } from './PostCard'

export const RelatedArticles = ({ posts }: { posts: Article[] }) => {
  return (
    <div>
      <Divider sx={{ pt: '3rem' }}>
        <Typography variant="h2">関連記事</Typography>
      </Divider>
      <PostCards posts={posts} page={1} postNumPerPage={10} />
    </div>
  )
}
