import React from 'react';
import { motion } from 'framer-motion';


const About = () => {
    return (
        <div className='bg-[#F9F9F9]  pt-20 lg:pt-36 mb-10'>
            <motion.div
                className='flex flex-col justify-center items-center space-y-5'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1 className='dancing-font text-4xl font-bold' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    About Us
                </motion.h1>
                <motion.p className='text-center text-[#666666] md:w-8/12 w-11/12' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
                    Welcome to DineSphere
                    ! We are passionate about bringing you the finest food, drinks, and experiences that bring people together. Whether it’s for a special occasion or a casual night out, we promise to make it memorable.
                </motion.p>
                <motion.div 
                    className='bg-white shadow-lg p-8 rounded-lg w-10/12 md:w-7/12 mt-5'
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.5 }}
                >
                    <h2 className='text-3xl font-semibold mb-4 text-center'>Our Mission</h2>
                    <p className='text-[#666666]'>
                        Our mission is simple: to provide exceptional service, delicious food, and unforgettable memories for our guests. We believe in combining local ingredients with Mediterranean-inspired flavors to create an experience that’s both familiar and new.
                    </p>
                </motion.div>
                <motion.div 
                    className='bg-white shadow-lg p-8 rounded-lg w-10/12 md:w-7/12 mt-8'
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.8 }}
                >
                    <h2 className='text-3xl font-semibold mb-4 text-center'>Our Story</h2>
                    <p className='text-[#666666]'>
                    DineSphere was founded with the vision of creating a space where food and good company meet. Our founder, a passionate chef and traveler, wanted to share the diverse flavors of Mediterranean cuisine with the world, all while keeping the experience warm and inviting.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
