import React from 'react'

const Edit = () => {
  return (
    <div className='p-4 bg-gray-100 flex-1 overflow-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Conversions Widget */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-sm font-semibold">Conversions</h2>
        </div>

        {/* Sessions by Country Widget */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-sm font-semibold">Sessions by Country</h2>
        </div>

        {/* Top Pages Widget
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-sm font-semibold flex justify-between">
            Top Pages
            <button className="text-orange-500 text-sm">View All</button>
          </h2>

        </div> */}
      </div>
    </div>
  )
}

export default Edit
