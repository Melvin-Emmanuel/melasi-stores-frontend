import React, { useEffect, useState } from 'react'
import ProductCard from '../component/common/ProductCard'
import { MdOutlineArrowBack } from 'react-icons/md'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchProducts } from '../features/product/productSlice'

const Product:React.FC = () => {

const dispatch = useDispatch()
const {products} = useSelector((state: RootState)=> state.product)

console.log("products", products)

//  Fetch products on component mount
 useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);

// if(status === "loading"){
//   return <div>loading ...</div>
// }
// if(status === "failed"){
//   return <div>Error: {error}</div>

// }

// Call fetchProducts when component mounts
// useEffect(() => {
//   fetchProducts();
// }, []);

// if (loading) return <div>Loading...</div>;
// if (error) return <div>Error: {error}</div>;
const navigate = useNavigate()
const cartItems = useSelector((state: RootState)=> state.cart.items)
const totalQuantity = cartItems.reduce((total, item)=> total + item.quantity, 0)

  return (
    <div className=' min-h-screen'>
      <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white text-black h-14 flex items-center justify-between px-3 shadow-lg z-50">
        <div className="" onClick={()=> navigate(-1)}>
        <MdOutlineArrowBack size={24}/>
        </div>

          <div className="flex items-center justify-center">
            {/* Placeholder for Logo */}
            <span className="text-lg font-medium text-black">Product</span>
          </div>


        <div className=" relative hover:bg-gray-40 hover:rounded-full transition-all duration-300 ease-in">
          <HiOutlineShoppingCart size={30}  />
          <span className="absolute -top-2 -right-2 text-xs text-white bg-primary rounded-full h-5 w-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          </div>
      </header>
    </div>

    <div className="pt-16">

     <div className="w-full text-center py-10 bg-primary">
      <p className='text-4xl font-bold text-white'>All Products</p>
     </div>

    </div>

      <div className="grid grid-cols-2 gap-3 px-3 pt-2">
      {products.map((item) => (
        <span key={item._id}>
          <ProductCard product={item} />
        </span>
      ))}
      </div>
    </div>
  )
}

export default Product
