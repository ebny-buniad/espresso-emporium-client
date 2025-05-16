import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { IoMdArrowBack } from "react-icons/io";
import Swal from 'sweetalert2';


const UpdateDetails = () => {
    const existingData = useLoaderData()
    const { name, chef, supplier, price, category, details, photo, _id } = existingData;

    const handelUpdateDetails = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updateDeatils = Object.fromEntries(formData);

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDeatils)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        position: "center-center",
                        icon: "success",
                        title: "Updated details successfully!",
                        showConfirmButton: false,
                        timer: 3000
                    });
                } else {
                    Swal.fire({
                        position: "center-center",
                        icon: "error",
                        title: "No Changes!",
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            })
    }

    return (
        <div className='max-w-4xl w-full bg-white p-10 rounded-md shadow-md mx-auto mt-10'>
            <Link to='/' className='flex items-center gap-2 font-rancho'> <IoMdArrowBack />Back to home</Link>
            <div>
                <h2 className="text-3xl text-center font-rancho font-bold text-[#374151] mb-4">
                    Update Existing Coffee Details
                </h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm leading-relaxed">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>

                <form onSubmit={handelUpdateDetails} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 font-semibold">Name</label>
                        <input
                            defaultValue={name}
                            name='name'
                            type="text"
                            placeholder="Enter coffee name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">Chef</label>
                        <input
                            defaultValue={chef}
                            name='chef'
                            type="text"
                            placeholder="Enter coffee chef"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">Supplier</label>
                        <input
                            defaultValue={supplier}
                            name='supplier'
                            type="text"
                            placeholder="Enter coffee supplier"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">Price</label>
                        <input
                            defaultValue={price}
                            name='price'
                            type="text"
                            placeholder="Enter coffee price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">Category</label>
                        <input
                            defaultValue={category}
                            name='category'
                            type="text"
                            placeholder="Enter coffee category"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">Details</label>
                        <input
                            defaultValue={details}
                            name='details'
                            type="text"
                            placeholder="Enter coffee details"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-2 font-semibold">Photo</label>
                        <input
                            defaultValue={photo}
                            name='photo'
                            type="text"
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#D2B48C] text-[#331A15] cursor-pointer w-full py-2 font-rancho px-6 rounded-md border border-[#331A15]"
                        >
                            Update Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDetails;