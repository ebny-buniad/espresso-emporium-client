import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { BsPen } from "react-icons/bs";
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

    const { _id, name, chef, price, photo } = coffee;



    const handelDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div>
            <div className='border flex items-center justify-around bg-glass p-3'>
                <img className='w-30 lg:w-60' src={photo} alt="photo" />
                <div className='space-y-3 lg:space-y-5'>
                    <p><span className='font-bold'>Name:</span> {name}</p>
                    <p><span className='font-bold'>Chef:</span> {chef}</p>
                    <p><span className='font-bold'>Price:</span> {price}</p>
                </div>
                <div className='flex flex-col lg:gap-5 gap-2'>
                    <Link to={`/coffee-details/${_id}`} className='btn'><FaRegEye /></Link>
                    <Link to={`/update-details/${_id}`} className='btn'><BsPen /></Link>
                    <button onClick={() => handelDelete(_id)} className='btn'><AiOutlineDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;