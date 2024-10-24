// CategoryTable.js
import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

interface Category {
    id: string;
    name: string;
    image: string;
    priceRange: string;
    createdBy: string;
    stock: string;
  }

  interface CategoryTableProps {
    categories: Category[];
  }


const CategoryTable:React.FC<CategoryTableProps> = ({ categories }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">All Categories List</h2>

      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Categories</th>
              <th className="py-3 px-4 text-left">Starting Price</th>
              <th className="py-3 px-4 text-left">Create by</th>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Product Stock</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b">
                <td className="py-3 px-4 flex items-center">
                  <img src={category.image} alt={category.name} className="w-10 h-10 object-cover rounded-md mr-3" />
                  {category.name}
                </td>
                <td className="py-3 px-4">{category.priceRange}</td>
                <td className="py-3 px-4">{category.createdBy}</td>
                <td className="py-3 px-4">{category.id}</td>
                <td className="py-3 px-4">{category.stock}</td>
                <td className="py-3 px-4 flex space-x-2">

                  <button className="text-orange-600 p-2 text-xl rounded-full transition-all duration-500 ease-linear hover:bg-orange-100">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 p-2 rounded-full text-xl transition-all duration-500 ease-linear hover:bg-red-100">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;
