import React, { useContext } from "react";
import { IoMdRestaurant } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();  // Get the current location
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  // Check if the current location is the Dashboard page
  if (location.pathname === "/dashboard") {
    return null; // Hide Navbar when on the Dashboard page
  }

  return (
    <div className="bg-neutral-600">
      <div className="lg:w-11/12 mx-auto">
        <div className="navbar fixed top-0 left-0 right-0 z-50 glass">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu  menu-lg dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2  shadow-2xl font-semibold space-y-1 "
              >
                <li className="text-lg">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <a className="text-3xl lg:text-4xl font-extrabold">
                <span className="text-zinc-400"> Dine</span>
                <span className="text-orange-500">Sphere</span>
              </a>
              <IoMdRestaurant size={40} className="text-orange-500" />
            </div>
          </div>

          {/* Navbar Center for Desktop */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Navbar End (Profile) */}
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <CgProfile size={40} />
                </div>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
              >
                <li>
                  <a className="justify-between">
                    <span className="font-semibold">USER</span>: <span className="text-base">{user?.displayName}</span>
                  </a>
                </li>
                <li>
                  <Link to='/dashboard' className="mb-2 btn btn-soft mt-3">Dashboard<MdDashboard /></Link>
                </li>
                <div>
                  {user?.email ? (
                    <button
                      onClick={handleLogOut}
                      className="btn btn-error w-full"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link className="btn btn-accent w-full mt-3" to="/login">
                      Login
                    </Link>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
