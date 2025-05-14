import React, { useContext, useState } from "react";
import { BsGraphUp, BsHouseDoor, BsPeople } from "react-icons/bs";
import { AiOutlineHome, AiOutlineBars } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { IoMdMenu } from "react-icons/io";
import { TiContacts } from "react-icons/ti";

const SideBar = () => {
  const { logOut, userRole } = useContext(AuthContext); // Get userRole from 
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setActive(false);
    }
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden p-4 shadow-md">
        <Link to="/">
          <img
            src="https://i.ibb.co.com/K1PJGfx/restaurant.png"
            alt="logo"
            width="60"
            height="80"
          />
        </Link>
        <button onClick={handleToggle} className="p-2 text-gray-700 hover:bg-gray-200 rounded-md">
          <AiOutlineBars className="h-8 w-8" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between bg-gray-100 w-64 space-y-6 px-4 py-6 absolute inset-y-0 left-0 transform ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto">
          <Link to="/">
            <img
              src="https://i.ibb.co.com/K1PJGfx/restaurant.png"
              alt="logo"
              width="90"
              height="90"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="pt-10">
            {/* For Admin only */}
            {userRole === "admin" && (
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-lime-200 rounded-lg transition"
                onClick={handleCloseSidebar}
              >
                <BsGraphUp className="w-5 h-5 text-lime-600" />
                <span className="ml-3 font-medium">Statistics</span>
              </Link>
            )}

            {/* For Admin */}
            {userRole === "admin" && (
              <>
                <Link
                  to="/admin/users"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-lime-200 rounded-lg transition"
                  onClick={handleCloseSidebar}
                >
                  <BsPeople className="w-5 h-5 text-lime-600" />
                  <span className="ml-3 font-medium">Manage Users</span>
                </Link>

                <Link
                  to="/admin/orders"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-lime-200 rounded-lg transition"
                  onClick={handleCloseSidebar}
                >
                  <BsGraphUp className="w-5 h-5 text-lime-600" />
                  <span className="ml-3 font-medium">Manage Orders</span>
                </Link>
                <Link
          to="/"
          className="flex items-center px-4 py-3 text-gray-700 hover:bg-lime-200 rounded-lg transition mt-auto"
          onClick={handleCloseSidebar}
        >
          <AiOutlineHome className="w-5 h-5 text-lime-600" />
          <span className="ml-3 font-medium">Home</span>
        </Link>
              </>
            )}

            {/* For Customer */}
            {/* {userRole === "customer" && ( */}
              <>
                <Link
                  to="/dashboard/orders"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-lime-200 rounded-lg transition"
                  onClick={handleCloseSidebar}
                >
                  <BsGraphUp className="w-5 h-5 text-lime-600" />
                  <span className="ml-3 font-medium">Order History</span>
                </Link>
                <Link
          to="/"
          className="flex items-center px-4 py-3 text-gray-700 hover:bg-lime-200 rounded-lg transition mt-auto"
          onClick={handleCloseSidebar}
        >
          <AiOutlineHome className="w-5 h-5 text-lime-600" />
          <span className="ml-3 font-medium">Home</span>
        </Link>
                <Link
          to="/menu"
          className="flex items-center px-4 py-3 text-gray-700 hover:bg-lime-200 rounded-lg transition mt-auto"
          onClick={handleCloseSidebar}
        >
          <IoMdMenu className="w-5 h-5 text-lime-600" />
          <span className="ml-3 font-medium">Menu</span>
        </Link>
                <Link
          to="/contact"
          className="flex items-center px-4 py-3 text-gray-700 hover:bg-lime-200 rounded-lg transition mt-auto"
          onClick={handleCloseSidebar}
        >
          <TiContacts className="w-5 h-5 text-lime-600" />
          <span className="ml-3 font-medium">Contact</span>
        </Link>
              </>
            {/* )} */}
          </nav>
          
          
        </div>

        <div>
          <hr className="border-gray-300 my-4" />
          <button className="flex items-center px-4 py-3 w-full text-gray-700 hover:bg-lime-200 rounded-lg transition">
            <FcSettings className="w-6 h-6" />
            <span className="ml-3 font-medium">Settings</span>
          </button>

          <button
            onClick={logOut}
            className="flex items-center px-4 py-3 mt-3 w-full text-gray-700 hover:bg-red-200 rounded-lg transition"
          >
            <GrLogout className="w-5 h-5 text-red-600" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>

        {/* Home button will always be at the bottom */}
      
      </div>

      {isActive && (
        <button
          onClick={handleToggle}
          className="fixed bottom-4 left-4 bg-gray-800 text-white p-3 rounded-full md:hidden"
        >
          <AiOutlineBars className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default SideBar;
