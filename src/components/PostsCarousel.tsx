import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Box } from '@mui/material'
import { PostCard } from './PostCard'
import { Article } from '../lib/api/article'
import { ConfigJson } from '../lib/api/config'

SwiperCore.use([Pagination, Navigation, Autoplay])

export const PostsCarousel = ({ posts }: { posts: Article[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        600: {
          slidesPerView: 2,
        },
      }}
      navigation
      loop={true}
    >
      {posts.map((post: Article) => {
        return (
          <SwiperSlide key={`${post.slug}`}>
            <Box sx={{ mb: 3, mr: 1, ml: 1 }}>
              <PostCard
                slug={post.slug}
                title={post.title}
                tags={post.tags}
                posted_at={post.posted_at}
              />
            </Box>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
