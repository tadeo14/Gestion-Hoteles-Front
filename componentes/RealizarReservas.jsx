import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import pruebaApi from '../src/api/pruebaApi';

const FormularioReserva = () => {
  const [habitacionId, setHabitacionId] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtener el usuarioId del localStorage
    const usuarioId = localStorage.getItem('usuarioId');

    if (!usuarioId) {
      setError('No se encontró el ID de usuario.');
      return;
    }

    try {
      const response = await pruebaApi.post('/room/reservas', {
        usuarioId,
        habitacionId,
        fechaInicio,
        fechaFin,
      });

      setMensaje(response.data.message);
      setError(null);
    } catch (error) {
      setError(error.response.data.message || 'Error al realizar la reserva');
      setMensaje(null);
    }
  };

  return (
    <div>
      <h2>Realizar Reserva</h2>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="habitacionId">
          <Form.Label>ID de Habitación</Form.Label>
          <Form.Control
            type="text"
            value={habitacionId}
            onChange={(e) => setHabitacionId(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="fechaInicio">
          <Form.Label>Fecha de Inicio</Form.Label>
          <Form.Control
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="fechaFin">
          <Form.Label>Fecha de Fin</Form.Label>
          <Form.Control
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Reservar
        </Button>
      </Form>
    </div>
  );
};

export default FormularioReserva;
