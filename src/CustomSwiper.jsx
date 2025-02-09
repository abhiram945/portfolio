import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const CustomSwiper=({imagesArray, location, auto=false})=>{
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={auto}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="customSwiper"
        style={{width:"100%", height:"100%"}}
      >
        {imagesArray.map((image,index)=><SwiperSlide key={image+index} style={{width:"100%", height:"100%"}}>
            <img src={`/images/${location}/${image}.png`} alt={image} style={{width:"100%", height:"100%", objectFit:"cover", verticalAlign:"middle"}}/>
        </SwiperSlide>)}
        
      </Swiper>
    </>
  )
}

export default CustomSwiper