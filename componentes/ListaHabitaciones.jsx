import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';
import { useState } from 'react';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';


export const ListaHabitaciones = () => {
  const [habitaciones, setHabitaciones] = React.useState([]);
  const [show, setShow] = useState(false);
  const [numero, setNumero] = useState('')
  const [tipo, setTipo] = useState('')
  const [precio, setPrecio] = useState('')
  const [showEditar, setShowEditar] = useState(false);
  const [habitacionesEditar, setHabitacionesEditar] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const getHabitaciones = async () => {
        try {
            const resp = await pruebaApi.get('admin/habitaciones');
            setHabitaciones(resp.data.habitaciones);
            //setHabitaciones(resp.data.);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHabitaciones();
    }, []);
  
  
  
  //funcion que envia la habitacion al backend
  const crearHabitacionBackend = async () => {
    try {
      const resp = await pruebaApi.post('/admin/crearHabitacion', {
        numero,
        tipo,
        precio,
      });
      Swal.fire({
        title: "Creacion exitosa",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      
      getHabitaciones(); // Actualizar la lista de habitaciones
      handleClose(); // Cerrar el modal después de la creación
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "Error",
          text:
            error.response.data.mensaje || "Correo o contraseña incorrectos.",
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
//funcion encargada de ejecutar el submit
const handleCrearHabitacion = (e) => {
  e.preventDefault();
  crearHabitacionBackend();
};

  const eliminarHabitacionClick = async (id) => {
    try {
      const resp = await pruebaApi.delete(`/admin/eliminarHabitacion/${id}`);
      console.log(resp);
      Swal.fire({
        title: "Habitación eliminada",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      getHabitaciones(); // Actualizar la lista de habitaciones después de la eliminación
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Ocurrió un problema al eliminar la habitación.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }
//funcion que modificara la habitacion
const editarHabitacion = async (habitaciones) => {
  try {
    setHabitacionesEditar(habitaciones)
    // const resp = await pruebaApi.put(`/admin/editarHabitacion/${habitaciones._id}`, {
      
      // numero: habitaciones.numero,
      // tipo: habitaciones.tipo,
      // precio: habitaciones.precio,
    // });
    setShowEditar(true);

    Swal.fire({
      title: "Habitación modificada",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    getHabitaciones(); // Actualizar la lista de habitaciones después de la modificación
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error",
      text: "Ocurrió un problema al modificar la habitación.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
}




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
                Close
              </Button>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* modal editar habitacion */}
      <Modal show={showEditar} >
        <Modal.Header closeButton>
          <Modal.Title>Editar habitacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Número de Habitación</Form.Label>
              <Form.Control
                type="number"
                placeholder="105"
                value={habitacionesEditar.numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Familiar"
                value={habitacionesEditar.tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="10000"
                value={habitacionesEditar.precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={()=> setShowEditar(false)}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Numero</th>
            <th>Precio</th>
            <th>Tipo</th>
            
          </tr>
        </thead>
                <tbody>
                  {habitaciones.map((habitaciones) => {
                      return (
                          <tr>
                            <td>{habitaciones._id}</td>
                            <td>{habitaciones.numero}</td>
                            <td>{habitaciones.precio}</td>
                          <td>{habitaciones.tipo}</td>
                          <td>
                          <img src={`http://localhost:5173/public/images/${habitaciones.imagen}`} alt={`Habitación ${habitaciones.numero}`} style={{ width: '100px', height: 'auto' }} />
                          </td>
                          <td>
                          <button onClick={()=>editarHabitacion(habitaciones)} className='btn btn-info'>Modificar</button>
                          <button onClick={() => eliminarHabitacionClick(habitaciones._id)} className='btn btn-danger'>Eliminar</button>
                          </td>
                          </tr>
                      )
                  })}
                </tbody>
      </Table>
    </>
  );
};

export default ListaHabitaciones;