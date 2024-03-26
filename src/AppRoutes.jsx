import React from "react";
import RequireAuth from './authentication/RequireAuth';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductManagement from "./pages/ProductManagement";
import OrderPage from "./pages/OrderPage";
import History from "./pages/History";
import Settings from "./pages/Settings";

const AppRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/ProductManagement" element={<RequireAuth><ProductManagement /></RequireAuth>} />
            <Route path="/History" element={<RequireAuth><History /></RequireAuth>} />
            <Route path="/Settings" element={<RequireAuth><Settings /></RequireAuth>} />
            <Route path="/orderPage" element={<RequireAuth><OrderPage /></RequireAuth>}></Route>
        </Routes>
    );
};

export default AppRoutes;
