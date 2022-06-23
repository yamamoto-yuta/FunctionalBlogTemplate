import { Avatar, Box, Grid, Typography } from "@mui/material"
import theme from "../lib/theme"
import { MarkdownRenderer } from "./MarkdownRenderer"

export const LineMessage = ( {avatarName, avatarImage, messages}: { avatarName: string, avatarImage: string, messages: {text: string, date: string}[]} ) => {
    return (
        <div>
            <LineBubble avatarName={avatarName} avatarImage={avatarImage} text={messages[0]['text']} date={messages[0]['date']} isFirst={true}/>
            {messages.slice(1,).map((d) => {
                return (
                    <LineBubble key={d['date']} avatarName={avatarName} avatarImage={avatarImage} text={d['text']} date={d['date']} isFirst={false}/>
                )
            })}
        </div>
    )
}

const LineAvatar = ({avatarName, avatarImage}: {avatarName: string, avatarImage: string}) => {
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
          <Typography variant='body2' fontSize={10.5} sx={{mt: -0.5}}>
            {avatarName}
          </Typography>
        </Grid>
      </Grid>
    )
}

const LineBubble = ({avatarName, avatarImage, text, date, isFirst}: {avatarName: string, avatarImage: string, text: string, date: string, isFirst: boolean}) => {
    let bubblePrefix = (<div/>)
    if (isFirst){
        bubblePrefix = (
            <div>
                <LineAvatar avatarName={avatarName} avatarImage={avatarImage}/>
                <Box sx={{width: 0, height: 0, ml: 4.3, mt: -2, mb: 0.8, borderStyle: 'solid', borderWidth: '10px 0px 0px 15px', borderColor: 'transparent transparent transparent #ffffff'}}/>
            </div>
        )
    }
    return (
        <Box sx={{mb: '1rem'}}>
        {bubblePrefix}
        <Grid container>
          <Grid item xs={10} sm={11}>
            <Box sx={{borderRadius: '16px', backgroundColor: theme.palette.background.paper, pl: 1.5, pr: 1.5, pt: 0.3, pb: 0.3, ml: '2rem', mt: -1.5, mb: 1, mr: '1rem', width: 'fit-content'}}>
                <MarkdownRenderer>
                    {text}
                </MarkdownRenderer>
            </Box>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Typography fontSize={11} sx={{}}>
              {date}
            </Typography>
          </Grid>
        </Grid>
        </Box>
    )
}
