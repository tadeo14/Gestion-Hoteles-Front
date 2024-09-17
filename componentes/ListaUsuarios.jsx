import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import pruebaApi from '../src/api/pruebaApi';
import Button from 'react-bootstrap/Button';
import '../src/assets/ListaUsuarios.css'; 
import Swal from 'sweetalert2';
import { Modal, Form } from 'react-bootstrap';

export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [showEditar, setShowEditar] = useState(false);
  const [usuarioEditar, setUsuarioEditar] = useState({});

  const handleClose = () => setShowEditar(false);
  const handleShow = () => setShowEditar(true);

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

  const eliminarUsuarioClick = async (id) => {
    try {
      await pruebaApi.delete(`/admin/eliminarUsuario/${id}`);
      Swal.fire({
        title: "Usuario eliminado",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      getUsuarios();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un problema al eliminar el usuario.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }

  const editarUsuario = (usuario) => {
    setUsuarioEditar(usuario);
    setShowEditar(true);
  };

  const handleChangeEditar = (propiedad, valor) => {
    setUsuarioEditar({
      ...usuarioEditar,
      [propiedad]: valor,
    });
  };

  const handleEditarUsuario = (e) => {
    e.preventDefault();
    editarUsuarioBackend(usuarioEditar);
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
      getUsuarios();
      setShowEditar(false);
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
                placeholder="Contraseña"
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
