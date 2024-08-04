import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../pages/Login.jsx";
import Registro from "../pages/Registro.jsx";
import Home from "../pages/Home.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import PrivateRouteAdmin from "../routes/PrivateRouteAdmin.js";
import PrivateRoute from "../routes/PrivateRoute.js";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/home" element={<Home />} />
        <Route
                path="/admin"
                element={
                  <PrivateRouteAdmin>
                    <AdminPage />
                  </PrivateRouteAdmin>
                }
              />
         <Route
                path="/users"
                element={
                  <PrivateRoute>
                    <UserPage />
                  </PrivateRoute>
                }
              />
      </Routes>
    </Router>
  );
};

export default AppRouter;
