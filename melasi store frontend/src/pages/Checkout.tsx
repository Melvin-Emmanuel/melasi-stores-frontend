import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../redux/store'
import formatPrice from '../utils/formatPrice'
import { RxCross2 } from "react-icons/rx";
import { notify } from '../utils/notification'

const Checkout:React.FC = () => {
    const navigate = useNavigate()
    const cartItems = useSelector((state: RootState)=> state.cart.items)

    const totalPrice = cartItems.reduce((acc, item)=> acc + item.price * item.quantity, 0)

    //cart validation function
    const validateCart = () => {
        return cartItems.every(item => item.quantity > 0 && item.price > 0);
      };
    const handleOrderConfirmation=()=>{
        if (cartItems.length === 0) {
            notify("warning", "Your cart is empty,")
            return;
          }
        if(!validateCart()){
            notify("warning", "Your cart contains invalid items,")
            return
        }
        navigate("/orderconfirm")
    }
  return (
    <div className='min-h-screen bg-white'>
        <div className="relative">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white text-black h-14 flex items-center justify-between px-4 shadow-lg z-50">
            <div className="" onClick={()=> navigate(-1)}>
                <MdOutlineArrowBack size={24}/>
            </div>
      <div className="">
        {/* Placeholder for Logo */}
        <span className="text-lg font-medium text-black">Checkout</span>
      </div>
      <div></div>
  </header>
        </div>
        {/* body */}
        <div className="pt-20 pb-4 px-4">
            <div className="border border-gray-300 bg-gray-100">
                <div className="flex items-center justify-between border-b border-gray-300 py-4 mx-3">
                    <p className=' text-lg font-semibold'>My Order</p>
                    <p className=' text-lg font-semibold'>{formatPrice(totalPrice)}</p>
                </div>
                <div className="">
                    {cartItems.map(item => (
                        <div className=" " key={item.id}>
                            <div className="flex justify-between px-3 my-3">
                                <p>{item.name}</p>
                                <p className='flex items-center gap-1'>{item.quantity} <RxCross2 /> {formatPrice(item.price * item.quantity)}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <button onClick={handleOrderConfirmation} className=" py-3 font-semibold mt-5 rounded-md  border-2 border-gray-600 bg-black text-white w-full text-center">
               CONFIRM ORDER
            </button>
        </div>
    </div>
  )
}

export default Checkout
