import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';

export const ListaHabitaciones = () => {
    const [habitaciones, setHabitaciones] = React.useState([]);

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






  return (
    <>
      <h1>Listado de Habitaciones</h1>
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
                          </tr>
                      )
                  })}
                </tbody>
      </Table>
    </>
  );
};

export default ListaHabitaciones;