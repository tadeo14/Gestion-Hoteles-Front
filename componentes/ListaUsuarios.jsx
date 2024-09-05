import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import pruebaApi from '../src/api/pruebaApi';
import Button from 'react-bootstrap/Button';
import '../src/assets/ListaUsuarios.css'; 
import Swal from 'sweetalert2';
import { Modal, Form } from 'react-bootstrap';


export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = React.useState([]);
  //creamos los estados para podes almacenar los valores que recolecta el input
  // const[nombre, setNombre]  = 

  //estado que sirve para mostrar y cerrar el modal
  const [showEditar, setShowEditar] = useState(false)
  //estado para almacenar los valores
  const [usuarioEditar, setUsuarioEditar] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getUsuarios = async () => {
    try {
      const resp = await pruebaApi.get('admin/usuarios');
      setUsuarios(resp.data.listaUsuarios);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  //funcion encargada de elimar usuario
  const eliminarUsuarioClick = async (id) => {
    try {
      console.log(id)
    } catch (error) {
      
    }
  }
//Funcion para editar producto

  const editarUsuario = (usuario) => {
    
    setUsuarioEditar(usuario);
    setShowEditar(true);
  };

  //funcion para ir obteniendo los valores que va escribiendo en el input
  const handleChangeEditar = (propiedad, valor) => {
    setShowEditar(true);
    setUsuarioEditar(
      {
        ...usuarioEditar,
        [propiedad]: valor,
      }
    );

  };

  //cuando el usuario apriete guardar se ejecutara la siguiente funcion
  const handleEditarUsuario = (e) => {
    e.preventDefault();
    editarUsuarioBackend(usuarioEditar); // Llamamos a la función para editar el usuario en el backend
    
  }

  const editarUsuarioBackend = async (usuario) => {
    const { nombre, email, contraseña, _id } = usuario;
    try {
      await pruebaApi.put(`/admin/editarUsuario`, {
        _id,
        nombre,
        email,
        contraseña,
      });
      Swal.fire({
        title: 'Usuario modificado',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
      getUsuarios(); // Recargamos la lista de usuarios
      setShowEditar(false); // Cerramos el modal
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data.msg || 'Ocurrió un problema al actualizar el usuario.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <>
      
      {/* Modal para editar usuarios */}
      <Modal show={showEditar} onHide={() => setShowEditar(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditarUsuario}>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditar.nombre}
                onChange={(e) => handleChangeEditar('nombre', e.target.value)}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tipo">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={usuarioEditar.email}
                onChange={(e) => handleChangeEditar('email', e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="10000"
                onChange={(e) => handleChangeEditar('contraseña', e.target.value)}
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


      <h1 className="text-center my-4">Listado de Usuarios</h1>
      <div className="table-responsive">
        <Table striped bordered hover className="table-custom">
          <thead className="thead-dark">
            <tr>
              <th>Id usuarios</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => {
              return (
                <tr key={usuario._id}>
                  <td>{usuario._id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>
                  
                <Button 
                  variant="info" 
                  onClick={() => editarUsuario(usuario)} 
                >
                  Modificar
                </Button>
                <Button 
                  variant="danger" 
                  onClick={() => eliminarUsuarioClick(usuario._id)}
                >
                  Eliminar
                </Button>
              
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ListaUsuarios;
