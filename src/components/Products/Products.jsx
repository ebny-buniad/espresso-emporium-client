import React, { useState } from 'react';
import { BsCupHot } from "react-icons/bs";
import { Link } from 'react-router';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

const Products = ({ coffeesPromise }) => {

    const initialCoffees = coffeesPromise;

    const [coffees, setCoffees] = useState(initialCoffees);

    // console.log(initialCoffees)

    return (
        <div className='products-container h-auto pb-10'>
            <div className='my-10 text-center space-y-5'>
                <p>--- Sip & Savor ---</p>
                <h3 className='text-4xl font-semibold font-rancho'>Our Popular Products</h3>
                <Link to='/added-coffee/' className='flex items-center btn mx-auto w-36 bg-primary
                 border-black font-rancho font-thin text-xl text-white'>Added Coffee <BsCupHot /></Link>
            </div>

            <div className='lg:w-9/12 mx-auto grid md:grid-cols-2 lg:gap-5 gap-2 p-1'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Products;