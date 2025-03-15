import React from 'react';
import Banner from './Banner/Banner';
import FeaturedDishes from './Featured Dishes/FeaturedDishes';
import ShowItem from './ShowItem/ShowItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedDishes></FeaturedDishes>
            <ShowItem></ShowItem>
        </div>
    );
};

export default Home;