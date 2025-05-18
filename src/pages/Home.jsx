import React, { use } from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Products from '../components/Products/Products';
import { useLoaderData } from 'react-router';
import MediaImg from '../components/MediaImg/MediaImg';
import AuthContext from '../AuthContext/AuthContext';

const Home = () => {

    const coffeesPromise = useLoaderData();

    const data = use(AuthContext)
    console.log(data)

    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <Products coffeesPromise={coffeesPromise}></Products>
            <MediaImg></MediaImg>
        </div>
    );
};

export default Home;