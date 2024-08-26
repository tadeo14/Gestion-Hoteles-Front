import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Card } from 'react-bootstrap';
import pruebaApi from '../src/api/pruebaApi';
import Swal from 'sweetalert2';

export const ListaHabitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [show, setShow] = useState(false);
  const [numero, setNumero] = useState('');
  const [tipo, setTipo] = useState('');
  const [precio, setPrecio] = useState('');
  const [showEditar, setShowEditar] = useState(false);
  const [habitacionesEditar, setHabitacionesEditar] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getHabitaciones = async () => {
    try {
      const resp = await pruebaApi.get('admin/habitaciones');
      setHabitaciones(resp.data.habitaciones);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHabitaciones();
  }, []);

  const crearHabitacionBackend = async () => {
    try {
      const resp = await pruebaApi.post('/admin/crearHabitacion', {
        numero,
        tipo,
        precio,
      });
      Swal.fire({
        title: "Creación exitosa",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      getHabitaciones();
      handleClose();
      setNumero('');
      setTipo('');
      setPrecio('');
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data.mensaje || "Ocurrió un problema. Por favor, inténtalo de nuevo más tarde.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleCrearHabitacion = (e) => {
    e.preventDefault();
    crearHabitacionBackend();
  };

  const eliminarHabitacionClick = async (id) => {
    try {
      const resp = await pruebaApi.delete(`/admin/eliminarHabitacion/${id}`);
      Swal.fire({
        title: "Habitación eliminada",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      getHabitaciones();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un problema al eliminar la habitación.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const editarHabitacion = (habitaciones) => {
    setHabitacionesEditar(habitaciones);
    setShowEditar(true);
  };

  const handleChangeEditar = (propiedad, valor) => {
    setHabitacionesEditar({
      ...habitacionesEditar,
      [propiedad]: valor,
    });
  };

  const editarHabitacionesBackend = async (habitaciones) => {
    const { tipo, numero, precio, _id } = habitaciones;
    try {
      const resp = await pruebaApi.put(`/admin/editarHabitacion`, {
        tipo,
        numero,
        precio,
        _id
      });
      Swal.fire({
        title: "Habitación modificada",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      getHabitaciones();
      setShowEditar(false);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data.msg || 'Ocurrió un problema al actualizar la habitación.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  const handleEditarHabitacion = (e) => {
    e.preventDefault();
    editarHabitacionesBackend(habitacionesEditar);
  };

  return (
    <>
      <h1>Listado de Habitaciones</h1>
      <Button variant="primary" onClick={handleShow}>
        Nueva habitación
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear habitación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCrearHabitacion}>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Número de Habitación</Form.Label>
              <Form.Control
                type="number"
                placeholder="105"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Familiar"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="10000"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showEditar}>
        <Modal.Header>
          <Modal.Title>Editar habitación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditarHabitacion}>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Número de Habitación</Form.Label>
              <Form.Control
                type="number"
                placeholder="105"
                value={habitacionesEditar.numero}
                onChange={(e) => handleChangeEditar('numero', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Familiar"
                value={habitacionesEditar.tipo}
                onChange={(e) => handleChangeEditar('tipo', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="10000"
                value={habitacionesEditar.precio}
                onChange={(e) => handleChangeEditar('precio', e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowEditar(false)}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="d-flex flex-wrap justify-content-center">
        {habitaciones.map((habitacion) => (
          <Card key={habitacion._id} className="m-2" style={{ width: '18rem', flex: '1 1 calc(100% - 2rem)', maxWidth: '300px' }}>
            <Card.Img variant="top" src={`http://localhost:5173/public/images/${habitacion.imagen}`} alt={`Habitación ${habitacion.numero}`} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>Habitación {habitacion.numero}</Card.Title>
              <Card.Text>
                Tipo: {habitacion.tipo} <br />
                Precio: {habitacion.precio}
              </Card.Text>
              <Button variant="info" onClick={() => editarHabitacion(habitacion)} className='me-2'>Modificar</Button>
              <Button variant="danger" onClick={() => eliminarHabitacionClick(habitacion._id)}>Eliminar</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ListaHabitaciones;
