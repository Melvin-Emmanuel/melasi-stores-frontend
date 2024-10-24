// CategoryManagement.tsx
import React from 'react';
import CategoryCard from './CategoryCard';
import CategoryTable from './CategoryTable';
import cat1 from  "../../assets/images/Phones-removebg-preview.png"

interface Category {
  id: string;
  name: string;
  priceRange: string;
  createdBy: string;
  stock: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 'FS16276',
    name: "Wearables",
    priceRange: '$80 to $400',
    createdBy: 'Seller',
    stock: '46233',
    image: cat1,
  },
  {
    id: 'HB73029',
    name: 'Gaming Accessories',
    priceRange: '$120 to $500',
    createdBy: 'Admin',
    stock: '2739',
    image: cat1,
  },
  {
    id: 'CH492-9',
    name: 'Phones',
    priceRange: '$50 to $200',
    createdBy: 'Admin',
    stock: '1829',
    image: cat1,
  },
  {
    id: 'CH492-9',
    name: 'Memory Cards',
    priceRange: '$50 to $200',
    createdBy: 'Admin',
    stock: '1829',
    image: cat1,
  },
  {
    id: 'CH492-9',
    name: 'Phones Accessories',
    priceRange: '$50 to $200',
    createdBy: 'Admin',
    stock: '1829',
    image: cat1,
  },
  {
    id: 'CH492-9',
    name: 'Chargers',
    priceRange: '$50 to $200',
    createdBy: 'Admin',
    stock: '1829',
    image: cat1,
  },
  {
    id: 'CH492-9',
    name: 'SIM Cards',
    priceRange: '$50 to $200',
    createdBy: 'Admin',
    stock: '1829',
    image: cat1,
  },
];

const CategoryManagement: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-7 gap-4 mb-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} image={category.image} title={category.name} />
        ))}
      </div>
      <CategoryTable categories={categories} />
    </div>
  );
};

export default CategoryManagement;
