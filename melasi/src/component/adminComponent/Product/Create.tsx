import React, { useState } from 'react';
import UploadImage from '../Category/UploadImage';
import { generateCategoryId } from '../../../utils/categoryid';
import ProductForm from './ProductForm';
import ProductPreview from './ProductPreview';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../features/product/productSlice';

interface Category {
  id: string;
  name: string;
  priceRange: string;
  createdBy: string;
  quantity: number;
  image: string;
  description: string;
  category: string;
  brand: string;
  gender: string;
  tag: string;
  weight: number;
  price: number;
}

const CreateProduct: React.FC = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<Omit<Category, 'id'>>({
    name: '',
    priceRange: '',
    createdBy: '',
    quantity: 0,
    image: '',
    description: "",
    category: "",
    brand: "",
    gender: "",
    tag: "",
    weight: 0,
    price: 0,
  });

  const handleFormChange = (name: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (imageUrl: string) => {
    setFormData(prev => ({ ...prev, image: imageUrl }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCategory: Category = {
      id: generateCategoryId(),
      ...formData,
    };
    dispatch(createProduct(newCategory))
    alert('Category created successfully!');
  };

  return (
    <div className="p-6 flex ">
      <div className="flex gap-6 w-full">
        <ProductPreview formData={formData} />
        <div className=" p-6 bg-white rounded-lg shadow-md w-full ">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Add Thumbnail Photo</h2>
          <UploadImage onUpload={handleImageUpload}/>
          <ProductForm formData={formData} onChange={handleFormChange} onSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
