import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.css';
const Imageslider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className='swiperContainer'>
            <SwiperSlide>
                <img src='images/ieee.png' alt='IEEE publication' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='images/coursera_ibm.png' alt='IBM certification on coursera' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='images/daa_codechef.png' alt='DAA_CodeChef' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='images/oracle.png' alt='oracle_DB foundations' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='images/MS-365-fundamentals.png' alt='MS 365 fundamentals' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='images/webdevelopment_internship.jpg' alt='webdevelopment internship' />
            </SwiperSlide>
        </Swiper>
    );
};

export default Imageslider;