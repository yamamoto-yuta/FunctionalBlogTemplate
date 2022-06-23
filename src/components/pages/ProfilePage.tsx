import { Avatar, Box, Grid, SelectChangeEvent, Typography } from '@mui/material'
import { useState } from 'react'
import { ConfigJson } from '../../lib/api/config'
import { ProfileJson } from '../../lib/api/fixed/profile'
import { AuthorIntroduction } from '../AuthorIntroduction'
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
      <MarkdownRenderer>
        {"## 作品"}
      </MarkdownRenderer>
      <WorksCardCarousel workDataList={worksData} />
    </div>
  )
}
