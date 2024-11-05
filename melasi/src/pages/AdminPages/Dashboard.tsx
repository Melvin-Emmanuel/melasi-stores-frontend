// components/DashboardContent.tsx
import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import phone from "../../assets/images/phone1.png"
import phone2 from "../../assets/images/phone2.png"

const Dashboard: React.FC = () => {
    const recentData = [
        {
            id: "#RB5625",
            date: "29/10/ 2024",
            productImage: phone,
            productName: "Laptop",
            customerName: "Anna Bolaji",
            email: "annabola@mail.com",
            phone: "08012345678",
            address: "Festac",
            paymentType: "Credit Card",
            status: "Completed",
          },
          {
            id: "#RB9652",
            date: "25/2/2024",
            productImage: phone2,
            productName: "Camera",
            customerName: "Judith Tosin",
            email: "judithtosin@mail.com",
            phone: "09012345678",
            address: "Festac",
            paymentType: "Credit Card",
            status: "Completed",
          },
          {
            id: "#RB9653",
            date: "25/2/2024",
            productImage: phone2,
            productName: "Camera",
            customerName: "Judith Tosin",
            email: "judithtosin@mail.com",
            phone: "09012345678",
            address: "Festac",
            paymentType: "Credit Card",
            status: "processing",
          },
    ]
  return (
    <div className="p-4 bg-gray-100 flex-1 overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Conversions Widget */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-sm font-semibold">Conversions</h2>
        </div>

        {/* Sessions by Country Widget */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-sm font-semibold">Sessions by Country</h2>
        </div>

        {/* Top Pages Widget */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-sm font-semibold flex justify-between">
            Top Pages
            <button className="text-orange-500 text-sm">View All</button>
          </h2>

        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between text-sm font-semibold items-center mb-4">
            <h2 className="">Recent Orders</h2>
            <button className="bg-[#ff5f00] text-[#fff] border-none py-2 px-4 rounded cursor-pointer transition-all duration-300 ease-linear hover:bg-[#e85600]">+ Create Order</button>
        </div>
        <div className="overflow-x-auto">
        <table className="min-w-full text-sm table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Customer Name</th>
              <th className="py-3 px-4 text-left">Email ID</th>
              <th className="py-3 px-4 text-left">Phone No.</th>
              <th className="py-3 px-4 text-left">Address</th>
              <th className="py-3 px-4 text-left">Payment Type</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentData.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4">
                  <img
                    src={order.productImage}
                    alt={order.productName}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                  <span>{order.productName}</span>
                </td>
                <td className="py-3 px-4">{order.customerName}</td>
                <td className="py-3 px-4">{order.email}</td>
                <td className="py-3 px-4">{order.phone}</td>
                <td className="py-3 px-4">{order.address}</td>
                <td className="py-3 px-4">{order.paymentType}</td>
                <td className="py-3 px-4">
                  {order.status === "Completed" ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <FaCheckCircle className="w-4 h-4" /> Completed
                    </span>
                  ) : (
                    <span className="text-orange-500 flex items-center gap-1">
                      <FaExclamationCircle className="w-4 h-4" /> Processing
                    </span>
                  )}
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
          <button className="bg-orange-500 text-white py-1 px-3 rounded-md hover:bg-orange-600">1</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300">2</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300">3</button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300">Next</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
