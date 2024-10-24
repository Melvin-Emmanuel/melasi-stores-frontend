import React from 'react'
import EmptyCart from '../component/common/EmptyCart'
import { useNavigate } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdDelete, MdOutlineArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import formatPrice from '../utils/formatPrice';
import { decreaseQuantity, increaseQuantity, removeItemFromCart } from '../features/cart/cartSlice';

const Cart:React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState)=> state.cart.items)
    console.log("CartItems", cartItems)

    //calculate total quantity of all products in the cart
  const totalQuantity = cartItems.reduce((total, item)=> total + item.quantity, 0)
  const totalPrice = cartItems.reduce((acc, item)=> acc + item.price * item.quantity, 0)

  return (
    <div className='min-h-screen flex flex-col justify-end bg-gray-200'>
        <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white text-black h-14 flex items-center justify-between px-3 shadow-lg z-50">
        <div className="" onClick={()=> navigate(-1)}>
        <MdOutlineArrowBack size={24}/>
        </div>

          <div className="flex items-center justify-center">
            {/* Placeholder for Logo */}
            <span className="text-lg font-medium text-black">Cart</span>
          </div>


        <div className=" relative hover:bg-gray-40 hover:rounded-full transition-all duration-300 ease-in">
          <HiOutlineShoppingCart size={30}  />
          <span className="absolute -top-2 -right-2 text-xs text-white bg-black/90 rounded-full h-5 w-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          </div>
      </header>
    </div>
    <div className="flex-grow px-3">
        {cartItems.length === 0 ? (
            <div className=" flex flex-col justify-end min-h-screen pb-40">
                <EmptyCart />
            </div>
        ): (
            <div className=" flex-grow pb-20 pt-[70px]">
            {cartItems.map(item => (
                <div className="" key={item.id}>
                    <div className="flex rounded-md overflow-hidden items-center w-full bg-white mb-3 h-24 shadow-md">
                        <img src={item.image} alt={item.name} className='w-24 h-24 p-3 ' />
                        <div className="flex justify-between items-center w-full px-3">
                            <div className="">
                                <h4 className='text-black font-semibold text-sm mb-1'>{item.name}</h4>
                                <p className='text-grey-600 font-semibold text-sm'>{formatPrice(item.price * item.quantity)}</p>
                            </div>
                            <div className="">
                            <div onClick={()=>dispatch(removeItemFromCart(item.id))} className="flex justify-end text-red-700 mb-1">
                                <MdDelete size={20}/>
                            </div>
                            <div className=" pr-2 flex items-center gap-3">

                               <button className='text-2xl font-semibold' onClick={()=> dispatch(decreaseQuantity(item.id))}>-</button>

                               <p>{item.quantity}</p>

                               <button className='text-2xl font-semibold' onClick={()=> dispatch(increaseQuantity(item.id))}>+</button>


                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex px-4 mt-5 text-lg font-semibold rounded-md justify-between items-center border border-gray-400 bg-white h-[70PX]">
                <p>Total</p>
                <p>{formatPrice(totalPrice)}</p>
            </div>
            <button onClick={()=> navigate("/checkout")} className=" py-3 mt-2 font-semibold rounded-md  border-2 border-gray-600 bg-black text-white w-full text-center">
               PROCEED TO CHECKOUT
            </button>
        </div>
        )}
    </div>
    </div>
  )
}

export default Cart
