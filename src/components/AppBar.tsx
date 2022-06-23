import { AppBar as MuiAppBar, Box, Container, Grid, Slide, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import Link from "next/link"
import { ConfigJson } from "../lib/api/config"
import theme from "../lib/theme"
import SideBar from "./SideBar"

interface Props {
    children: React.ReactElement
  }
  
const HideOnScroll = (props: Props) => {
    const { children } = props
    const trigger = useScrollTrigger({
      target: undefined,
    })
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
  }
  
  export const AppBar = (props: Props) => {
    const { children } = props
    return (
        <div>
        <HideOnScroll>
          <MuiAppBar color='inherit' sx={{backgroundColor: theme.palette.background.default}} elevation={0}>
            <Container maxWidth="md">{children}</Container>
          </MuiAppBar>
        </HideOnScroll>
        </div>
    )
  }
  
  export const AppBarWithTitle = ({
    config,
    slug,
  }: {
    config: ConfigJson
    slug?: string
  }) => {
    return (
        <div>
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <SideBar config={config} slug={slug} />
            </Grid>
            <Grid item xs={10}>
            <Link href='/' passHref>
                <Typography
                    variant="h3"
                    component='a'
                    display="inline"
                    color="inherit"
                    sx={{ textDecoration: 'none', boxShadow: 'none' }}
                >
                    {config.blog_title}
                </Typography>
                </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box sx={{m: '6rem'}}/>
      </div>
    )
  }
  