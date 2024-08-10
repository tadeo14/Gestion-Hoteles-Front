import React from 'react'
import "../assets/Footers.css"
import { NavLink }  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Footers = () => {
  return (
    <div className='footers-background'>
      <footer className="py-3">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-body-secondary text-center">
              <i className="bi bi-house-door-fill"></i> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacto" className="nav-link px-2 text-body-secondary text-center">
              <i className="bi bi-telephone-fill"></i> Contacto
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/galeria" className="nav-link px-2 text-body-secondary text-center">
              <i className="bi bi-image-fill"></i> Galería
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/nosotros" className="nav-link px-2 text-body-secondary text-center">
              <i className="bi bi-people-fill"></i> Nosotros
            </NavLink>
          </li>
        </ul>
        <p className="text-center text-body-secondary">&copy; 2024, Hotel Rolling</p>
      </footer>
    </div>
  );
};