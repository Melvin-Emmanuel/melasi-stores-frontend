import React from 'react'
import ProductCard from '../component/common/ProductCard'
import a from "../assets/images/phone2.png"
import b from "../assets/images/phone1.png"
import c from "../assets/images/phone3.png"
import d from "../assets/images/phone4.png"
import { MdOutlineArrowBack } from 'react-icons/md'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Product:React.FC = () => {
const products = [
  { id: 1, image: a, name: "WristWatch", price: 300},
  { id: 2, image: b, name: "WristWatch", price: 300},
  { id: 3, image: c, name: "WristWatch", price: 300},
  { id: 4, image: d, name: "WristWatch", price: 300},
]
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

      <div className="grid grid-cols-2 gap-3 px-3 pt-16">
      {products.map(item => (
        <span key={item.id}>
          <ProductCard product={item} />
        </span>
      ))}
      </div>
    </div>
  )
}

export default Product
