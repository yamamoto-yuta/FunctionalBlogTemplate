import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Box } from '@mui/material'
import { ConfigJson } from '../lib/api/config'

export default function Copyright({ config }: { config: ConfigJson }) {
  const name: string = config.copylight_name
  const url: string = config.copylight_url
  return (
    <Box sx={{ mt: '2rem' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href={url} target="_blank" rel="noopener">
          {name}
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  )
}
