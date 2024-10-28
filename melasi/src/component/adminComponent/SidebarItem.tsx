import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface sidebarItemProps {
  label: string;
  icon: React.ReactNode;
  subItems?: {label: string; path: string}[];
  path: string;
  isActive: boolean;
  isOpen: boolean;
  onClick: () => void
}
const SidebarItem:React.FC<sidebarItemProps> = ({label, icon, subItems, path, isOpen, isActive, onClick}) => {
  // const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubItemClick = (subItemPath: string) => {
    navigate(subItemPath)
    localStorage.setItem("activeSidebarItem", label)
    console.log(subItemPath)
  }
  return (
    <div>
      <button
        className={`flex items-center justify-between w-full px-4 py-3 mt-1 rounded transition-all ${
          isActive ? 'text-orange-500 border-l-4 border-orange-500 bg-gray-700' : 'text-gray-200 hover:bg-gray-700'
        }`}
        onClick={onClick}
      >
        <div className="flex items-center">
          {icon}
          <span className="text-lg ml-2">{label}</span>
        </div>

        {subItems && <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </button>

       {/* Render sub-items if open */}
       {isOpen && subItems && (
        <div className="mx-4 my-3 space-y-2">
          {subItems.map((item) => (
            <div
              key={item.label}
              onClick={() => handleSubItemClick(item.path)}
              className={`block cursor-pointer hover:text-orange-500 px-4 py-1 rounded ${
                localStorage.getItem('activeSidebarItem') === item.path
                  ? 'text-orange-500 border-l-4 border-orange-500'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SidebarItem
