// components/NavBar.tsx
import React from 'react';
import { FaBell, FaCog, FaMoon, FaSearch, FaUserCircle } from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 fixed top-0 left-0 right-0 ml-64 z-10 bg-white shadow-md">
      <h1 className="text-2xl font-semibold">WELCOME!</h1>
      <div className="flex items-center w-96 bg-gray-100 px-5 py-3 rounded-full">
          <FaSearch className="text-gray-700" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 text-gray-700 outline-none ml-3 text-sm"
          />
        </div>
      <div className="flex tems-center">
        <div className="flex items-center space-x-5">
          <div className="relative cursor-pointer">
            <FaBell className="text-black text-2xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </div>
          <FaCog className="text-black text-2xl cursor-pointer" />
          <FaUserCircle className="text-black cursor-pointer text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
