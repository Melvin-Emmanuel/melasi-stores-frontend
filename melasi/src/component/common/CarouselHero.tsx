import React from 'react'
import a from "../../assets/images/Phones-removebg-preview.png"
import { useNavigate } from 'react-router-dom'

const CarouselHero:React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className='py-3 text-white'>
        <div className="bg-primary w-full h-[230px] rounded-lg flex items-center justify-between bg-cover bg-no-repeat bg-right" style={{backgroundImage: `url(${a})`, backgroundSize: "50%" }}>
            <div className="pl-3 ">
                <h2 className='text-2xl font-bold'>Amazon Speaker</h2>
                <p className='text-lg mb-1 font-medium'>3rd Generation</p>
                <button className='border-y-[1px] rounded-sm border-white  transition-all duration-300 ease-in-out  px-3 py-1 font-medium' onClick={()=> navigate("/product")}>Buy Now</button>
            </div>
        </div>

    </div>
  )
}

export default CarouselHero
