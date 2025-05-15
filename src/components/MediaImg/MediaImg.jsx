import React from 'react';

import img1 from '../../assets/images/cups/Rectangle 9.png'
import img2 from '../../assets/images/cups/Rectangle 10.png'
import img3 from '../../assets/images/cups/Rectangle 11.png'
import img4 from '../../assets/images/cups/Rectangle 12.png'
import img5 from '../../assets/images/cups/Rectangle 13.png'
import img6 from '../../assets/images/cups/Rectangle 14.png'
import img7 from '../../assets/images/cups/Rectangle 15.png'
import img8 from '../../assets/images/cups/Rectangle 16.png'

const MediaImg = () => {
    return (
        <div className='lg:w-9/12 mx-auto my-10 text-center'>
            <p>Follow Us Now</p>
            <h3 className='font-rancho text-4xl'>Follow on Instagram</h3>

            <div className='grid md:grid-cols-4 gap-5 mt-10 p-1'>
                <img className='w-full' src={img1} alt="" />
                <img className='w-full' src={img2} alt="" />
                <img className='w-full' src={img3} alt="" />
                <img className='w-full' src={img4} alt="" />
                <img className='w-full' src={img5} alt="" />
                <img className='w-full' src={img6} alt="" />
                <img className='w-full' src={img7} alt="" />
                <img className='w-full' src={img8} alt="" />
            </div>
        </div>
    );
};

export default MediaImg;