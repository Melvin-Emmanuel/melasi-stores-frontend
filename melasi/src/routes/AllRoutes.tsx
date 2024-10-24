import React, { Suspense, lazy } from "react"
import Spinner from "../component/common/Spinner"
import { RouteObject, createBrowserRouter } from "react-router-dom"
import WebLayout from "../layout/WebLayout"

//lazyloading pages
const Home = lazy(() => import("../pages/Home"))
const Cart = lazy(() => import("../pages/Cart"))
const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Product = lazy(() => import("../pages/Product"))
const ProductDetails = lazy(() => import("../pages/ProductDetails"))
const History = lazy(() => import("../pages/History"))
// const Fakeproduct = lazy(() => import("../loginFake/Productss"))
const Checkout = lazy(() => import("../pages/Checkout"))
const OrderConfirmation = lazy(() => import("../pages/OrderConfirmation"))

//higher order component to wrap lazy component in suspense
const withSuspense = (Component: React.ComponentType)=>(
    <Suspense fallback={<Spinner/>}>
        <Component />
    </Suspense>
)

//routes configuration
const routesConfig: RouteObject[] = [
    {
        path: "/",
        element: <WebLayout/>,
        children: [
            {index: true, element: withSuspense(Home)},
            {path: "/cart", element: withSuspense(Cart)},
            {path: "/product", element: withSuspense(Product)},

        ]
    },
    { path: "login", element: withSuspense(Login) },
    { path: "register", element: withSuspense(Register) },
    { path: "history", element: withSuspense(History) },
  { path: "orderconfirm", element: withSuspense(OrderConfirmation) },
  { path: "checkout", element: withSuspense(Checkout) },
  {path: "/product/:id", element: withSuspense(ProductDetails)},
//   { path: "fakeproduct", element: withSuspense(Fakeproduct) },
//   { path: "/product/mycart", element: withSuspense(MyCart) },
]

//export router
export const router = createBrowserRouter(routesConfig)
