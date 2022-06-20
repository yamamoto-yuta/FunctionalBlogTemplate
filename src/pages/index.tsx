import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Copyright from '../components/Copylight'
import { IndexPage } from '../components/pages/IndexPage'
import { ConfigJson, getConfigJson } from '../lib/api/config'
import { FixedJson as IndexJson, getJson as getIndexJson } from '../lib/api/fixed/index'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ config, index }: { config: ConfigJson, index: IndexJson }) => {
  return (
    <div>
      <Head>
        <title>{`${config.blog_title}`}</title>
        <meta name="description" content={`${config.site_introduction}`} />
        <link rel="icon" href={`${config.root_url}/static/favicon.ico`} />
      </Head>
      <main>
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
