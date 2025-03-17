import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import { GiAbstract040 } from 'react-icons/gi';

const Reservation = () => {
    return (
        <div className='bg-[#FFF1DC] md:p-10 p-5 pt-7 pb-11'>
            <motion.div 
                className='flex flex-col justify-center items-center space-y-3'
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
            >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                    <GiAbstract040 size={45} />
                </motion.div>
                <motion.h1 className='dancing-font text-4xl' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    Awebani experiences
                </motion.h1>
                <motion.h2 className='md:text-5xl text-3xl font-semibold' initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                    LAUGH, CELEBRATE, INVITE
                </motion.h2>
                <motion.h2 className='md:text-5xl text-3xl font-semibold' initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    YOURSELF
                </motion.h2>
                <motion.p className='text-[#666666] md:w-6/12 text-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
                    Whether you’re feeling peckish or hungry, whether it’s midday or midnight, our menu has something to satisfy every appetite. Mediterranean and Lille flavours blend together to offer you pleasures to share (or keep for yourself…).
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Reservation;