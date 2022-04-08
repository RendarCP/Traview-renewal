import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import MainPageLayout from '../layouts/MainPageLayout';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import SwiperContainer from '../components/common/SwiperContainer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Test = styled(SwiperSlide)`
  border: 1px solid blue;
  height: 300px;
`;

function Home() {
  const lists = [
    {
      title: 'test1',
      content: 'test1',
    },
    {
      title: 'test2',
      content: 'test2',
    },
    {
      title: 'test3',
      content: 'test3',
    },
    {
      title: 'test4',
      content: 'test4',
    },
  ];
  return (
    <MainPageLayout>
      <div>
        <Typography>tests</Typography>
      </div>
      {/* <div style={{ height: '100%' }}>
        <Swiper
          style={{ height: 300 }}
          slidesPerView={2}
          spaceBetween={30}
          autoHeight
          height={300}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div> */}
      <SwiperContainer items={lists} />
    </MainPageLayout>
  );
}

export default Home;
