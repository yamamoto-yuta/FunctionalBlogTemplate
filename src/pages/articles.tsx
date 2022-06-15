import { Container } from '@mui/system'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Copyright from '../components/Copylight'
import { ArticlesList, getPage, getYear } from '../components/pages/ArticlesList'
import { Article, getAllArticles } from '../lib/api/article'
import { ConfigJson, getConfigJson } from '../lib/api/config'
import { getNow } from '../lib/datetime'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Posts: NextPage<Props> = ({
  posts,
  config,
  years,
}: {
  posts: Article[]
  config: ConfigJson
  years: string[]
}) => {
  const router = useRouter()
  let year = getYear(router)
  year = year? year: 'all'

  const now: string = getNow()
  posts = posts
  .filter((post) => post.posted_at <= now)
  .filter((post) => post.posted_at.slice(0,4) === year || year === 'all')
  return (
    <div>
      <Head>
        <title>{`記事一覧 | ${config.blog_title}`}</title>
        <meta
          name="description"
          content={`${config.blog_title} article list`}
        />
        <link rel="icon" href={`${config.root_url}/static/favicon.ico`} />
      </Head>
      <main>
        <Container maxWidth="md">
          <ArticlesList config={config} years={years} router={router} posts={posts} />
        </Container>
      </main>
      <footer>
        <Copyright config={config} />
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts: Article[] = getAllArticles(['slug', 'title', 'posted_at', 'tags'])
  const config: ConfigJson = getConfigJson()
  const years: string[] = Array.from(new Set(posts.map((post)=> {return post.posted_at.slice(0,4)})).values()).sort()
  return {
    props: {
      posts,
      config,
      years,
    },
  }
}

export default Posts
