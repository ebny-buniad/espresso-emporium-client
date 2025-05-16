import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { BsPen } from "react-icons/bs";
import { Link } from 'react-router';

const CoffeeCard = ({ coffee }) => {

    const { _id, name, chef, price, photo } = coffee;

    return (
        <div>
            <div className='border flex items-center justify-around bg-glass p-3'>
                <img className='w-30 lg:w-60' src={photo} alt="" />
                <div className='space-y-3 lg:space-y-5'>
                    <p><span className='font-bold'>Name:</span> {name}</p>
                    <p><span className='font-bold'>Chef:</span> {chef}</p>
                    <p><span className='font-bold'>Price:</span> {price}</p>
                </div>
                <div className='flex flex-col lg:gap-5 gap-2'>
                    <Link to={`/coffee-details/${_id}`} className='btn'><FaRegEye /></Link>
                    <button className='btn'><BsPen /></button>
                    <button className='btn'><AiOutlineDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;