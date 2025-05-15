import React from 'react';
import logo from '../../assets/images/more/logo1.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='w-9/12 mx-auto py-10 p-1 grid md:grid-cols-2 gap-5'>
                <div className='space-y-5'>
                    <img className='w-12' src={logo} alt="" />
                    <h3 className='text-3xl font-rancho'>Espresso Emporium</h3>
                    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <p>Follow Us</p>
                    <div className='flex gap-3'>
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <BsTwitterX />
                    </div>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-3xl font-rancho pb-5'>Contact with Us</h3>
                    <input type="text" placeholder="Enter Name" className="input w-full" />
                    <input type="email" placeholder="Enter Email" className="input w-full" />
                    <textarea className="textarea w-full" placeholder="Bio"></textarea>
                    <button className='btn rounded-full'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;