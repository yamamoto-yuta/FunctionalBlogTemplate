import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Copyright from '../components/Copylight'
import { IndexPage } from '../components/IndexPage'
import { ConfigJson, getConfigJson } from '../lib/api/config'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ config }: { config: ConfigJson }) => {
    return (
        <div>
            <Head>
                <title>{`${config.blog_title}`}</title>
                <meta name="description" content={`${config.site_introduction}`} />
                <link rel="icon" href={`${config.root_url}/static/favicon.ico`} />
            </Head>
            <main>
                <IndexPage config={ config }/>
            </main>
            <footer>
                <Copyright config={config} />
            </footer>
        </div>
    )
}

export const getStaticProps = async () => {
    const config: ConfigJson = getConfigJson()
    return {
      props: { config },
    }
}

export default Home
