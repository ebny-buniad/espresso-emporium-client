import React from 'react';
import logo from '../../assets/images/more/logo1.png'

const Header = () => {
    return (
        <div>
            <header>
                <h3 className='text-3xl font-rancho text-white flex items-center justify-center gap-2 py-3 nav-bg'>
                    <span><img className='w-8' src={logo} alt="" /></span>Espresso Emporium</h3>
            </header>
        </div>
    );
};

export default Header;