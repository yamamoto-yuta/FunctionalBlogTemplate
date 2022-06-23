import { Container } from '@mui/material'
import { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Copyright from '../components/Copylight'
import { ProfilePage } from '../components/pages/ProfilePage'
import { ConfigJson, getConfigJson } from '../lib/api/config'
import { getProfileJson, ProfileJson } from '../lib/api/fixed/profile'
import { rootPath } from '../lib/consts'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Profile: NextPage<Props> = ({
  config,
  profile,
  skillTags,
}: {
  config: ConfigJson
  profile: ProfileJson
  skillTags: string[]
}) => {
  return (
    <div>
      <Head>
        <title>{`Profile | ${config.blog_title}`}</title>
        <meta
          name="description"
          content={`${config.author_name}の自己紹介です．`}
        />
        <link rel="icon" href={`${rootPath}/static/images/favicon.ico`} />
      </Head>
      <main>
        <Container maxWidth="md">
          <ProfilePage
            config={config}
            profile={profile}
            skillTags={skillTags}
          />
        </Container>
      </main>
      <footer>
        <Copyright config={config} />
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const config: ConfigJson = getConfigJson()
  const profile: ProfileJson = getProfileJson()
  let skillTags: string[] = []
  profile.skills_data.forEach((data) => {
    skillTags = [...skillTags, ...data.tags]
  })
  // 重複するタグを消す
  skillTags = skillTags.filter(
    (element, index, self) => self.findIndex((e) => e === element) === index,
  )

  return {
    props: {
      config,
      profile,
      skillTags,
    },
  }
}

export default Profile
