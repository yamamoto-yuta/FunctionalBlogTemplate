import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const mode = 'light'
const theme = createTheme({
  palette: {
    mode: mode,
    error: {
      main: red.A400,
    },
    background: {
      default: { light: '#eeeeee', dark: '#0B0E14' }[mode],
      paper: { light: '#ffffff', dark: '#141924' }[mode],
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '1.6rem',
      padding: '1.0rem',
      fontWeight: 'bold',
      letterSpacing: 4,
    },
    h2: { fontSize: '1.4rem', padding: '1.0rem', fontWeight: 'regular' },
    h3: { fontSize: '1.2rem', padding: '1.0rem', fontWeight: 'regular' },
    h4: { fontSize: '1.2rem', padding: '1.0rem' },
    h5: { fontSize: '1.0rem', padding: '1.0rem' },
    h6: { fontSize: '1.0rem', padding: '1.0rem' },
    body2: { fontSize: '0.9rem' },
  },
})

export default theme
