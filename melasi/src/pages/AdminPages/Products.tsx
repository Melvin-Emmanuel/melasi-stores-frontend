// src/pages/Products.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className='p-4 bg-gray-100 flex-1 overflow-auto'>
      <Outlet />
    </div>
  );
};

export default Products;
