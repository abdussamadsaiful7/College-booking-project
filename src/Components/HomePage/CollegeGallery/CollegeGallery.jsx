import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const CollegeGallery = () => {
    return (
        <div className='md:mx-52 py-10'>
            <h1 className='text-center font-extrabold text-3xl mb-8'> Graduate's group pictures</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/XYJSksh/gra6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/8cwm1GC/gra2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/B3NYJHj/gra3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/XDBfKTZ/gra4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/pbQm8xP/gra5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/P56Pmxk/gra7.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/LSN7qGC/gra8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/C6WNPRd/gra9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96' src="https://i.ibb.co/m6ngmc4/gra10.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CollegeGallery;