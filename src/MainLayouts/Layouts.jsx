import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-)]'><Outlet></Outlet></div>
        </div>
    );
};

export default Layouts;