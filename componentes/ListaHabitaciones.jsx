import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';

export const ListaHabitaciones = () => {
    const [habitaciones, setHabitaciones] = React.useState([]);

    const getHabitaciones = async () => {
        try {
            const resp = await pruebaApi.get('admin/habitaciones');
            console.log(resp.data.habitaciones);
            //setHabitaciones(resp.data.);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHabitaciones();
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
                {/* <tbody>
                  {usuarios.map((usuario) => {
                      return (
                          <tr>
                              <td>{usuario._id}</td>
                              <td>{usuario.nombre}</td>
                              <td>{usuario.email}</td>
                          </tr>
                      )
                  })}
                </tbody> */}
      </Table>
    </>
  );
};

export default ListaHabitaciones;