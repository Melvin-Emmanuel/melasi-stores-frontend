import React from 'react'
import formatPrice from '../../utils/formatPrice';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/cart/cartSlice';
import { notify } from '../../utils/notification';
import { useNavigate } from 'react-router-dom';
interface ProductType {
    _id:  string;
    Name: string;
    Image: string;
    Price: number;
  }
interface ProductCardProps{
    product: ProductType
}
const ProductCard:React.FC<ProductCardProps> = ({product}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAddToCart = (product: ProductType) =>{
        console.log("Adding to cart:", product)
        dispatch(addItemToCart({
            id: product._id,
            name: product.Name,
            price: product.Price,
            image: product.Image,
            quantity: 1
        }))
        notify("success", "Item added successfully")
    }

    const handleProductClick =()=>{
        navigate(`/product/${product._id}`)

    }
  return (
    <div>
        <div className='bg-primary/5 rounded-lg'>
        <div  onClick={handleProductClick} className="w-full p-2 h-36 relative overflow-hidden">
            <img src={product.Image} alt={product.Name} className='w-full h-full object-contain'/>
        </div>
        <div className="p-2">
        <h3 className="text-primaryText font-semibold truncate">
          {product.Name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-primary font-medium">
          {formatPrice(product.Price)}
          </span>
          <div className="">
            <button className="p-1 bg-primary/20 shadow-xl text-primary rounded-full transition duration-300 ease-in" onClick={()=>handleAddToCart(product)}>
                <AiOutlinePlus size={24} />
            </button>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCard
