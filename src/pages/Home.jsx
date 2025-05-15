import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Products from '../components/Products/Products';
import { useLoaderData } from 'react-router';
import MediaImg from '../components/MediaImg/MediaImg';

const Home = () => {

    const coffeesPromise = useLoaderData();

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