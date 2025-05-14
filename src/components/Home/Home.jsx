import React from 'react';
import Banner from './Banner/Banner';
import FeaturedDishes from './Featured Dishes/FeaturedDishes';
import ShowItem from './ShowItem/ShowItem';
import FoodMenus from './FoodMenus/FoodMenus';
import Reservation from './Reservation/Reservation';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reservation></Reservation>
            <FeaturedDishes></FeaturedDishes>
            <ShowItem></ShowItem>
            <FoodMenus></FoodMenus>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;