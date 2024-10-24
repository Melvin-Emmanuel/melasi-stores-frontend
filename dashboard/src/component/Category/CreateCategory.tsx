import React, { useState } from 'react';
import CategoryForm from './CategoryForm';
import CategoryPreview from './CategoryPreview';
import UploadImage from './UploadImage';
import { generateCategoryId } from '../../utils/utils';

interface Category {
  id: string;
  name: string;
  priceRange: string;
  createdBy: string;
  stock: number;
  image: string;
  description: string;
}

const CreateCategory: React.FC = () => {
  const [formData, setFormData] = useState<Omit<Category, 'id'>>({
    name: '',
    priceRange: '',
    createdBy: '',
    stock: 0,
    image: '',
    description: ""
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
    console.log('New Category:', newCategory);
    alert('Category created successfully!');
  };

  return (
    <div className="p-6 flex ">
      <div className="flex gap-6 w-full">
        <CategoryPreview formData={formData} />
        <div className=" p-6 bg-white rounded-lg shadow-md w-full ">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Add Thumbnail Photo</h2>
          <UploadImage onUpload={handleImageUpload} />
          <CategoryForm formData={formData} onChange={handleFormChange} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
