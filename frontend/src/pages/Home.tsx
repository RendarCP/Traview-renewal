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
        <div>
          <Typography>배너 이미지 부분</Typography>
        </div>
        <SwiperContainer items={lists} />
      </div>
      <div>
        <div>
          <Typography>게시판</Typography>
        </div>
        <SwiperContainer items={lists} />
      </div>
    </MainPageLayout>
  );
}

export default Home;
