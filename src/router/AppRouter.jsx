import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../pages/Login.jsx";
import Registro from "../pages/Registro.jsx";
import Home from "../pages/Home.jsx";
import Navbar from "../pages/Navbar.jsx"
import Error404 from "../pages/Error404.jsx";
import { Admin } from "../pages/Admin.jsx";
import {Usuario} from "../pages/Usuario.jsx"

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} /> 
        <Route path="*" element={<Error404 />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/usuario" element={<Usuario />}/>
      
      </Routes>
    </Router>
  );
};

export default AppRouter;
