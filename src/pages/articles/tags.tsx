import { Container } from '@mui/material'
import type { InferGetStaticPropsType, NextPage } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { TagsList } from '../../components/pages/TagsList'
import { ConfigJson, getConfigJson } from '../../lib/api/config'
import { getAllTags, Tag } from '../../lib/api/tags'
import { rootPath } from '../../lib/consts'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Tags: NextPage<Props> = ({
  tags,
  config,
}: {
  tags: Tag[]
  config: ConfigJson
}) => {
  const router = useRouter()
  if (!router.isFallback && !tags) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      <Head>
        <title>{`Tags | ${config.blog_title}`}</title>
        <meta name="description" content={`${config.blog_title} tag list`} />
        <link rel="icon" href={`${rootPath}/static/images/favicon.ico`} />
      </Head>
      <main>
        <Container maxWidth="md">
          <TagsList config={config} tags={tags} />
        </Container>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const tags: Tag[] = getAllTags()
  const config: ConfigJson = getConfigJson()
  return {
    props: {
      tags,
      config,
    },
  }
}

export default Tags
