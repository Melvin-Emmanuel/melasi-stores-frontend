import React from 'react'
import { FaCheckCircle, FaEdit, FaExclamationCircle, FaTrash } from 'react-icons/fa'
import phone from "../../assets/images/phone1.png"
import phone2 from "../../assets/images/phone2.png"
import phone3 from "../../assets/images/phone3.png"

const List = () => {
    const recentData = [
        {
            id: "#RB5625",
            productImage: phone,
            productName: "Laptop",
            price: "800",
            stock: "32 items left",
            stockSold: "4 sold",
            category: "Fashion",
            action: "Festac",
            edit: <FaEdit/>,
            delete: <FaTrash/>
          },
          {
            id: "#RB9652",
            productImage: phone2,
            productName: "Camera",
            price: "500",
            stock: "41 items left",
            stockSold: "4 sold",
            category: "Appliance",
            action: "Festac",
            edit: <FaEdit/>,
            delete: <FaTrash/>
          },
          {
            id: "#RB9652",
            date: "25/2/2024",
            productImage: phone3,
            productName: "Camera",
            price: "600",
            stock: "12 items left",
            stockSold: "4 sold",
            category: "Gadget",
            action: "Festac",
            edit: <FaEdit/>,
            delete: <FaTrash/>
          },
    ]
  return (
    <div>
        {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between text-sm font-semibold items-center mb-4">
            <h2 className="">All Product List</h2>
            <button className="bg-[#ff5f00] text-[#fff] border-none py-2 px-4 rounded cursor-pointer transition-all duration-300 ease-linear hover:bg-[#e85600]">Add Product</button>
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
            {recentData.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4 flex items-center gap-1">
                  <img
                    src={order.productImage}
                    alt={order.productName}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                  <p>{order.productName}</p>
                </td>
                <td className="py-3 px-4 ">{order.price}</td>
                <td className="py-3 px-4"><p>{order.stock} </p> <p className='text-gray-600'>{order.stockSold}</p></td>
                <td className="py-3 px-4">{order.category}</td>
                {/* <td className="py-3 flex items-center mb-2 text-black text-xl gap-3">
                    <div className='p-2 bg-blue-50 text-blue-600 rounded-md'>{order.edit}</div>
                    <div className='p-2 bg-red-50 text-red-600 rounded-md'>{order.delete}</div>
                </td> */}
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
