import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import CarouselHero from '../component/common/CarouselHero';
import CategoryGrid from '../component/common/Category';
import { useNavigate } from 'react-router-dom';
import FeaturedProducts from '../component/common/FeaturedProducts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home:React.FC = () => {
  const navigate = useNavigate()
  // const user = JSON.parse(localStorage.getItem("MelUser") || "{}")

  // const getUserIntials = (firstName: string, lastName: string) =>{
  //   return `${firstName[0]}${lastName[0]}`.toUpperCase()
  // }
  //access cart items from redux state
  const cartItems = useSelector((state: RootState)=> state.cart.items)

  //calculate total quantity of all products in the cart
  const totalQuantity = cartItems.reduce((total, item)=> total + item.quantity, 0)
  // const {isAuthenticated, user} = useSelector((state: RootState)=>state.auth)

  const handleUserIconClick = ()=>{
    // if(isAuthenticated){
    //   //if the user is authenticated, navigate to the profile page
    //   navigate("/")
    // }else{
    //   //if the user is not authenticated, navigate to the login page
    //   navigate("/login")
    // }
    // navigate("/")
    navigate("/login")
  }
  return (
    <div className='min-h-screen bg-background'>
      <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white text-black h-[60px] flex items-center justify-between px-4 shadow-lg z-50">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            {/* Placeholder for Logo */}
            <span className="text-xl font-bold text-black">Mel</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold"
          onClick={handleUserIconClick} // Replace with your actual profile route
        >
           <FaUserCircle size={28} />
        </div>
          <div className=" relative hover:bg-gray-40 hover:rounded-full transition-all duration-300 ease-in">
          <HiOutlineShoppingCart size={28} onClick={()=>navigate("cart")} />
          <span className="absolute -top-2 -right-2 text-xs text-white bg-primary rounded-full h-5 w-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          </div>
        </div>
      </header>
    </div>
      <div className="pt-[60px] pb-20 px-3">
        <CarouselHero/>
        <CategoryGrid/>
        <FeaturedProducts/>
      </div>
    </div>
  )
}

export default Home
