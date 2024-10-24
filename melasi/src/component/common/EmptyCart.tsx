import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const EmptyCart:React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className=" border-black border-2 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
      <FiShoppingBag size={64} className='' />
      </div>
        <div className="my-5">
        <h1 className='text-2xl font-semibold mb-2'>Your Cart is Empty!</h1>
        <p>Looks like you haven't made</p>
        <p>your order yet.</p>
        </div>
        <button onClick={()=> navigate("/product")} className='w-full bg-white border-[1px] py-3 rounded-md font-medium  border-black'>
            SHOP NOW
        </button>
    </>
  )
}

export default EmptyCart
