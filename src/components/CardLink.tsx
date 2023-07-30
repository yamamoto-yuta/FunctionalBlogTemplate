import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Button,
  Box,
  Link,
} from '@mui/material'
import { ExternalMetadataContext } from '../pages/_app'
import { useContext } from 'react'
import { rootPath } from '../lib/consts'

export const CardLink = ({ url }: { url: string }) => {
  const { metadata, setMetadata } = useContext(ExternalMetadataContext)
  if (metadata[url] === undefined) {
    return (
      <Link href={url} target="_blank" rel="noopener">
        {url}
      </Link>
    )
  }
  const url_domain = metadata[url]['url_domain']
  const url_domain_link = metadata[url]['url_domain_link']
  const title = metadata[url]['title']
  if (title === undefined) {
    return (
      <Link href={url} target="_blank" rel="noopener">
        {url}
      </Link>
    )
  }
  let description = metadata[url]['description']
  if (description == undefined) {   // 文字列以外が入っていた場合
    description = ''
  }
  const description_max_length = 100
  if (description.length > description_max_length) {
    description = description.slice(0, description_max_length).concat('...')
  }

  const image = `${rootPath}${metadata[url]['image_url']}`
  let image_component = <div />
  if (image === undefined) {
    image_component = <div />
  } else {
    image_component = (
      <Button
        href={url}
        aria-label={title}
        target="_blank"
        rel="noopener"
        sx={{ m: 0, p: 0 }}
      >
        <CardMedia component="img" image={image} alt={title} />
      </Button>
    )
  }
  return (
    <Card variant="outlined" sx={{ width: '98%', mt: '1rem', mb: '1rem' }}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={7}>
          <Box sx={{ pr: '1rem', pb: '0.5rem', pt: '1rem', pl: '1rem' }}>
            <Link
              variant="body1"
              href={url}
              target="_blank"
              rel="noopener"
              color="inherit"
              underline="hover"
              fontWeight="bold"
            >
              {title}
            </Link>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pt: '0.5rem' }}
            >
              {description}
            </Typography>
            <Link
              href={url_domain_link}
              target="_blank"
              rel="noopener"
              sx={{ fontSize: 11 }}
              color="text.secondary"
            >
              {url_domain}
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          {image_component}
        </Grid>
      </Grid>
    </Card>
  )
}
