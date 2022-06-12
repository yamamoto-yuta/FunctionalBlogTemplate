import type { InferGetStaticPropsType, NextPage } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Posts: NextPage<Props> = () => {
    return <div/>
}

export const getStaticProps = async () => {
    return {
      props: { },
    }
}
  

export default Posts
