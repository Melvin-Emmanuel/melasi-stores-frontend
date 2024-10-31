import React from 'react';
import formImage from "../../../assets/images/Phones-removebg-preview.png"

interface ProductPreviewProps {
  formData: {
    name: string;
    quantity: number;
    image: string;
    description: string;
    category: string;
    brand: string;
    gender: string;
    tag: string;
    weight: number;
    price: number;
  };
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ formData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[390px] h-fit">
        <img src={formData.image || formImage} alt="Category Preview" className="h-48 w-full object-contain bg-green-50 rounded-sm mb-4"/>
      <h3 className="text-lg font-semibold mb-2">{formData.name || 'Product Name'}</h3>
      <p className="text-sm text-gray-500">Category: <span className='font-bold text-black'> {formData.category || 'Not specified'}</span></p>
      <p className="text-sm text-gray-500">Price: <span className='font-bold text-black'> {formData.price || 'Not specified'}</span></p>
      <p className="text-sm text-gray-500">Quantity: <span className='font-bold text-black'>{formData.quantity}</span></p>
      <p className="text-sm text-gray-500">Tag: <span className='font-bold text-black'>{formData.tag}</span></p>
      <p className="text-sm text-gray-500">Weight: <span className='font-bold text-black'>{formData.weight}</span></p>
      <p className="text-sm text-gray-500">ID: <span className='font-bold text-black'>FS22222</span></p>
      <p className="text-sm text-gray-500">Description: <span className='font-bold text-black'>{formData.description}</span></p>
    </div>
  );
};

export default ProductPreview;
