import React from 'react'
import { FaCheckCircle, FaEdit, FaExclamationCircle, FaFileAlt, FaInfoCircle, FaTimesCircle, FaTrashAlt } from 'react-icons/fa';

interface OrderCardProps{
  title: string;
  count: number;
  icon: React.ReactNode
}

const OrderCard: React.FC<OrderCardProps> = ({title, count, icon}) => (
  <div className=" flex items-center justify-between p-4 bg-white shadow-sm rounded-lg">
    <div className="">
      <h3 className='ext-gray-600 text-sm font-medium mb-2'>{title}</h3>
      <p className='text-2xl font-semibold text-gray-800'>{count}</p>
    </div>
    <div className=" bg-orange-100 p-2 rounded-full"> {icon} </div>
  </div>
)
const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth="1.5"
    {...props}
  >
    <g>
      <path d="M12 15.333c1.105 0 2-.746 2-1.666S13.105 12 12 12s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V16m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></path>
      <path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></path>
    </g>
  </svg>
);
const InfoIcon2: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></path><path stroke-linecap="round" d="m11.5 12.5l3-3m0 3l-3-3M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></path></g></svg>
);
const InfoIcon3: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"></path></svg>
);
const InfoIcon4: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M20 10v2c0 3.771 0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12v-2c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></path><path stroke-linejoin="round" d="M15.5 16H17M7 16h1.5M7 20l-1 2m11-2l1 2M10 2v.5a2 2 0 1 0 4 0V2m6 11h-4M4 13h8"></path></g></svg>
);
const InfoIcon5: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></path><path stroke-linecap="round" d="m14.5 11l-5 5m0-5l5 5m6.5 0c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></path></g></svg>
);
const InfoIcon6: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M12 8v4l2.5 2.5"></path><path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path></g></svg>
);
const InfoIcon7: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m9 13.4l1.714 1.6L15 11"></path><path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></path><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></path></g></svg>
);
const InfoIcon8: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22M8 7h8m-6 3.5h4"></path><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></path></g></svg>
);

const OrderList = () => {

  const orders = [
    { title: 'Payment Refund', count: 490, icon: <InfoIcon/> },
    { title: 'Order Cancel', count: 241, icon: <InfoIcon2 /> },
    { title: 'Order Shipped', count: 630, icon: <InfoIcon3 /> },
    { title: 'Order Delivering', count: 170, icon: <InfoIcon4 /> },
    { title: 'Pending Review', count: 210, icon: <InfoIcon5/> },
    { title: 'Pending Payment', count: 608, icon: <InfoIcon6/> },
    { title: 'Delivered', count: 200, icon: <InfoIcon7/> },
    { title: 'In Progress', count: 656, icon: <InfoIcon8 /> },
  ]
  const recentData = [
    {
      id: "#RB9652",
      createdAt: "25/2/2024",
      Customer: "Gail C. Tosin",
      priority: "High",
      total: 1230,
      paymentStatus: "paid",
      items: 5,
      deliveryNumber: "#D-578376",
      orderStatus: "Draft"
      },
      {
        id: "#RB9652",
        createdAt: "25/2/2024",
        Customer: "Gail C. Tosin",
        priority: "Normal",
        total: 1230,
        paymentStatus: "unpaid",
        items: 4,
        deliveryNumber: "#D-578376",
        orderStatus: "Processing"
      },
      {
        id: "#RB9652",
        createdAt: "25/2/2024",
        Customer: "Gail C. Tosin",
        priority: "Normal",
        total: 1230,
        paymentStatus: "unpaid",
        items: 2,
        deliveryNumber: "#D-578376",
        orderStatus: "Completed"
      },
      {
        id: "#RB9652",
        createdAt: "25/2/2024",
        Customer: "Gail C. Tosin",
        priority: "Normal",
        total: 1230,
        paymentStatus: "refund",
        items: 2,
        deliveryNumber: "#D-578376",
        orderStatus: "Canceled"
      },
]
  return (
    <div className="">
<div className='grid grid-cols-4 gap-4 py-5'>
      {orders.map((order) => (
        <OrderCard key={order.title} {...order} />
      ))}


    </div>
     {/* Recent Orders */}
     <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between text-sm font-semibold items-center mb-4">
            <h2 className="">All Order List</h2>
            {/* <button className="bg-[#ff5f00] text-[#fff] border-none py-2 px-4 rounded cursor-pointer transition-all duration-300 ease-linear hover:bg-[#e85600]">+ Create Order</button> */}
        </div>
        <div className="overflow-x-auto">
        <table className="min-w-full text-sm table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 text-left">Created at</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Priority</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Payment <br /> Status</th>
              <th className="py-3 px-4 text-left">items</th>
              <th className="py-3 px-4 text-left ">Delivery <br /> Number</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentData.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.createdAt}</td>
                <td className="py-3 px-4">
                  {order.Customer}
                </td>
                <td className="py-3 px-4">{order.priority}</td>
                <td className="py-3 px-4">${order.total}</td>
                <td className="py-3 px-4 ">{order.paymentStatus === "paid" ? (
                  <span className='bg-green-500 py-1 px-3 rounded-sm text-white'>Paid</span>
                ): order.paymentStatus === "unpaid" ? (
                  <span className='bg-gray-400 py-1 px-3 rounded-sm'>unpaid</span>
                ) : (
                  <span className='bg-gray-300 py-1 px-3 rounded-sm'>refund</span>
                )

                }</td>
                <td className="py-3 px-4">{order.items}</td>
                <td className="py-3 px-4">{order.deliveryNumber}</td>
                <td className="py-3 px-4">
                {order.orderStatus === "Completed" ? (
  <span className="text-green-600 flex items-center gap-1">
    <FaCheckCircle className="w-4 h-4" /> Completed
  </span>
) : order.orderStatus === "Processing" ? (
  <span className="text-orange-500 flex items-center gap-1">
    <FaExclamationCircle className="w-4 h-4" /> Processing
  </span>
) : order.orderStatus === "Draft" ? (
  <span className="text-gray-500 flex items-center gap-1">
    <FaFileAlt className="w-4 h-4" />  Draft
  </span>
) : order.orderStatus === "Canceled" ? (
  <span className="text-red-600 flex items-center gap-1">
     <FaTimesCircle className="w-4 h-4" /> Canceled
  </span>
) : (
  <span className="text-gray-500 flex items-center gap-1">
      <FaInfoCircle className="w-4 h-4" /> Unknown Status
  </span>
)}

                </td>
                <td className="py-3 flex">
                  <button className="text-orange-600 p-2 text-xl rounded-full transition-all duration-500 ease-linear hover:bg-orange-100">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 p-2 rounded-full text-xl transition-all duration-500 ease-linear hover:bg-red-100">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>

  )
}

export default OrderList
