import React, { useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { fetchProducts } from '../../../features/product/productSlice'
import { useNavigate } from 'react-router-dom'

const List:React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {products} = useSelector((state: RootState) => state.product)
  console.log("Here", products)

  // fetch products on component mount
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div>
        {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <div className="flex justify-between text-sm font-semibold items-center mb-4">
            <h2 className="">All Product List</h2>
            <button className="bg-[#ff5f00] text-[#fff] border-none py-2 px-4 rounded cursor-pointer transition-all duration-300 ease-linear hover:bg-[#e85600]" onClick={()=> navigate("/admin/products/create")}>Add Product</button>
        </div>
        <div className="overflow-x-auto">
        <table className="min-w-full text-sm table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Product Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Stock</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="py-3 px-4">{order._id.slice(-6)}</td>
                <td className="py-3 px-4 max-w-96 flex items-center gap-2">
                  <img
                    src={order.Image}
                    alt={order.Name}
                    className="w-12 h-12 object-contain rounded-md"
                  />
                  <p className='max-w-72 '>{order.Name}</p>
                </td>
                <td className="py-3 px-4 ">{order.Price}</td>
                <td className="py-3 px-4"><p>{order.Quantity} </p> <p className='text-gray-600'>{order.stockSold}</p></td>
                <td className="py-3 px-4">{order.Category}</td>
                <td className="py-3 flex space-x-2">
                  <button className="text-orange-600 p-2 text-xl rounded-full transition-all duration-500 ease-linear hover:bg-orange-100">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 p-2 rounded-full text-xl transition-all duration-500 ease-linear hover:bg-red-100">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">Showing 5 of 90,521 orders</span>
        <div className="flex space-x-2">
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300">Previous</button>
          <button className="bg-[#ff5f00] text-white py-1 px-3 rounded-md hover:bg-[#ff5f00]">1</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300">2</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300">3</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300">Next</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default List
