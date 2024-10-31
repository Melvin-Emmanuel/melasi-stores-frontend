import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

interface InvoiceProps{
    title: string;
    count: number;
    icon: React.ReactNode
}

const InvoiceCard: React.FC<InvoiceProps> =({title, count, icon})=>(
    <div className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg">
        <div>
            <h3 className='text-gray-600 text-sm font-medium mb-2'>{title}</h3>
            <p className="text2xl font-semibold text-gray-800">{count}</p>
        </div>
        <div className="bg-orange-100 p-2 rounded-full">{icon}</div>
    </div>
)

const InfoIcon2: React.FC<React.SVGProps<SVGSVGElement>> = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></path><path strokeLinecap="round" d="m11.5 12.5l3-3m0 3l-3-3M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></path></g></svg>
  );

const Invoices:React.FC = () => {
    const invoice = [
        {title: "Total Invoice", count: 2310, icon: <InfoIcon2 /> },
        {title: "Pending Invoice", count: 1000, icon: <InfoIcon2 /> },
        {title: "Paid Invoice", count: 1000, icon: <InfoIcon2 /> },
        {title: "Inactive Invoice", count: 1000, icon: <InfoIcon2 /> },
    ]
    const invoiceData =[
        {
            id: "#IN2540",
            billingName: "Micheal A. Miller",
            orderDate: "07 Jan, 2023",
            total: 452,
            paymentMethod: "MasterCard",
            status: "Completed"
        },
        {
            id: "#IN3924",
            billingName: "Therasa A. Brose",
            orderDate: "03 Dec, 2023",
            total: 783,
            paymentMethod: "Visa",
            status: "Cancel"
        },
        {
            id: "#IN5032",
            billingName: "James L. Erickson",
            orderDate: "28 Sept, 2023",
            total: 134,
            paymentMethod: "Paypal",
            status: "Completed"
        },
        {
            id: "#IN1695",
            billingName: "Lily W. Wilson",
            orderDate: "10 Aug, 2023",
            total: 945,
            paymentMethod: "MasterCard",
            status: "Pending"
        },
    ]
  return (
    <div className='p-4 bg-gray-100 flex-1 overflow-auto'>
        <div className="grid grid-cols-4 gap-4 py-4">
            {invoice.map((item)=>(
                <InvoiceCard key={item.title} {...item}/>
            ))}
        </div>

        {/* invoice table */}
        <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between text-sm font-semibold items-center mb-4">
            <h2>All Invoice List</h2>
            <select className='border px-3 py-1 rounded-sm' name="" id="">
                <option value="Today">Today</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
                <option value="Year">Year</option>
            </select>
        </div>
        <div className="overflow-x-auto">
            <table className='min-w-full text-sm table-auto border-collapse'>
                <thead>
                    <tr className='bg-gray-100 text-gray-700'>
                        <th className='py-3 px-4 text-left'>Invoice ID</th>
                        <th className='py-3 px-4 text-left'>Billing Name</th>
                        <th className='py-3 px-4 text-left'>Order Date</th>
                        <th className='py-3 px-4 text-left'>Total</th>
                        <th className='py-3 px-4 text-left'>Payment Method</th>
                        <th className='py-3 px-4 text-left'>Status</th>
                        <th className='py-3 px-4 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData.map((item) =>(
                        <tr key={item.id} className='border-b'>
                            <td className='py-3 px-4'>{item.id}</td>
                            <td className='py-3 px-4'>{item.billingName}</td>
                            <td className='py-3 px-4'>{item.orderDate}</td>
                            <td className='py-3 px-4'>${item.total}</td>
                            <td className='py-3 px-4'>{item.paymentMethod}</td>
                            <td className='py-3 px-4'>{item.status === "Completed" ? <span className='bg-green-50 py-1 px-3 rounded-sm text-green-500'>{item.status}</span>: item.status === "Cancel" ? <span className='bg-red-50 py-1 px-3 rounded-sm text-red-500'>{item.status}</span> : <span className='bg-orange-50 py-1 px-3 rounded-sm text-orange-500'>{item.status}</span>}
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

export default Invoices
