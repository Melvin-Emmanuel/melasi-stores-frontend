import React from 'react'
import a from "../../assets/images/speaker.png"
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../features/cart/cartSlice';
import { RootState } from '../../redux/store';
import { notify } from '../../utils/notification';
import formatPrice from '../../utils/formatPrice';
import { Link, useNavigate } from 'react-router-dom';

interface Product{
    id: number;
    name: string;
    price: number;
    image: string;
    // quantity: 1
}
const featProducts: Product[] = [
    {id: 1, name: "Chair yellow", price: 156.00, image: a },
    {id: 2, name: "Armchair grey", price: 229.00, image: a },
    {id: 3, name: "Armchair blue", price: 206.00, image: a },
    {id: 4, name: "Chair", price: 234.00, image: a },
]
const FeaturedProducts:React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch() //initial dispatch
    const cartItems = useSelector((state: RootState) => state.cart.items)

    //function to handle adding products to cart

    const handleAddToCart = (product: Product) =>{
        console.log("Adding to cart:", product)
        dispatch(addItemToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        }))
        notify("success", "Item added successfully")
    }
    console.log("current cart items", cartItems)
  return (
    <div className='w-full pt-6'>
        <div className="flex justify-between items-center mb-1">
            <h2 className='text-xl font-semibold'>Featured products</h2>
            <Link to="/product" className='text-blue-900 font-medium hover:underline'>View all</Link>
        </div>

        <div className='flex overflow-x-auto space-x-2 scrollbar-hide scroll-smooth ' style={{WebkitOverflowScrolling: "touch"}} >
            {featProducts.map((product)=>(
                <div key={product.id} className="min-w-[160px] flex-shrink-0 bg-white p-4 rounded-lg shadow-lg relative">
                    <img src={product.image} alt={product.name} className='object-contain h-32 rounded-lg p-1' />
                    <div className="mt-2">
                        <h3 className=" text-sm font-semibold">{product.name}</h3>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-primary">{formatPrice(product.price)}</span>
                            <button className="p-1 bg-primary/20 shadow-xl  text-primary rounded-full transition duration-300 ease-in" onClick={()=>handleAddToCart(product)}>
                        <AiOutlinePlus size={24} />
                    </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    </div>
  )
}

export default FeaturedProducts
