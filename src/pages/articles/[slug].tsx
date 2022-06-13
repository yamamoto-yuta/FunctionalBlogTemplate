import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Copyright from '../../components/Copylight'
import { ArticlePage } from '../../components/pages/ArticlePage'
import {
  Article,
  getAllArticles,
  getArticleBySlug,
} from '../../lib/api/article'
import { ConfigJson, getConfigJson } from '../../lib/api/config'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post: NextPage<Props> = ({
  post,
  config,
}: {
  post: Article
  config: ConfigJson
}) => {
  return (
    <div>
    <Head>
      <title>{`${post.title} | ${config.blog_title}`}</title>
      <meta name="description" content={`${post.description}`} />
      <link rel="icon" href={`${config.root_url}/static/favicon.ico`} />
      <meta property='og:title' content={`${post.title} | ${config.blog_title}`}/>
      <meta property='og:description' content={post.description}/>
        <meta property="og:image" content={`${config.root_url}/static/images/thumbnail/${post.slug}.jpg`} />
        <meta property="og:type" content="article"/>
        <meta property="og:site_name" content={config.blog_title}/>
        <meta property="og:url" content={`${config.root_url}/article/${post.slug}`}/>
        <meta name="twitter:image" content={`${config.root_url}/static/images/thumbnail/${post.slug}.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <main>
      <ArticlePage config={config} post={post}/>
    </main>
    <footer>
      <Copyright config={config} />
    </footer>
  </div>
  )
}

export const getStaticPaths = async () => {
  const posts = getAllArticles(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const post = await getArticleBySlug(params.slug, [
    'slug',
    'title',
    'posted_at',
    'updated_at',
    'content',
    'tags',
    'description',
  ])
  const config = getConfigJson()
  //const metadata = getResourcesJson()
  const allPosts = getAllArticles(['slug', 'title', 'posted_at', 'tags'])
  // const posts = postsToMap(allPosts)
  // const relatedSlugs = getRelatedJson()[post.slug]
  // const relatedPosts = relatedSlugs.map((slug) => {return posts[slug]})
  return {
    props: {
      post,
      config,
      // posts,
      // metadata,
      // relatedPosts,
    },
  }
}

export default Post
