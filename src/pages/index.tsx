import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { ConfigJson, getConfigJson } from '../lib/api/config'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ config }: { config: ConfigJson }) => {
    return (
        <div>
            <Head>
                <title>{`${config.blog_title}`}</title>
                <meta name="description" content={`${config.site_introduction.slice(0, 100)}`} />
                <link rel="icon" href={`${config.root_url}/static/favicon.ico`} />
            </Head>
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
