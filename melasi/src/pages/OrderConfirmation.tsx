import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="text-center">
        {/* Success Icon */}
        <FaCheckCircle size={70} className="text-green-500 mx-auto mb-4" />

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">Thank you for your Order!</h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Your order will be delivered on time.<br />
          Thank you!
        </p>

        {/* Buttons */}
        <div className="space-y-4 w-full max-w-xs mx-auto">
          <button
            onClick={() => navigate('/history')}
            className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-3 rounded-md text-sm font-semibold hover:from-gray-700 hover:via-gray-800 hover:to-gray-900"
          >
            VIEW ORDERS
          </button>
          <button
            onClick={() => navigate('/product')}
            className="w-full border border-gray-500 text-black py-3 rounded-md text-sm font-semibold hover:bg-gray-100"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
