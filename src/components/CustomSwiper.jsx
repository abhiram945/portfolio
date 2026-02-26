import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CustomSwiper = ({ imagesArray, location, auto = false }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={false}
        pagination={true}
        loop={true}
        autoplay={auto ? { delay: 3000, disableOnInteraction: false } : false}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="customSwiper w-full h-full"
      >
        {imagesArray.map((image, index) => (
          <SwiperSlide key={image + index} className="w-full h-full">
            <img
              loading="lazy"
              src={`/images/${location}/${image}.png`}
              alt={image}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomSwiper;
