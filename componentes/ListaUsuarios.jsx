import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import pruebaApi from '../src/api/pruebaApi';
import Button from 'react-bootstrap/Button';
import '../src/assets/ListaUsuarios.css'; 

export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = React.useState([]);

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

  return (
    <>
      <h1 className="text-center my-4">Listado de Usuarios</h1>
      <div className="table-responsive">
        <Table striped bordered hover className="table-custom">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
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
                    <Button variant="info" className="me-2">Editar</Button>
                    <Button variant="danger" onClick={() => eliminarUsuarioClick(usuario._id)}>Eliminar</Button>
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
