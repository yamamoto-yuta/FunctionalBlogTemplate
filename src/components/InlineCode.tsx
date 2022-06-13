import { Box } from "@mui/material"

export const InlineCode = (props: any) => {
    return (
      <Box
        {...props}
        sx={{
          display: 'inline',
          background: '#fcfcfc',
          color: 'red',
          pr: 0.5,
          pl: 0.5,
          mr: 0.5,
          ml: 0.5,
          border: 1,
          borderColor: '#dddddd',
          borderRadius: 1,
        }}
      />
    )
  }
  