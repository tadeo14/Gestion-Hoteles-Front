import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import pruebaApi from '../api/pruebaApi';
import Swal from 'sweetalert2';
import "../assets/Registro.css";

export const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const navigate = useNavigate(); // Usa useNavigate

  const registroBackend = async (nombre, email, contraseña, confirmarContraseña) => {
    try {
      const resp = await pruebaApi.post("/auth/registro", {
        nombre,
        email,
        contraseña,
        confirmarContraseña,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario Creado",
        showConfirmButton: false,
        timer: 1500
      });

      // Después de una inscripción exitosa, redirige al usuario
      navigate('/'); // Redirige a Home.jsx o la ruta que corresponda
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.mensaje,
        });
      } else if (error.response.status === 500) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Contactarse con un administrador",
        });
      }
    }
  };

  const handleRegistro = (e) => {
    e.preventDefault();

    // Validaciones
    if (nombre === '' || email === '' || contraseña === '' || confirmarContraseña === '') {
      Swal.fire({
        title: "Error",
        text: "Todos los campos son obligatorios.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else if (contraseña.length < 5) {
      Swal.fire({
        title: "Error",
        text: "La contraseña debe ser mayor a 5.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else if (contraseña !== confirmarContraseña) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas deben ser iguales.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      registroBackend(nombre, email, contraseña, confirmarContraseña);
    }
  };

  return (
    <div className='Registro-background'>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className='w-100'>
          <div className='form-container'>
            <h2 className="text-center">Registro</h2>
            <Form onSubmit={handleRegistro}>
              <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="escribir contraseña" onChange={(e) => setContraseña(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control type="password" placeholder="confirmar contraseña" onChange={(e) => setConfirmarContraseña(e.target.value)} />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Registrarse
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Registro;
