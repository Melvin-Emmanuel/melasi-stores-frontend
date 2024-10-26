import React, { useState } from 'react'
import { FaShoppingBasket, FaBox, FaLock, FaClipboardList, FaTags, FaFileInvoice } from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import {useNavigate } from 'react-router-dom';


const Sidebar:React.FC = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const [openItem, setOpenItem] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleItemClick = (label: string) =>{
        setActiveItem(label)
        setOpenItem((prev)=> (prev === label ? null : label))
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
            path='#'
            isActive={activeItem === "Dashboard"}
            onClick={()=> { handleItemClick("Dashboard");
                            navigate("/")}}
            isOpen={openItem === "Dashboard"}
            />

        <SidebarItem
          label="Products"
          icon={<FaShoppingBasket />}
          path='#'
          isActive={activeItem === "Products"}
          onClick={()=> handleItemClick("Products")}
          isOpen={openItem === "Products"}
          subItems={[
            { label: 'List', path: 'admin/products/list' },
            { label: 'Edit', path: 'admin/products/edit' },
            { label: 'Create', path: 'admin/products/create' },
          ]}
        />

        <SidebarItem
          label="Category"
          icon={<FaBox />}
          path='#'
          isActive={activeItem === "Category"}
          onClick={()=> handleItemClick("Category")}
          isOpen={openItem === "Category"}
          subItems={[
            { label: 'List', path: 'admin/category/list' },
            { label: 'Edit', path: 'admin/category/edit' },
            { label: 'Create', path: 'admin/category/create' },
          ]}
        />

        {/* <SidebarItem
          label="Inventory"
          icon={<FaClipboardList />}
          path='#'
          isActive={activeItem === "Inventory"}
          onClick={()=> handleItemClick("Inventory")}
          isOpen={openItem === "Inventory"}
          subItems={[
            { label: 'Stock', path: '/inventory/stock' },
            { label: 'Warehouse', path: '/inventory/warehouse' },
          ]}
        /> */}
         <SidebarItem
          label="Orders"
          icon={<FaLock />}
          subItems={[
            { label: 'Order List', path: 'admin/orders/list' },
            { label: 'Track Order', path: 'admin/orders/track' },
          ]}
          isActive={activeItem === 'Orders'}
          onClick={() => handleItemClick('Orders')}
          isOpen={openItem === 'Orders'}
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
