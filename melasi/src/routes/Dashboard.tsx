import { RouteObject, createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import { Suspense, lazy } from "react";
import Spinner from "../component/common/Spinner";

//lazyLoading pages
const Dashboard = lazy(()=> import("../pages/AdminPages/Dashboard"))
const Products = lazy(()=> import("../pages/AdminPages/Products"))
const Orders = lazy(()=> import("../pages/AdminPages/Orders"))
const Invoices = lazy(()=> import("../pages/AdminPages/Invoices"))
const List = lazy(()=> import('../component/adminComponent/Product/List'))
const Edit = lazy(()=> import('../component/adminComponent/Product/Edit'))
const Create = lazy(()=> import('../component/adminComponent/Product/Create'))
const Category = lazy(()=> import("../pages/AdminPages/Category"))
const ListCategory = lazy(()=> import('../component/adminComponent/Category/List'))
const EditCategory = lazy(()=> import('../component/adminComponent/Category/Edit'))
const CreateCategory = lazy(()=> import('../component/adminComponent/Category/Create'))
const OrderList = lazy(()=> import('../component/adminComponent/Order/OrderList'))
const OrderTrack = lazy(()=> import('../component/adminComponent/Order/Ordertrack'))

// /higher order component to wrap lazy component in suspense
const withSuspense = (Component: React.ComponentType)=>(
    <Suspense fallback={<Spinner/>}>
        <Component />
    </Suspense>
)

const routesConfig: RouteObject[]=[
    {
        path: "/",
        element: <AdminLayout/>,
        children: [
            {index: true, element: withSuspense(Dashboard)},
            {
                path: "admin/products",
                element: withSuspense(Products),
                children: [
                    {path: "list", element: withSuspense(List)},
                    {path: "edit", element: withSuspense(Edit)},
                    {path: "create", element: withSuspense(Create)},
                ]
            },
            {
                path: "admin/category",
                element: withSuspense(Category),
                children: [
                    {path: "list", element: withSuspense(ListCategory)},
                    {path: "edit", element: withSuspense(EditCategory)},
                    {path: "create", element: withSuspense(CreateCategory)},
                ]
            },
            {
                path: "admin/orders",
                element: withSuspense(Orders),
                children: [
                    {path: "list", element: withSuspense(OrderList)},
                    {path: "track/:id", element: withSuspense(OrderTrack)},
                ]
            },
            {
                path: "admin/invoices",
                element: withSuspense(Invoices),
            },
            {path: "*", element: withSuspense(Dashboard)} //fallback routes
        ]
    }
]

export const adminRouter = createBrowserRouter(routesConfig)
