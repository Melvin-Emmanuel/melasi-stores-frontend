import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { ThemeProvider } from '@material-tailwind/react';
import { router } from './routes/AllRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { adminRouter } from './routes/Dashboard';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
   <ThemeProvider>
      <ToastContainer position='top-right' transition={Zoom} autoClose={2000}/>
      <RouterProvider router={adminRouter} />
      {/* <RouterProvider router={router} /> */}
    </ThemeProvider>
   </Provider>
  </StrictMode>,
)
