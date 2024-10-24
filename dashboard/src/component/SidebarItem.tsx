import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
interface SidebarItemProps{
    label: string;
    icon: React.ReactNode;
    subItems?: {label: string; path: string}[];
    path?: string;
    isActive: boolean;
    onClick: ()=> void;
    isOpen: boolean;
}

const SidebarItem:React.FC<SidebarItemProps> = ({label, icon, subItems, path, isActive, onClick, isOpen}) => {
    const navigate = useNavigate()
  return (
    <div>
    <button
      className={`flex items-center justify-between w-full px-4 py-3 mt-1 rounded transition-all ${
        isActive ? 'text-orange-500 border-l-4 border-orange-500 bg-gray-700' : 'text-gray-200 hover:bg-gray-700'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        {/* <span className="mr-3">{icon}</span> */}
        <span className="text-lg">{label}</span>
      </div>

      {subItems && <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}/>}
    </button>

    {/* render subItem if open is true */}
    {isOpen && subItems && (
         <div className="mx-4 my-3 space-y-2 ">
         {subItems.map((item) => (
           <div onClick={()=>navigate(item.path)} key={item.label} className={`block cursor-pointer hover:text-orange-500  px-4 py-1 rounded ${
            isActive && item.path === path ? 'text-orange-500 border-l-4 border-orange-500' : 'text-gray-400 hover:text-gray-200'
          }`}>{item.label}</div>
         ))}
       </div>
    )}

  </div>
  )
}

export default SidebarItem
