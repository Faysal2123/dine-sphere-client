import React from 'react';
import './style.css';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='relative'>
            <img src="/img/resim29.jpg" className='w-full lg:h-[600px] h-[350px] object-cover bg-center bg-no-repeat bg-fixed' alt="Banner" />
            
            {/* Overlay Content */}
            <div className='absolute lg:top-1/2 top-40 lg:left-1/2 left-1/2 mx-auto transform -translate-x-1/2 -translate-y-1/2 text-center w-full overlay-bg lg:p-14 p-6'>
                <h1 className='lg:text-7xl text-3xl font-extrabold text-white'>
                    Savor Every Moment at DineSphere!
                </h1>
                <p className='lg:text-xl text-sm font-semibold text-white md:mt-4 mt-2 mx-6'>
                    A place where every plate of sushi becomes a real work of art that you can enjoy on your lips.
                </p>
                <div className='lg:mt-6 mt-3 flex justify-center'>
                    <button className='bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition font-bold flex items-center gap-2' >
                        Explore Our Menu<span><FaArrowRight /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
