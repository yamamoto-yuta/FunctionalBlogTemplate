import type { InferGetStaticPropsType, NextPage } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Tags: NextPage<Props> = () => {
    return <div/>
}

export const getStaticProps = async () => {
    return {
      props: { },
    }
}
  

export default Tags
