import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { AppBarWithTitle } from '../components/AppBar'
import Copyright from '../components/Copylight'
import { IndexPage } from '../components/pages/IndexPage'
import { ConfigJson, getConfigJson } from '../lib/api/config'
import { IndexJson, getIndexJson } from '../lib/api/fixed/index'
import { rootPath } from '../lib/consts'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({
  config,
  index,
}: {
  config: ConfigJson
  index: IndexJson
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
        <IndexPage config={config} index={index} />
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
  return {
    props: { config, index },
  }
}

export default Home
