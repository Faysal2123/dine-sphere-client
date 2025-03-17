import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className='bg-[#F9F9F9] py-10'>
            {/* Header Section */}
            <motion.div
                className='flex flex-col justify-center items-center space-y-4'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className='dancing-font text-4xl font-bold'>Contact Us</h1>
                <p className='text-[#666666] text-center md:w-8/12 w-11/12'>
                    Have a question or want to make a reservation? Reach out to us and we'll be happy to assist you!
                </p>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
                className='bg-white shadow-lg p-8 rounded-lg w-10/12 md:w-6/12 mx-auto mt-8'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
            >
                <h2 className='text-3xl font-semibold text-center mb-6'>Get in Touch</h2>
                <form className='space-y-4'>
                    <div>
                        <label className='block text-gray-700 font-medium'>Your Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-medium'>Your Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-medium'>Your Message</label>
                        <textarea 
                            rows="4" 
                            placeholder="Write your message..." 
                            className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className='w-full bg-yellow-600 text-white font-bold py-2 rounded-md hover:bg-yellow-700 transition-all'
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
                className='mt-10 text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h3 className='text-xl font-semibold'>Our Location</h3>
                <p className='text-[#666666]'>123 Street Name, Dhaka, Bangladesh</p>
                <p className='text-[#666666]'>Phone: +880 1234 567 890</p>
                <p className='text-[#666666]'>Email: info@dineSphere.com</p>
            </motion.div>

            {/* Google Map Embed (Optional) */}
            <div className='mt-8 w-10/12 md:w-6/12 mx-auto'>
                <iframe 
                    className='w-full h-64 rounded-lg shadow-md' 
                    src="https://www.google.com/maps/embed?..." 
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
