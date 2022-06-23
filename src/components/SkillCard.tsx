import {
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { SkillData } from '../lib/api/fixed/profile'
import { rootPath } from '../lib/consts'
import { MarkdownRenderer } from './MarkdownRenderer'

const SkillCard = ({ skillData }: { skillData: SkillData }) => {
  return (
    <Card
      sx={{
        width: { xs: 160, sm: 180 },
        height: { xs: 270 },
        mb: '1rem',
        overflowY: 'auto',
      }}
    >
      <Grid container sx={{ mt: 1, mb: 1 }}>
        <Grid item xs={2.5} />
        <Grid item xs={7}>
          <CardMedia
            component="img"
            image={`${rootPath}${skillData['image_url']['path']}`}
          />
        </Grid>
        <Grid item xs={2.5} />
      </Grid>
      <CardContent sx={{ pt: 0, pl: '1rem', pr: '1rem', pb: 1 }}>
        <Typography
          gutterBottom
          fontSize={22}
          fontWeight="medium"
          align="center"
          component="div"
        >
          {skillData['title']}
        </Typography>
        <MarkdownRenderer>{skillData['description']}</MarkdownRenderer>
      </CardContent>
    </Card>
  )
}

export const SkillCardsSelector = ({
  skillTag,
  skillTags,
  handleChange,
}: {
  skillTag: string
  skillTags: string[]
  handleChange: any
}) => {
  return (
    <FormControl variant="standard" sx={{ mb: '1rem' }}>
      <Select
        labelId="skill-tag-label"
        id="skill-tag-label"
        value={skillTag}
        label="Tag"
        onChange={handleChange}
      >
        <MenuItem key="all" value="all">
          all
        </MenuItem>
        {skillTags.map((tag: string) => {
          return (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export const SkillCards = ({
  skillsDataList,
}: {
  skillsDataList: SkillData[]
}) => {
  return (
    <Grid container>
      {skillsDataList.map((data: SkillData) => {
        return (
          <Grid key={data.title} item xs={6} sm={4} md={3}>
            <SkillCard key={data.title} skillData={data} />
          </Grid>
        )
      })}
    </Grid>
  )
}
