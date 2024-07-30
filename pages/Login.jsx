import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

 const loginBackend = async (email, contraseña) =>{
      try {
        const resp = await pruebaApi.post("/auth/login", {
          email,
          contraseña,
        })
        
      } catch(error){

      }
 }
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleContraseña = (e) => {
    setContraseña(e.target.value);
  };

  // Validaciones

  const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarEmail(email)) {
      console.log("Email:", email);
      console.log("Contraseña:", contraseña);

      Swal.fire({
        title: "Inicio de sesión exitoso",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });    
// alerta de correo invalido      
    } else {
      Swal.fire({
        title: "Error",
        text: "Por favor, ingrese un correo electrónico válido.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleRegistro = () => {
    navigate("/registro");
    
    loginBackend(email,contraseña)
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
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
              Iniciar Sesion
            </Button>
            <Button
              variant="secondary"
              onClick={handleRegistro}
              className="w-100 mt-2"
            >
              Registrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

