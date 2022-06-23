import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import { rootPath } from '../lib/consts'

export const Profile = ({
  author_name,
  author_description,
  avatar_image_url,
}: {
  author_name: string
  author_description: string
  avatar_image_url: string
}) => {
  return (
    <Box width="100%">
      <Grid container>
        <Grid item xs={4.8} />
        <Grid item xs={2.2}>
          <Link href='/profile' passHref>
            <IconButton>
              <Avatar
                alt={author_name}
                src={`${avatar_image_url}`}
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={5} />
      </Grid>
      <Typography variant="h5" sx={{ m: 0, p: 0, textAlign: 'center' }}>
        {author_name}
      </Typography>
      <Typography variant="body2" sx={{ m: 0, p: 0, textAlign: 'center' }}>
        {author_description}
      </Typography>
    </Box>
  )
}
