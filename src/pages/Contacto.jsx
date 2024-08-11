import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "../assets/Contacto.css";

export const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleContacto = (e) => {
    e.preventDefault();

    // Validaciones
    if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
      Swal.fire({
        title: "Error",
        text: "Todos los campos son obligatorios.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else if (mensaje.length < 13) {
      Swal.fire({
        title: "Error",
        text: "El mensaje tiene que ser mayor a 13 letras",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Enviado",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className='contacto-background'>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className='w-100'>
          <Col md={6} className="mb-4">
            <div className="info-contacto">
              <h1>Contacto</h1>
            </div>
            <div className='form-container'>
              <Form onSubmit={handleContacto}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="number" placeholder="Ingrese su número de teléfono" onChange={(e) => setTelefono(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Ingrese su mensaje" onChange={(e) => setMensaje(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                <i class="bi bi-send-fill"></i>
                  Enviar
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className='mapaContenedor'>
              <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6054546075256!2d-65.20457872528097!3d-26.820688689363788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c22a9466e13%3A0xfac3a336eeb51b0b!2s25%20de%20Mayo%20777%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1722839286466!5m2!1ses!2sar" width="100%" height="400" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
              <p>
                <i className="bi bi-geo-alt-fill"></i> 25 de Mayo 777, San Miguel de Tucumán - Tucumán - Argentina
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +54 3819973597
              </p>
              <p>
                <i class="bi bi-buildings-fill"></i> Hotel Rolling
              </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contacto;