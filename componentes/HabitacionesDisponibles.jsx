import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Table } from 'react-bootstrap';

const FiltroHabitaciones = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [habitaciones, setHabitaciones] = useState([]);

  const handleBuscar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:4000/api/habitaciones-disponibles', {
        params: {
          fechaInicio,
          fechaFin,
        },
      });
      setHabitaciones(response.data.habitaciones);
    } catch (error) {
      console.error('Error al buscar habitaciones disponibles:', error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleBuscar}>
        <Form.Group controlId="fechaInicio">
          <Form.Label>Fecha Inicio</Form.Label>
          <Form.Control
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="fechaFin">
          <Form.Label>Fecha Fin</Form.Label>
          <Form.Control
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Numero</th>
            <th>Precio</th>
            <th>Tipo</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {habitaciones.map((habitacion) => (
            <tr key={habitacion._id}>
              <td>{habitacion.numero}</td>
              <td>{habitacion.precio}</td>
              <td>{habitacion.tipo}</td>
              <td>
                <img
                  src={`http://localhost:5173/public/images/${habitacion.imagen}`}
                  alt={`Habitación ${habitacion.numero}`}
                  style={{ width: '100px', height: 'auto' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FiltroHabitaciones;
