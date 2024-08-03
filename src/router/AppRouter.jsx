import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../pages/Login.jsx";
import Registro from "../pages/Registro.jsx";
<<<<<<< HEAD
import Home from "../pages/Home.jsx";
=======
import { Admin } from "../pages/Admin.jsx";
>>>>>>> externa


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} /> 
<<<<<<< HEAD
        <Route path="/home" element={<Home />} />
=======
        <Route path="/admin" element={<Admin />} />
      
>>>>>>> externa
      </Routes>
    </Router>
  );
};

export default AppRouter;
