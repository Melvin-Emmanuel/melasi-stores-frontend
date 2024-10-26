// CategoryCard.js
import React from 'react';
interface categoryProps{
    image: string,
    title: string
}

const CategoryCard:React.FC<categoryProps> = ({ image, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={image} alt={title} className="h-24 w-full bg-orange-100 object-contain rounded-md mb-2" />
      <h3 className="text-gray-700 text-sm font-semibold">{title}</h3>
    </div>
  );
};

export default CategoryCard;
