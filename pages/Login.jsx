import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const manejarCambioEmail = (e) => {
    setEmail(e.target.value);
  };

  const manejarCambioContraseña = (e) => {
    setContraseña(e.target.value);
  };

  const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarEmail(email)) {
      console.log('Email:', email);
      console.log('Contraseña:', contraseña);

      // Se muestra una alerta de un exitoso inicio de sesión 
      Swal.fire({
        title: 'Inicio de sesión exitoso',
        text: 'Has iniciado sesión correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      
    } else {
      // Se muestra una alerta de error si el correo electrónico es inválido
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingrese un correo electrónico válido.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
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
                onChange={manejarCambioEmail}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={contraseña}
                onChange={manejarCambioContraseña}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Iniciar Sesion
            </Button>
            <p className="text-center mt-3">
              Si no está registrado, <a href="./registro">haga clic aquí</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;