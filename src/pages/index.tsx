import { Container } from '@mui/material'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { AppBarWithTitle } from '../components/AppBar'
import Copyright from '../components/Copylight'
import { IndexPage } from '../components/pages/IndexPage'
import { Article, getAllArticles, getTagedArticles } from '../lib/api/article'
import { ConfigJson, getConfigJson } from '../lib/api/config'
import { IndexJson, getIndexJson } from '../lib/api/fixed/index'
import { rootPath } from '../lib/consts'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({
  config,
  index,
  stared_posts,
  new_posts,
}: {
  config: ConfigJson
  index: IndexJson
  stared_posts: Article[]
  new_posts: Article[]
}) => {
  return (
    <div>
      <Head>
        <title>{`${config.blog_title}`}</title>
        <meta name="description" content={`${config.site_introduction}`} />
        <link rel="icon" href={`${rootPath}/static/images/favicon.ico`} />
      </Head>
      <main>
        <AppBarWithTitle config={config} />
        <Container maxWidth="md">
          <IndexPage
            config={config}
            index={index}
            stared_posts={stared_posts}
            new_posts={new_posts}
          />
        </Container>
      </main>
      <footer>
        <Copyright config={config} />
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const config: ConfigJson = getConfigJson()
  const index: IndexJson = getIndexJson()
  const stared_posts: Article[] = getTagedArticles('star')
  const new_posts: Article[] = getAllArticles([
    'slug',
    'title',
    'posted_at',
    'tags',
  ]).slice(0, 6)

  return {
    props: { config, index, stared_posts, new_posts },
  }
}

export default Home
