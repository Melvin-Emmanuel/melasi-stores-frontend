import React, { useEffect, useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdOutlineArrowBack } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../redux/store'
import formatPrice from '../utils/formatPrice'
import { addItemToCart, decreaseQuantity, increaseQuantity } from '../features/cart/cartSlice'
import { notify } from '../utils/notification'
// import { fetchProductById, fetchProducts } from '../features/product/productSlice'


interface Product{
  id: string;
  name: string;
  price: number;
  Image: string;
  Desc?: string
  // quantity: 1
}
const ProductDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams<{id: string}>()
    const [product, setProduct] = useState<any>("")

    const cartItems = useSelector((state: RootState)=> state.cart.items)
    const {products} = useSelector((state:RootState) => state.product)
    const totalQuantity = cartItems.reduce((total, item)=> total + item.quantity, 0)
    console.log( typeof id)
    console.log( id)
    console.log( "products",product)


    //fetch the products on mount if not already fetched
    // useEffect(()=>{
    //   dispatch(fetchProductById())
    // }, [dispatch])

    // find the product bases on the id from URL parameters
    useEffect(()=>{
      if(id && products.length > 0){
        const productDetails = products.find((p) => {
          p.id === id
          console.log("hereid", p._id)
          console.log("compare",id)

        } )
        setProduct(productDetails || null)
        console.log("productdetails",productDetails)
      }
    }, [id, products])



const handleAddToCart = (product:Product) =>{
  console.log("Adding to cart:", product)
  dispatch(addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.Image,
      quantity: 1
  }))
  notify("success", "Item added successfully")
}


  return (
    <div className='min-h-screen bg-gray-200'>
        <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white text-black h-14 flex items-center justify-between px-3 shadow-lg z-50">
        <div className="" onClick={()=> navigate(-1)}>
        <MdOutlineArrowBack size={24}/>
        </div>

          <div className="flex items-center justify-center">
            {/* Placeholder for Logo */}
            <span className="text-lg font-medium text-black">Product Details</span>
          </div>


        <div className=" relative hover:bg-gray-40 hover:rounded-full transition-all duration-300 ease-in">
          <HiOutlineShoppingCart size={30}  />
          <span className="absolute -top-2 -right-2 text-xs text-white bg-primary rounded-full h-5 w-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          </div>
      </header>
    </div>

    <div className="px-3 py-16">
      {/* product image */}
        <img src={product?.Image} alt="" className='w-full h-auto object-cover ' />

        {/* product name and price */}
        <div className=" mt-3 bg-white p-2 rounded-md">
          <h1 className='text-2xl font-semibold'>{product?.name}</h1>
          <h1 className='text-2xl font-medium text-primary'>{formatPrice(product?.price)}</h1>
        </div>

        {/* details or specs  */}
        <div className="mb-4 bg-white p-2 rounded-md mt-2">
          <h2 className='text-xl font-medium'>Specifications:</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad. Reprehenderit iure adipisci totam officia veniam pariatur sed cum quaerat assumenda possimus laborum quis iste, quidem distinctio quae minus alias harum doloremque veritatis voluptas repellendus inventore? Ratione quae eius a.</p>
        </div>

        {/* product qty and add to cart which is fixed at the bottom */}
        <div className="flex gap-3 fixed w-full bottom-0 left-0 px-2 bg-white py-3 shadow-md">
        <div className="text-3xl text-primary w-36 bg-white border-primary border mx-auto rounded-xl  flex font-medium items-center justify-between px-3 py-1">
          <button onClick={()=> dispatch(decreaseQuantity(product.id))}>-</button>
          <p className='text-xl text-black'>{totalQuantity}</p>
          <button onClick={()=> dispatch(increaseQuantity(product?.id))}>+</button>
        </div>

        <button className="w-full bg-primary text-white rounded-lg font-medium text-xl " onClick={()=>handleAddToCart(product)}>
        Add to Cart
    </button>
        </div>

    </div>


    </div>
  )
}

export default ProductDetails
