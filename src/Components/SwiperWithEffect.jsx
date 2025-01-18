import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const SwiperWithEffect = () => {


  return (
    <Swiper
    className='mt-5'
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="fade"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
    
      navigation={true}
      pagination={{
        clickable: true, // Allows users to click on pagination dots
        dynamicBullets: true, // Reduces pagination size for large numbers of bullets
      }}
      autoplay={{
        delay: 3000,       // Delay between slides in milliseconds
        disableOnInteraction: false, // Keeps autoplay running after user interaction
        pauseOnMouseEnter: true,     // Pauses autoplay when the mouse is over the slider
      }}
            loop={true}
    >
      <SwiperSlide>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae debitis magnam quae eos voluptatum sunt ab eum velit soluta fuga, esse neque aut odit unde minima fugiat, incidunt id.</SwiperSlide>
      <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae debitis magnam quae eos voluptatum sunt ab eum velit soluta fuga, esse neque aut odit unde minima fugiat, incidunt id.</SwiperSlide>
      <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae debitis magnam quae eos voluptatum sunt ab eum velit soluta fuga, esse neque aut odit unde minima fugiat, incidunt id.</SwiperSlide>
    </Swiper>
  );
};

export default SwiperWithEffect;
