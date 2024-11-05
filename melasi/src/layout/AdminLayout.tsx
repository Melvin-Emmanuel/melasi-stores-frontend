import React, { ReactNode } from 'react'
import Sidebar from '../component/adminComponent/Sidebar'
import Navbar from '../component/adminComponent/Navbar'
// import DashboardRoutes from '../routes/Dashboard'
import { Outlet } from 'react-router-dom'

const AdminLayout:React.FC = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar/>
        <div className=" relative flex-1 flex flex-col">
            <Navbar/>
            <main className='ml-64 bg-green-400 mt-14'>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AdminLayout
