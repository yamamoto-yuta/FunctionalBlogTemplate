import { Box } from '@mui/material'
import { ConfigJson } from '../../lib/api/config'
import { Tag } from '../../lib/api/tags'
import { TagButtons } from '../TagButton'

export const TagsList = ({
  config,
  tags,
}: {
  config: ConfigJson
  tags: Tag[]
}) => {
  return (
    <div>
      <Box sx={{ m: 6 }} />
      <Box sx={{ m: 1 }}>
        <TagButtons tags={tags} />
      </Box>
    </div>
  )
}
