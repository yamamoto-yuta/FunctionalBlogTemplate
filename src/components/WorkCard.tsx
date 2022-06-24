import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { WorkData } from '../lib/api/fixed/profile'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import { rootPath } from '../lib/consts'
import { MarkdownRenderer } from './MarkdownRenderer'
import 'swiper/css/bundle'
import { scrollBarStyle } from './ScrollBar'

SwiperCore.use([Pagination, Navigation])

const WorksCard = ({ workData }: { workData: WorkData }) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 250 },
        mb: '1rem',
      }}
    >
      <Grid container sx={{ mt: 1, mb: 1 }}>
        <Grid item xs={4} sm={3} />
        <Grid item xs={4} sm={6}>
          <Button
            href={workData.url}
            target="_blank"
            rel="noopener"
            sx={{ width: '100%' }}
          >
            <CardMedia
              component="img"
              image={`${rootPath}${workData['image_url']['path']}`}
            />
          </Button>
        </Grid>
        <Grid item xs={4} sm={3} />
      </Grid>

      <Typography
        gutterBottom
        fontSize={22}
        fontWeight="medium"
        align="center"
        component="div"
        sx={{ height: 70 }}
      >
        <Link
          variant="h3"
          href={workData.url}
          target="_blank"
          rel="noopener"
          color="inherit"
          underline="hover"
          fontWeight="bold"
        >
          {workData['title']}
        </Link>
      </Typography>
      <Box
        sx={{ overflowY: 'auto', height: { xs: 200, sm: 250 } }}
        css={scrollBarStyle}
      >
        <Box sx={{ mr: '0.5rem', ml: '0.5rem', mb: '1rem' }}>
          <MarkdownRenderer>{workData['description']}</MarkdownRenderer>
        </Box>
      </Box>
    </Card>
  )
}

export const WorksCardCarousel = ({
  workDataList,
}: {
  workDataList: WorkData[]
}) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        600: {
          slidesPerView: 2,
        },
        820: {
          slidesPerView: 3,
        },
      }}
      navigation
      loop={true}
    >
      {workDataList.map((data: WorkData) => {
        return (
          <SwiperSlide key={`${data.title}`}>
            <Grid container>
              <Grid item xs={1.2} sm={0} />
              <Grid item xs={9.6} sm={12}>
                <WorksCard workData={data} />
              </Grid>
              <Grid item xs={1.2} sm={0} />
            </Grid>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
