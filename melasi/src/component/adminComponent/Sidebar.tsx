import React, { useEffect, useState } from 'react'
import { FaShoppingBasket, FaBox, FaLock, FaClipboardList, FaTags, FaFileInvoice } from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import {useNavigate } from 'react-router-dom';


const Sidebar:React.FC = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const [openItem, setOpenItem] = useState<string | null>(null)
    const navigate = useNavigate()

    // onMount, set the active item from localStorage or default to dashboard
    useEffect(()=>{
      const storedActiveItem = localStorage.getItem("activeSidebarItem") || "Dashboard"
      setActiveItem(storedActiveItem)
    },[])

    // function  to handle clicking  a sidebar item
    const handleItemClick = (label: string, path: string) =>{
        setActiveItem(label)
        setOpenItem(prev => (prev === label ? null : label))
        localStorage.setItem("activeSidebarItem", label)
        navigate(path)
    }

  return (
    <aside className="bg-gray-800 text-gray-200 min-h-screen w-64 px-3 fixed left-0 z-20 top-0">
       {/* logo */}
        <div className="px-4 py-6 flex items-center">
        <FaShoppingBasket className="text-orange-500 text-2xl mr-2" />
            <h1 className="text-2xl font-bold">Mel-Stores</h1>
        </div>

        {/* sidebar item */}
        <SidebarItem
            label="Dashboard"
            icon={<FaBox />}
            path='/'
            isOpen={openItem === "Dashboard"}
            isActive={activeItem === "Dashboard"}
            onClick={() => handleItemClick("Dashboard", "/")}
            />

        <SidebarItem
          label="Products"
          icon={<FaShoppingBasket />}
          path='/products'
          isOpen={openItem === "Products"}
          isActive={activeItem === "Products"}
          onClick={() => handleItemClick("Products", "admin/products/list")}
          subItems={[
            // { label: 'List', path: 'admin/products/list' },
            { label: 'Edit', path: 'admin/products/edit' },
            { label: 'Create', path: 'admin/products/create' },
          ]}
        />

        <SidebarItem
          label="Category"
          icon={<FaBox />}
          path='/category'
          isOpen={openItem === "Category"}
          isActive={activeItem === "Category"}
          onClick={() => handleItemClick("Category", "admin/category/list")}
          subItems={[
            // { label: 'List', path: 'admin/category/list' },
            { label: 'Edit', path: 'admin/category/edit' },
            { label: 'Create', path: 'admin/category/create' },
          ]}
        />

         <SidebarItem
          label="Orders"
          icon={<FaLock />}
          path='/orders'
          isOpen={openItem === "Orders"}
          isActive={activeItem === "Orders"}
            onClick={() => handleItemClick("Orders", "admin/orders/list")}
          subItems={[
            // { label: 'Order List', path: 'admin/orders/list' },
            { label: 'Track Order', path: 'admin/orders/track' },
          ]}
        />

        {/* <SidebarItem
          label="Purchases"
          icon={<FaClipboardList />}
          path="/purchases"
          isActive={activeItem === 'Purchases'}
          onClick={() => handleItemClick('Purchases')}
          isOpen={openItem === 'Purchases'}
          subItems={[
            { label: 'Order List', path: '/orders/list' },
            { label: 'Track Order', path: '/orders/track' },
          ]}
        /> */}

        {/* <SidebarItem
          label="Attributes"
          icon={<FaTags />}
          path="/attributes"
          isActive={activeItem === 'Attributes'}
          onClick={() => handleItemClick('Attributes')}
          isOpen={openItem === 'Attributes'}
          subItems={[
            { label: 'Order List', path: '/orders/list' },
            { label: 'Track Order', path: '/orders/track' },
          ]}
        /> */}

        {/* <SidebarItem
          label="Invoices"
          icon={<FaFileInvoice />}
          path="/invoices"
          isActive={activeItem === 'Invoices'}
          onClick={() => handleItemClick('Invoices')}
          isOpen={openItem === 'Invoices'}
          subItems={[
            { label: 'Order List', path: '/orders/list' },
            { label: 'Track Order', path: '/orders/track' },
          ]}
        /> */}
    </aside>
  )
}

export default Sidebar
