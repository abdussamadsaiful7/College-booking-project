import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const Admission = () => {
    return (
        <div className='md:p-14'>
            <h1 className='text-center font-serif font-semibold text-xl'>Unlock Your Success: Step into Greatness with Admission!</h1>
            <h1 className='text-center font-serif font-extrabold text-3xl text-blue-500 mb-2'>Admission Going on............</h1>
            <hr />
            <div className='md:flex items-center justify-between gap-6'>
                <div className='p-4'>
                    <p>Embark on Your Educational Journey: Secure Your Admission and Unlock a World of Opportunities! At listed Institution, we believe in nurturing bright minds and fostering academic excellence. Our admission process is designed to help you realize your potential and pave the way for a successful future. </p>

                    <p> Moreover, we understand the importance of financial support in pursuing your dreams. That's why we offer a range of scholarships and discounts to deserving students. Our scholarship programs are designed to recognize and reward exceptional talent, academic achievements, and community involvement.</p> <br />

                    <p> With our scholarship opportunities, you can turn your aspirations into reality, regardless of your financial background. We are committed to making quality education accessible to all, ensuring that no deserving student is left behind. Join us on this transformation journey, and together, let's build a brighter future for you and the world. Apply for admission today and explore the possibilities of shaping a promising tomorrow!"
                    </p>
                </div>
                <div>
                    <img src="https://i.ibb.co/rFyTVcc/picc.webp" alt="photo" />
                </div>
            </div>
            <div>
                <h1 className='text-xl font-serif font-semibold mb-4'>College List for Admission via EduPlus Admission Academy.</h1>
                <div className='md:flex items-center justify-between'>
                    <div className='md:w-1/2'>
                        <div className='flex flex-col gap-2 px-4'>
                            <Link to='/addForm' className='underline college-link' >Harmony University College</Link>
                            <Link to='/addForm' className='underline college-link' >TechHub Institute</Link>
                            <Link to='/addForm' className='underline college-link' >Creative Arts Academy</Link>
                            <Link to='/addForm' className='underline college-link' >UIBA Science & Technology University</Link>
                            <Link to='/addForm' className='underline college-link' >Business Management Institute</Link>
                            <Link to='/addForm' className='underline college-link' >Medical Sciences College</Link>
                            <Link to='/addForm' className='btn btn-xs btn-outline btn-primary w-20 my-10'>See more</Link>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://i.ibb.co/QpzW8pG/schoarl10.jpg" alt="photo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/4FhZDFX/scholar2.png" alt="photo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/BjxzyKL/scholar3.png" alt="photo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/3WQ0FcJ/scholar4.png" alt="photo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/D13KXdp/scholar5.jpg" alt="photo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/8rrnbyd/scholar6.png" alt="photo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/ftwfPbt/scholar8.jpg" alt="photo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/9ppqBs8/scholar9.png" alt="photo" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/zf8rq3H/sholar1.png" alt="photo" />
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Admission;