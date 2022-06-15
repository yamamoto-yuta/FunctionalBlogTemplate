import Link from 'next/link'
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { TagButtons } from './TagButton'
import { Article } from '../lib/api/article'
import { Tag } from '../lib/api/tags'
import { getNow } from '../lib/datetime'
import { basePath } from '../lib/consts'

export const PostCard = ({
  slug,
  title,
  tags,
  posted_at,
}: {
  slug: string
  title: string
  tags: Tag[]
  posted_at: string
}) => {
  const now: string = getNow()
  if (posted_at > now) {
    return <div />
  }
  return (
    <Card
      variant="outlined"
      sx={{ width: '98%', m: 0, p: 0, borderRadius: '12px' }}
    >
      <Link href={`/article/${slug}`} passHref>
        <Button
          sx={{
            width: '100%',
            textTransform: 'none',
            pt: 0,
            pb: 0,
            pl: 0,
            pr: 0,
          }}
        >
          <Box sx={{ pt: 0, pb: 0, pr: 0, width: '100%', pl: 0 }}>
            <CardMedia
              component="img"
              image={`${basePath}/static/images/thumbnail/${slug}.jpg`}
              alt="thumbnail"
            />
            <Box sx={{ pr: '1.4rem', pl: '1.4rem' }}>
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                component="div"
                sx={{ m: 0, pt: 1, pb: 0.5 }}
              >
                {posted_at}
              </Typography>
              <Typography
                variant="h2"
                color="text.primary"
                component="div"
                sx={{ fontWeight: 'bold', pt: 0, pl: 0, pr: 0, pb: 1 }}
              >
                {title}
              </Typography>
            </Box>
          </Box>
        </Button>
      </Link>
      <Container>
        <Box sx={{ m: 0, pb: 1, pt: 1 }}>
          <TagButtons tags={tags} />
        </Box>
      </Container>
    </Card>
  )
}

export const PostCards = ({
  posts,
  page,
  postNumPerPage,
}: {
  posts: Article[]
  page: string | number | undefined
  postNumPerPage: number
}) => {
  page = page? Number(page): 1
  const pageStartPost: number = (page - 1) * postNumPerPage
  const pageEndPost: number = (page - 1) * postNumPerPage + postNumPerPage
  return (
    <Grid container>
      {posts.slice(pageStartPost, pageEndPost).map((post: Article) => {
        return (
          <Grid key={post.slug} item xs={12} sm={6}>
            <Box sx={{ m: { sm: '1rem', xs: 1 } }}>
              <PostCard {...post} />
            </Box>
          </Grid>
        )
      })}
    </Grid>
  )
}
