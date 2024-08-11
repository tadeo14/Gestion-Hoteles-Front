import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import pruebaApi from "../api/pruebaApi";
import { AuthContext } from "../context/AuthContext";
import "../assets/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginBackend = async (email, contraseña) => {
    try {
      const resp = await pruebaApi.post("/auth/login", { email, contraseña });

      const { token, rol } = resp.data;

      Swal.fire({
        title: "Inicio de sesión exitoso",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      login(token, rol);

      if (rol === "Admin") {
        navigate("/Admin");
      } else {
        navigate("/Usuario");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "Error",
          text: error.response.data.mensaje || "Correo o contraseña incorrectos.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        
      } else {
        Swal.fire({
          title: "Error",
          text: "Ocurrió un problema. Por favor, inténtalo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    }
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handleContraseña = (e) => setContraseña(e.target.value);

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!email || !contraseña) {
      Swal.fire({
        title: "Error",
        text: "Todos los campos son obligatorios.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else if (!validarEmail(email)) {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingrese un correo electrónico válido.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      loginBackend(email, contraseña);
    }
  };

  const handleRegistro = () => navigate("/registro");

  return (
    <div className="login-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col md={4}>
            <div className="form-container">
              <h2 className="text-center">Login</h2>
              <Form onSubmit={manejarEnvio}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo"
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={contraseña}
                    onChange={handleContraseña}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Iniciar sesión
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleRegistro}
                  className="w-100 mt-2"
                >
                  Registrar
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
