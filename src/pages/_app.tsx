import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../lib/theme'
import createEmotionCache from '../lib/createEmotionCache'
import { createContext, Dispatch, useState } from 'react'
import { ArticlesMap } from '../lib/api/article'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export const ArticlesContext = createContext(
  {} as {
    posts: ArticlesMap
    setPosts: Dispatch<React.SetStateAction<ArticlesMap>>
  },
)

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const initPosts: ArticlesMap = Object.create(null)
  const [posts, setPosts] = useState(initPosts)
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ArticlesContext.Provider value={{ posts, setPosts }}>
          <Component {...pageProps} />
        </ArticlesContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}
