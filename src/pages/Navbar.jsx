import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/Navbar.css";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, userRole, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReservationsClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault(); // Previene la navegación
      Swal.fire({
        title: "Acceso Denegado",
        text: "Debes iniciar sesión para acceder a las reservas.",
        icon: "warning",
        confirmButtonText: "Iniciar Sesión",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login"); // Redirige al usuario a la página de inicio de sesión
        }
      });
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Hotel Rolling
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/usuario"
                onClick={handleReservationsClick}
              >
                RESERVAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                CONTACTO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">
                GALERIA
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                NOSOTROS
              </Link>
            </li>
            {isAuthenticated && userRole === "Admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Administración
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <button className="btn btn-logout" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
