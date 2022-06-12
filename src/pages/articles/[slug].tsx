import type { InferGetStaticPropsType, NextPage } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post: NextPage<Props> = () => {
    return <div/>
}

export const getStaticPaths = async () => {
    return {
      paths: [],
      fallback: false,
    }
}


export const getStaticProps = async () => {
    return {
      props: { },
    }
}
  

export default Post
