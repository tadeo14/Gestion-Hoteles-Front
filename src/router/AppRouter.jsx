import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../pages/Login.jsx";
import Registro from "../pages/Registro.jsx";
import Home from "../pages/Home.jsx";
<<<<<<< HEAD
import AdminPage from "../pages/AdminPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import PrivateRouteAdmin from "../routes/PrivateRouteAdmin.js";
import PrivateRoute from "../routes/PrivateRoute.js";
=======
import Navbar from "../pages/Navbar.jsx"
>>>>>>> f7d1eb9f99dd4a955b7a555a2f9e5baa55fc01ca


const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} /> 
<<<<<<< HEAD
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
=======
>>>>>>> f7d1eb9f99dd4a955b7a555a2f9e5baa55fc01ca
      </Routes>
    </Router>
  );
};

export default AppRouter;
