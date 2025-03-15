import React from 'react';

import { GiCampCookingPot } from 'react-icons/gi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import './style.css'

const ShowItem = () => {
    return (
        <div className='bg-orange-100'>
            <div className='flex flex-col justify-center text-center items-center p-10'>
                 <GiCampCookingPot size={50}/>
                <h1 className='text-4xl font-semibold dancing-font text-xl pt-3'>To be truly original is to invent the future of food, to question, to experiment, to imagine</h1>
                <p className='flex items-center p-3 text-lg font-semibold'><span><IoIosArrowRoundForward size={40}/></span>WOLFGANG PUCK</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:w-8/12 lg:mx-auto mx-4 text-center pb-16'>
                <div>
                    <img className='lg:h-[450px] h-[350px] w-full object-cover rounded-xl'  src="/public/img/resim37.jpg" alt="" />
                    <h1 className='text-3xl font-semibold pt-5 pb-2'>Season drinks</h1>
                    <p className='dancing-font text-2xl font-semibold'>For every occasion</p>
                    <p className='text-base text-zinc-600 pt-5'>This board is dedicated to seasonal drinks from cozy cups of hot cocoa to refreshing glasses of sweet tea.</p>
                </div>
                <div><img  className='lg:h-[450px] h-[350px] w-full object-cover rounded-xl' src="/public/img/resim36.jpg" alt="" />
                <h1 className='text-3xl font-semibold pt-5 pb-2'>Seasonal food</h1>
                <p className='dancing-font text-2xl font-semibold'>Fresh ingredients</p>
                <p className='text-base text-zinc-600 pt-5'>A seasonal menu is a limited-time menu that offers foods and flavors that are in season. This includes fruits and vegetables...</p>
                </div>
                
                <div>
                    <img className='lg:h-[450px] h-[350px] w-full object-cover rounded-xl'  src="/public/img/tatlı1.jpg" alt="" />
                    <h1 className='text-3xl font-semibold pt-5 pb-2'>dessert food</h1>
                    <p className='dancing-font text-2xl font-semibold'>A refreshing treat</p>
                    <p className='text-base text-zinc-600 pt-5'>From classic comfort sweets to innovative indulgences, molten chocolate lava cakes, baklava, custard, the list goes on.</p>
                </div>
            </div>
        </div>
    );
};

export default ShowItem;