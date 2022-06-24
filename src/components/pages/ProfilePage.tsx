import { Box, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import { ConfigJson } from '../../lib/api/config'
import { ProfileJson } from '../../lib/api/fixed/profile'
import { rootPath } from '../../lib/consts'
import { AuthorIntroduction } from '../AuthorIntroduction'
import { LineMessage } from '../LineMessage'
import { MarkdownRenderer } from '../MarkdownRenderer'
import { SkillCards, SkillCardsSelector } from '../SkillCard'
import { WorksCardCarousel } from '../WorkCard'

export const ProfilePage = ({
  config,
  profile,
  skillTags,
}: {
  config: ConfigJson
  profile: ProfileJson
  skillTags: string[]
}) => {
  const [skillTag, setSkillTag] = useState(skillTags[0])
  const handleChange = (event: SelectChangeEvent) => {
    setSkillTag(event.target.value as string)
  }
  const skillsData = profile.skills_data.filter(
    (data) => data.tags.includes(skillTag) || skillTag === 'all',
  )
  const worksData = profile.works_data

  return (
    <div>
      <AuthorIntroduction config={config} profile={profile} />

      <MarkdownRenderer>{'## スキル'}</MarkdownRenderer>
      <SkillCardsSelector
        skillTag={skillTag}
        skillTags={skillTags}
        handleChange={handleChange}
      />
      <SkillCards skillsDataList={skillsData} />

      <MarkdownRenderer>{'## 作品'}</MarkdownRenderer>
      <WorksCardCarousel workDataList={worksData} />

      <MarkdownRenderer>{'## これまでの活動'}</MarkdownRenderer>
      <Box sx={{ ml: { sm: '3rem', xs: 0 }, mr: { sm: '1rem', xs: 0 } }}>
        <LineMessage
          avatarName={config.author_name}
          avatarImage={`${rootPath}/${config.avatar_image_url.path}`}
          messages={profile.time_line}
        />
      </Box>
    </div>
  )
}
