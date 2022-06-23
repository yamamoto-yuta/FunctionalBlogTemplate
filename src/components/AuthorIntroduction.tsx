import { Avatar, Box, Grid, Typography } from '@mui/material'
import { ConfigJson } from '../lib/api/config'
import { ProfileJson } from '../lib/api/fixed/profile'
import { rootPath } from '../lib/consts'
import theme from '../lib/theme'
import { MarkdownRenderer } from './MarkdownRenderer'

export const AuthorIntroduction = ({
  config,
  profile,
}: {
  config: ConfigJson
  profile: ProfileJson
}) => {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        backgroundColor: theme.palette.background.paper,
        pl: { sm: '2rem', xs: '1rem' },
        pr: { sm: '2rem', xs: '1rem' },
        pt: 0,
        pb: '1rem',
        mt: '2rem',
      }}
    >
      <Grid container>
        <Grid item sm={0.5} xs={0.5} />
        <Grid item sm={2} xs={3}>
          <Avatar
            alt={config.author_name}
            src={`${rootPath}/static/images/avatar/avatar.webp`}
            sx={{ width: 70, height: 70, mt: '1.2rem', align: 'center' }}
          />
        </Grid>
        <Grid item sm={9.5} xs={8.5}>
          <Typography variant="h2" sx={{ p: 0, mt: '1rem', mb: '0.5rem' }}>
            {config.author_name}
          </Typography>
          <MarkdownRenderer>
            {profile.author_description_detail}
          </MarkdownRenderer>
        </Grid>
      </Grid>
    </Box>
  )
}
