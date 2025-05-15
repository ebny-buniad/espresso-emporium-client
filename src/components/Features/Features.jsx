import React from 'react';
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'

const Features = () => {
    return (
        <div className='bg-[#edebe4]'>
            <div className='w-9/12 mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='space-y-3'>
                    <img className='w-10' src={icon1} alt="" />
                    <h4 className='font-rancho text-3xl'>Awesome Aroma</h4>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-3'>
                    <img className='w-10' src={icon2} alt="" />
                    <h4 className='font-rancho text-3xl'>High Quality</h4>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-3'>
                    <img className='w-10' src={icon3} alt="" />
                    <h4 className='font-rancho text-3xl'>Pure Grades</h4>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='space-y-3'>
                    <img className='w-10' src={icon4} alt="" />
                    <h4 className='font-rancho text-3xl'>Proper Roasting</h4>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Features;