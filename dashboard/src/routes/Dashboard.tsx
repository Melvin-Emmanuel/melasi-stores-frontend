import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Dashboard = React.lazy(()=> import("../pages/Dashboard"))
const Products = React.lazy(()=> import("../pages/Products"))
const Orders = React.lazy(()=> import("../pages/Orders"))
const List = React.lazy(()=> import('../component/Product/List'))
const Edit = React.lazy(()=> import('../component/Product/Edit'))
const Create = React.lazy(()=> import('../component/Product/Create'))
const Category = React.lazy(()=> import("../pages/Category"))
const ListCategory = React.lazy(()=> import('../component/Category/List'))
const EditCategory = React.lazy(()=> import('../component/Category/Edit'))
const CreateCategory = React.lazy(()=> import('../component/Category/Create'))
const OrderList = React.lazy(()=> import('../component/Order/OrderList'))
const OrderTrack = React.lazy(()=> import('../component/Order/Ordertrack'))


const DashboardRoutes = () => {
  return (
    <React.Suspense>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/products/' element={<Products/>}>
                <Route path='list' element={<List/>}/>
                <Route path='edit' element={<Edit/>}/>
                <Route path='create' element={<Create/>}/>
            </Route>
            <Route path='/category/' element={<Category/>}>
                <Route path='list' element={<ListCategory/>}/>
                <Route path='edit' element={<EditCategory/>}/>
                <Route path='create' element={<CreateCategory/>}/>
            </Route>
            <Route path='/orders/' element={<Orders/>}>
                <Route path='list' element={<OrderList/>}/>
                <Route path='track' element={<OrderTrack/>}/>
            </Route>
            <Route path='/*' element={<Dashboard/>}/>
        </Routes>
    </React.Suspense>
  )
}

export default DashboardRoutes
