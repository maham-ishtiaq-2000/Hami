import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductDataProvider } from './context/index';
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
<ProductDataProvider>
    <Router>
     <AppRoutes />
  </Router>
    <ToastContainer />
  </ProductDataProvider>
)
