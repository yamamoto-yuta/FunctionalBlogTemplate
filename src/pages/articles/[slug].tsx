import type { InferGetStaticPropsType, NextPage } from 'next'
import { Article, getAllArticles, getArticleBySlug } from '../../lib/api/article'
import { ConfigJson, getConfigJson } from '../../lib/api/config'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post: NextPage<Props> = ({
        post,
        config,
    }: {
        post: Article,
        config: ConfigJson,
    }) => {
    return (
        <div/>
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
