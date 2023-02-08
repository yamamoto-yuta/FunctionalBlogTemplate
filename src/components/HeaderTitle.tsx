import { Avatar, Box, CardMedia, Grid, Typography } from '@mui/material'
import { ConfigJson } from '../lib/api/config'
import { IndexJson } from '../lib/api/fixed'
import { rootPath } from '../lib/consts'
import theme from '../lib/theme'

export const HeaderTitle = ({
  config,
  index,
}: {
  config: ConfigJson
  index: IndexJson
}) => {
  return (
    <Box
      sx={{
        borderRadius: '24px',
        backgroundColor: '#29334a',
        pl: { sm: '2rem', xs: '1rem' },
        pr: { sm: '2rem', xs: '1rem' },
        pb: '1rem',
        pt: '1rem',
      }}
    >
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <Avatar
            alt={config.author_name}
            src={`${rootPath}/${config.avatar_image_url.path}`}
            sx={{
              width: { md: 144, sm: 100, xs: 60 },
              height: { md: 144, sm: 100, xs: 60 },
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            fontSize={{ md: '92px', sm: '64px', xs: '40px' }}
            sx={{ color: '#f0ece0' }}
          >
            {index.site_header_title}
          </Typography>
        </Grid>
        <Grid item xs={0} />
      </Grid>
    </Box>
  )
}
