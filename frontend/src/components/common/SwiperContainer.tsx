import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SwiperContainer = ({ items }: any) => {
  return (
    <Swiper
      style={{ width: '100%', height: 300 }}
      slidesPerView={3}
      spaceBetween={20}
      autoHeight
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={true}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {items.map((item: any) => {
        return (
          <SwiperSlide style={{ height: 200, border: '1px solid blue', textAlign: 'center' }}>
            {item.content}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperContainer;
