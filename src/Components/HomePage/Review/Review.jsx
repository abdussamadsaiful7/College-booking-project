import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div>
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
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                    </div>
                </SwiperSlide>
                <SwiperSlide><div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore, aliquam labore similique tempore ab voluptas nisi sapiente! Sint exercitationem iusto similique expedita. Unde, quae, beatae id, tempora maiores corrupti facilis non ratione qui aperiam vero architecto? Quod, ipsa voluptate?
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Review;