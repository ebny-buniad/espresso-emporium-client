import React from 'react';
import { BsCupHot } from "react-icons/bs";
import { Link } from 'react-router';



const Products = () => {
    return (
        <div className='products-container h-[800px]'>
            <div className='my-10 text-center space-y-5'>
                <p>--- Sip & Savor ---</p>
                <h3 className='text-4xl font-semibold font-rancho'>Our Popular Products</h3>
                <Link to='/added-coffee/' className='flex items-center btn mx-auto w-36 bg-primary
                 border-black font-rancho font-thin text-xl text-white'>Added Coffee <BsCupHot /></Link>
            </div>
        </div>
    );
};

export default Products;