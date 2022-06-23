import { Box, Typography } from '@mui/material'
import { ConfigJson } from '../../lib/api/config'
import { ProfileJson } from '../../lib/api/fixed/profile'

export const ProfilePage = ({ config, profile, skillTags }: { config: ConfigJson, profile: ProfileJson, skillTags: string[] }) => {
  return (
    <div>
      <Typography variant="h1" color="text.secondary" align="center">
        {config.blog_title}
      </Typography>
      <Box sx={{ m: '3rem' }} />
      <Typography variant="body1" align="center">
        {profile.site_description}
      </Typography>
    </div>
  )
}
