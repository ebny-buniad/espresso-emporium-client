import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='hero-bg h-[800px] text-white flex items-center justify-center'>
                <div className='md:w-[724px] text-center space-y-5'>
                    <h2 className='text-5xl font-rancho'>Would you like a Cup of Delicious Coffee?</h2>
                    <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn bg-primary font-rancho text-xl font-thin border-0 text-white'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;