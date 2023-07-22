import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5070/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div className='bg-base-200'>
            <div className='md:mx-20 mx-8'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(rev =>
                            <SwiperSlide key={rev._id} rev={rev} className='py-10'>
                                <div className='relative py-10 cursor-pointer bg-white shadow-sm 
                                rounded-md h-[400px] hover:shadow-2xl duration-300 '>
                                    <div className='text-xs p-6'>
                                        <p className='text-center'>{rev.message}</p>
                                        <p className='font-bold mt-4 text-center'>{rev.category}</p>
                                        <div>
                                            <p>{rev.ratings}</p>

                                        </div>
                                        <hr />
                                        <p className='text-center mt-2'>{rev.name}</p>
                                        <p className='text-center'>{rev.email}</p>
                                    </div>
                                    <div className='absolute top-0 left-32 '>
                                        <img className='w-14 h-14 rounded-full text-center ' src={rev.image} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Review;