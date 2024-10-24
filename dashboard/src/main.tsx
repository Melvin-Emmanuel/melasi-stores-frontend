import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, RouterProvider} from "react-router-dom"
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { ThemeProvider } from '@material-tailwind/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import DashboardRoutes from './routes/Dashboard';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
    <ThemeProvider>
      <ToastContainer position='top-right' transition={Zoom} autoClose={2000}/>
      <BrowserRouter>
      <AdminLayout>
          <DashboardRoutes/>
        </AdminLayout>
      </BrowserRouter>
    </ThemeProvider>
   </Provider>
  </StrictMode>,
)
