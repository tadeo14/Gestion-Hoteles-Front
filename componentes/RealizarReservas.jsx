import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import { jwtDecode } from "jwt-decode";
import pruebaApi from '../src/api/pruebaApi';
import './FormularioReserva.css'; // Asegúrate de importar el CSS actualizado

const FormularioReserva = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [habitaciones, setHabitaciones] = useState([]);
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const getHabitaciones = async () => {
    try {
      const resp = await pruebaApi.get('admin/habitaciones');
      setHabitaciones(resp.data.habitaciones);
    } catch (error) {
      console.log(error);
      setError('Error al cargar las habitaciones.');
    }
  };

  useEffect(() => {
    getHabitaciones();
  }, []);

  const handleBuscar = (e) => {
    e.preventDefault();

    // Validar las fechas
    if (new Date(fechaFin) <= new Date(fechaInicio)) {
      setError('La fecha de fin debe ser posterior a la fecha de inicio.');
      return;
    }

    // Filtrar habitaciones disponibles según las fechas
    const habitacionesDisponibles = habitaciones.filter(habitacion => {
      // Aquí estamos simulando que todas las habitaciones están disponibles
      return true; 
    });

    setHabitaciones(habitacionesDisponibles);
    setMensaje(`Se encontraron ${habitacionesDisponibles.length} habitaciones disponibles.`);
    setError(null);
  };

  const handleReserva = async (habitacionId) => {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');

    // Decodificar el token y obtener el usuarioId
    let usuarioId;
    try {
      const decodedToken = jwtDecode(token);
      usuarioId = decodedToken.id;
    } catch (error) {
      console.error('Error al decodificar el token', error);
      setError('No se pudo decodificar el token.');
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
      setError(error.response?.data?.message || 'Error al realizar la reserva');
      setMensaje(null);
    }
  };

  return (
    <div>
      <h2>Realizar Reserva</h2>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleBuscar}>
        <Row className="mb-3">
          <Col xs={12} md={12} className="mb-2">
            <Form.Group controlId="fechaInicio">
              <Form.Label style={{ fontWeight: 'bold' }}>Fecha de Inicio</Form.Label>
              <Form.Control
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                required
                className="form-date"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={12} className="mb-2">
            <Form.Group controlId="fechaFin">
              <Form.Label style={{ fontWeight: 'bold' }}>Fecha de Fin</Form.Label>
              <Form.Control
                type="date"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
                required
                className="form-date"
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="mb-2">
            <Button variant="primary" type="submit" className="btn-buscar">
              Buscar Habitaciones Disponibles
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="mt-4 d-flex flex-wrap justify-content-center">
        {habitaciones.map((habitacion) => (
          <Card key={habitacion._id} className="card-habitacion">
            <Card.Img className="card-img" src={`/images/${habitacion.imagen}`} alt={`Habitación ${habitacion.numero}`} />
            <Card.Body>
              <Card.Title>Habitación {habitacion.numero}</Card.Title>
              <Card.Text>
                Tipo: {habitacion.tipo}<br />
                Precio: ${habitacion.precio}
              </Card.Text>
              <Button variant="success" onClick={() => handleReserva(habitacion._id)}>
                Reservar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FormularioReserva;
