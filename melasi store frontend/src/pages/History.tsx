import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
interface order{
    id: number;
    orderNumber: string;
    price: number;
    status: "Shipping" | "Delivered" | "Cancelled"
    date: string;
    time: string;
}
// const orders: order[] = {
//     {id: 1, orderNumber: "#456347", price: 128, status: "shipping", date: "Feb 02, 2024", time: "8:32 PM"},
// }
const orders: order[] = [
    { id: 1, orderNumber: '#456345', price: 129.98, status: 'Shipping', date: 'Feb 02, 2024', time: '8:32 PM' },
    { id: 2, orderNumber: '#456346', price: 129.98, status: 'Delivered', date: 'Feb 07, 2024', time: '8:32 PM' },
    { id: 3, orderNumber: '#456347', price: 129.98, status: 'Cancelled', date: 'Feb 07, 2024', time: '8:32 PM' },
  ];
const History = () => {
    const navigate = useNavigate()

    const getStatusColor = (status: string)=>{
        switch(status){
            case "Shipping":
                return "text-yellow-600";
                break;
            case "Delivered":
                return "text-green-600";
                break;
            case "Cancelled":
                return "text-red-600";
                break;
            default:
                return "text-gray-600"
        }
    }
  return (
    <div className='min-h-screen bg-white'>
    <div className="relative">
  {/* Header */}
  <header className="fixed top-0 left-0 right-0 bg-white text-black h-14 flex items-center justify-between px-3 shadow-lg z-50">
    <div className="" onClick={()=> navigate(-1)}>
    <MdOutlineArrowBack size={24}/>
    </div>

      <div className="">
        {/* Placeholder for Logo */}
        <span className="text-lg font-medium text-black">Order History</span>
      </div>
      <div></div>

  </header>
</div>

{/* body */}
<div className="pt-16 pb-4 px-3">
    {orders.map(order=>(
        <div className=" flex justify-between items-center border-b py-3" key={order.id}>
            <div>
                <p className='font-semibold mb-1'>{order.orderNumber}</p>
                <p className={`text-sm ${getStatusColor(order.status)}`}>{order.status}</p>

            </div>
            <div className='text-right'>
            <p className='font-semibold mb-1'>${order.price}</p>
            <p className="text-sm text-gray-500">{order.date} at {order.time}</p>
            </div>
        </div>
    ))}

</div>


</div>
  )
}

export default History
