

import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import { FaBars, FaCog, FaHome, FaShoppingCart } from 'react-icons/fa';

interface NavLinkProps {
  Icon: React.ElementType;
  link: string;
}

const CustomNavLink: React.FC<NavLinkProps> = ({ Icon, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `flex flex-col items-center ${isActive ? 'text-secondary' : 'text-white'}`
      }
    >
      <Icon className="w-7 h-7" />
    </NavLink>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="fixed rounded-t-2xl bottom-0 left-0 right-0 bg-primary text-white py-4 flex items-center justify-around z-50">
      <CustomNavLink Icon={FaHome} link="/" />
      <CustomNavLink Icon={FaShoppingCart} link="/cart" />
      <CustomNavLink Icon={FaCog} link="/settings" />
      <CustomNavLink Icon={FaBars} link="/menu" />
    </footer>
  );
};

export default Footer;
