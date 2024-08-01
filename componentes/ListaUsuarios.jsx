import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';

export const ListaUsuarios = () => {

    const getUsuario = async () => {
        try {
            const resp = await pruebaApi.get('admin/usuarios');
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsuario();
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
        </tbody>
      </Table>
    </>
  );
};
