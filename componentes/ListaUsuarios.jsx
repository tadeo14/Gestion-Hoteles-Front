import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';

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






  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            
          </tr>
        </thead>
                <tbody>
                  {usuarios.map((usuario) => {
                      return (
                          <tr>
                              <td>{usuario._id}</td>
                              <td>{usuario.nombre}</td>
                              <td>{usuario.email}</td>
                          </tr>
                      )
                  })}
                </tbody>
      </Table>
    </>
  );
};
