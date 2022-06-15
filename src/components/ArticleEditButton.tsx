import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export const ArticleEditButton = ({
  slug,
  issues_page_url,
}: {
  slug: string
  issues_page_url: string
}) => {
  return (
    <IconButton
      href={`${issues_page_url}/${slug}`}
      target="_blank"
      rel="noopener"
      aria-label="edit page"
    >
      <EditIcon fontSize="small" />
    </IconButton>
  )
}
