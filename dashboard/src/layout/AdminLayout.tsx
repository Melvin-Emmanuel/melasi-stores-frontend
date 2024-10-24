import React, { ReactNode } from 'react'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import DashboardRoutes from '../routes/Dashboard'

interface LayoutProps{
    children: ReactNode
}

const AdminLayout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar/>
        <div className=" relative flex-1 flex flex-col">
            <Navbar/>
            <main className='ml-64 bg-green-400 mt-14'>
                <DashboardRoutes/>
            </main>
        </div>
    </div>
  )
}

export default AdminLayout
