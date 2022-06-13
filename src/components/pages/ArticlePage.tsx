import { Container } from '@mui/material'
import { Article } from '../../lib/api/article'
import { ConfigJson } from '../../lib/api/config'
import { MarkdownRenderer } from '../MarkdownRenderer'

export const ArticlePage = ({
  config,
  post,
}: {
  config: ConfigJson
  post: Article
}) => {
  return (
    <Container maxWidth="sm">
      <MarkdownRenderer>{post.content}</MarkdownRenderer>
    </Container>
  )
}
