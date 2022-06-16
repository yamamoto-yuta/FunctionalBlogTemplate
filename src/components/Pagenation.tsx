import { Pagination as MuiPagination } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

export const Pagination = ({
  pageNum,
  page,
  handleChange,
}: {
  pageNum: number
  page: string | number | undefined
  handleChange: any
}) => {
  page = page ? Number(page) : 1

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#paginationAnchor')

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <MuiPagination
      count={pageNum}
      color="primary"
      onClick={handleClick}
      onChange={handleChange}
      page={page}
      variant="outlined"
      sx={{ justifyContent: 'center', display: 'flex' }}
      hideNextButton
      hidePrevButton
      siblingCount={2}
    />
  )
}
