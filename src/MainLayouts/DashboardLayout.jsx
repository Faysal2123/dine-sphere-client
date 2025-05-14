import React from 'react';
import SideBar from '../pages/Dashboard/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className=' relative min-h-screen md:flex bg-white'>
            <div className=' '>
                <SideBar ></SideBar>
            </div>
            <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          
          <Outlet />
        </div>
      </div>
        </div>
    );
};

export default DashboardLayout;