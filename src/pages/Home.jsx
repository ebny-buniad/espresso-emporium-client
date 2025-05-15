import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Products from '../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <Products></Products>
        </div>
    );
};

export default Home;