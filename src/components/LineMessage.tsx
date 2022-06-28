import { Avatar, Box, Grid, Typography } from '@mui/material'
import theme from '../lib/theme'
import { MarkdownRenderer } from './MarkdownRenderer'
import { hex2hsl, hsl2hex, setHsl } from '../lib/colorHsl'

export const LineMessage = ({
  avatarName,
  avatarImage,
  messages,
}: {
  avatarName: string
  avatarImage: string
  messages: { text: string; date: string }[]
}) => {
  let year: string = messages[0]['date'].slice(0, 5)
  let isNewYear: boolean = false
  return (
    <div>
      <YearText year={year} />
      <LineBubble
        avatarName={avatarName}
        avatarImage={avatarImage}
        text={messages[0]['text']}
        date={messages[0]['date']}
        isFirst={true}
      />
      {messages.slice(1).map((d) => {
        if (year !== d['date'].slice(0, 5)) {
          year = d['date'].slice(0, 5)
          isNewYear = true
        } else {
          isNewYear = false
        }
        return (
          <div>
            {isNewYear ? <YearText year={year} key={year}/> : ''}
            <LineBubble
              key={d['date']}
              avatarName={avatarName}
              avatarImage={avatarImage}
              text={d['text']}
              date={d['date']}
              isFirst={false}
            />
          </div>
        )
      })}
    </div>
  )
}

const YearText = ({ year }: { year: string }) => {
  return (
    <Grid container sx={{ mb: 1 }}>
      <Grid item md={5.5} sm={5.3} xs={5} />
      <Grid item md={1} sm={1.4} xs={2}>
        <Typography
          fontSize={12}
          align="center"
          sx={{
            borderRadius: '16px',
            backgroundColor: `#${hsl2hex(
              setHsl(hex2hsl(theme.palette.background.default.slice(1, 7)), {
                h: undefined,
                s: undefined,
                l: 65,
              }),
            )}`,
            color: '#ffffff',
            p: '1px',
          }}
        >
          {year}
        </Typography>
      </Grid>
      <Grid item md={5.5} sm={5.3} xs={5} />
    </Grid>
  )
}

const LineAvatar = ({
  avatarName,
  avatarImage,
}: {
  avatarName: string
  avatarImage: string
}) => {
  return (
    <Grid container>
      <Grid item xs={1.2} sm={0.8} md={0.6}>
        <Avatar
          alt={avatarName}
          src={avatarImage}
          sx={{ width: 24, height: 24, mb: 1, ml: 1 }}
        />
      </Grid>
      <Grid item xs={10.8} sm={11.2} md={10.4}>
        <Typography variant="body2" fontSize={10.5} sx={{ mt: -0.5 }}>
          {avatarName}
        </Typography>
      </Grid>
    </Grid>
  )
}

const LineBubble = ({
  avatarName,
  avatarImage,
  text,
  date,
  isFirst,
}: {
  avatarName: string
  avatarImage: string
  text: string
  date: string
  isFirst: boolean
}) => {
  let bubblePrefix = <div />
  if (isFirst) {
    bubblePrefix = (
      <div>
        <LineAvatar avatarName={avatarName} avatarImage={avatarImage} />
        <Box
          sx={{
            width: 0,
            height: 0,
            ml: 4.8,
            mt: -2.5,
            mb: -0.8,
            borderStyle: 'solid',
            borderWidth: '10px 0px 0px 15px',
            borderColor: 'transparent transparent transparent #ffffff',
          }}
        />
      </div>
    )
  }
  return (
    <Box sx={{ mb: 1 }}>
      {bubblePrefix}
      <Grid container>
        <Grid item xs={10} sm={11}>
          <Box
            sx={{
              borderRadius: '16px',
              backgroundColor: theme.palette.background.paper,
              pl: 1.5,
              pr: 1.5,
              pt: 0.3,
              pb: 0.3,
              ml: 4.4,
              mt: 0,
              mb: 0,
              mr: 4.4,
              width: 'fit-content',
            }}
          >
            <MarkdownRenderer>{text}</MarkdownRenderer>
          </Box>
        </Grid>
        <Grid item xs={2} sm={1}>
          <Typography fontSize={11}>{date}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
