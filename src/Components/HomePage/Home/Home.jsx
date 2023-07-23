import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import pic1 from '../../../assets/pic1.png'
import pic2 from '../../../assets/pic2.png'
import pic3 from '../../../assets/pic3.png'
import pic4 from '../../../assets/pic4.jpg'
import pic6 from '../../../assets/pic6.png'
import pic7 from '../../../assets/pic7.png'
import pic8 from '../../../assets/pic8.png'
import pic9 from '../../../assets/pic9.png'
import pic10 from '../../../assets/pic10.png'
import pic11 from '../../../assets/banner3.jpg'
import Sponsor from '../Sponsor/Sponsor';
import CollegeGallery from '../CollegeGallery/CollegeGallery';
import Research from '../Research/Research';
import Review from '../Review/Review';
import AddReview from '../Review/AddReview';
import CollegeCard from '../CollegeCard/CollegeCard';
import { AuthContext } from '../../../providers/AuthProvider';


const Home = () => {
    const {user} =useContext(AuthContext);
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img className='w-full h-96' src={pic3} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic2} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic1} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic4} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic8} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic6} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic7} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic8} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic9} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic10} alt="photo" /> </SwiperSlide>
                <SwiperSlide> <img className='w-full h-96' src={pic11} alt="photo" /> </SwiperSlide>
            </Swiper>
            <CollegeCard/>
            <Sponsor/>
            <CollegeGallery/>
            <Research/>
            <Review/>
            {
                user?.email &&   <AddReview/> 
            }
        </div>
    );
};

export default Home;