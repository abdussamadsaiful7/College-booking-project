import React from 'react';
import Marquee from "react-fast-marquee";
import icon1 from '../../../assets/icon/icon1.png'
import icon2 from '../../../assets/icon/icon2.png'
import icon3 from '../../../assets/icon/icon3.png'
import icon4 from '../../../assets/icon/icon4.png'
import icon5 from '../../../assets/icon/icon5.png'
import icon6 from '../../../assets/icon/icon6.png'
import icon7 from '../../../assets/icon/icon7.png'
import icon8 from '../../../assets/icon/icon8.png'
import icon9 from '../../../assets/icon/icon9.png'

const Sponsor = () => {
    return (
        <div>
            <h1 className='text-center font-serif font-extrabold text-3xl'>Sponsor by</h1>
            <Marquee>
                <div className='grid grid-cols-9 gap-14 py-10'>
                    <img className='w-full h-20' src={icon1} alt="icon" />
                    <img className='w-full h-20' src={icon2} alt="icon" />
                    <img className='w-full h-20' src={icon3} alt="icon" />
                    <img className='w-full h-20' src={icon4} alt="icon" />
                    <img className='w-full h-20' src={icon5} alt="icon" />
                    <img className='w-full h-20' src={icon6} alt="icon" />
                    <img className='w-full h-20' src={icon7} alt="icon" />
                    <img className='w-full h-20' src={icon8} alt="icon" />
                    <img className='w-full h-20' src={icon9} alt="icon" />
                </div>

            </Marquee>
        </div>
    );
};

export default Sponsor;