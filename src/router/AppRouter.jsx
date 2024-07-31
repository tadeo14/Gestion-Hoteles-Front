import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../pages/Login.jsx";
import Registro from "../pages/Registro.jsx";
import { Nav } from "../pages/Nav.jsx";
import ListaHabitaciones  from "../pages/ListaHabitaciones.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/habitaciones" element={<ListaHabitaciones />} />
      
      </Routes>
    </Router>
  );
};

export default AppRouter;
