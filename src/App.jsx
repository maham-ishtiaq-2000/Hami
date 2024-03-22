import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductDataProvider } from './context/index';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from './AppRoutes';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ProductDataProvider>
    <Router>
     <AppRoutes />
  </Router>
    <ToastContainer />
  </ProductDataProvider>
);

