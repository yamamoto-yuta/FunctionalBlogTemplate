import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { WorkData } from '../lib/api/fixed/profile'
import {
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

SwiperCore.use([Pagination, Navigation])

const WorksCard = ({ workData }: { workData: WorkData }) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 250 },
        height: { xs: 400, sm: 450 },
        mb: '1rem',
        overflowY: 'auto',
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
      <CardContent sx={{ pt: 0, pl: '1rem', pr: '1rem', pb: 1 }}>
        <Typography
          gutterBottom
          fontSize={22}
          fontWeight="medium"
          align="center"
          component="div"
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
        <MarkdownRenderer>{workData['description']}</MarkdownRenderer>
      </CardContent>
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
