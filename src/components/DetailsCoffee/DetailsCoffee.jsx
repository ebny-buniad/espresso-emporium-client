import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { IoMdArrowBack } from "react-icons/io";

const DetailsCoffee = () => {
    const coffeeDetails = useLoaderData();
    // console.log(coffeeDetails);
    const { name, chef, supplier, price, category, details, photo } = coffeeDetails;
    return (
        <div>
            <div className='lg:w-9/12 mx-auto my-10 p-1'>
                <Link to='/' className='flex items-center gap-2 font-rancho mb-5'> <IoMdArrowBack />Back to home</Link>

                <div className='md:flex items-center justify-around xl:w-9/12 mx-auto p-1 bg-base-200 rounded-2xl'>
                    <img className='w-72 max-sm:mx-auto' src={photo} alt="" />
                    <div className='space-y-2 md:border-l p-3'>
                        <h2 className='font-rancho text-3xl mb-5'>Niceties</h2>
                        <p><span className='font-bold'>Name:</span> {name}</p>
                        <p><span className='font-bold'>Chef:</span> {chef}</p>
                        <p><span className='font-bold'>Supplier:</span> {supplier}</p>
                        <p><span className='font-bold'>Price:</span> {price}</p>
                        <p><span className='font-bold'>Category:</span> {category}</p>
                        <p><span className='font-bold'>Details:</span> {details}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailsCoffee;