import React from "react";
import wearables from "../../assets/images/fashion-removebg-preview.png"
import card from "../../assets/images/memory/cat1.png"
import game from "../../assets/images/memory/xbox-1-removebg-preview.png"
import phones from "../../assets/images/Phones-removebg-preview.png"
import charger from "../../assets/images/memory/phonecharger-removebg-preview.png"
import accessories from "../../assets/images/memory/category1-removebg-preview.png"


// CardData type for defining props
interface CardData {
  image: string;
  title: string;
}

// Card component
const CategoryCard: React.FC<CardData> = ({ image, title }) => {
  return (
    <div className="flex flex-col">
    <div className={`flex min-w-[115px] h-28 flex-col justify-center items-center p-2 bg-blue-200/10 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out`}>
      <img src={image} alt="" className="p-1" />
    </div>
    <p className="text-center text-sm font-montserrat mt-1 font-medium text-secondaryText">
        {title}
      </p>

    </div>
  );
};

// Category grid component
const CategoryGrid: React.FC = () => {
    const categories: CardData[] = [
        { image: wearables, title: "Wearables"},
        { image: game, title: "Gaming Accessories" },
        { image: phones, title: "Phones" },
        { image: card, title: "Memory Cards"},
        { image: accessories, title: "Phone Accessories" },
        { image: charger, title: "Chargers"  },
        { image: wearables, title: "SIM Cards"},
      ];

  return (
   <div className=" pt-3">
    <h1 className="text-lg font-semibold mb-1">Category</h1>
     <div className="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth " style={{WebkitOverflowScrolling: "touch"}}>
        {categories.map((category, index) => (
          <CategoryCard key={index} image={category.image} title={category.title} />
        ))}
      </div>
   </div>
  );
};


export default CategoryGrid;
