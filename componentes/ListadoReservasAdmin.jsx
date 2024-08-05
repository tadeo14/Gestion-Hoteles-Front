import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';

export const ListadoReservasAdmin = () => {
    const [reservas, setReservas] = React.useState([]);

    const getReservas = async () => {
        try {
            const resp = await pruebaApi.get('room/listadoReservas');
            setReservas(resp.data.listadoReservas);
            //setHabitaciones(resp.data.);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getReservas();
    }, []);






  return (
    <>
      <h1>Listado de Reservas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Usuario</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            
          </tr>
        </thead>
                <tbody>
                  {reservas.map((reservas) => {
                      return (
                        <tr > 
                              <td>{reservas._id}</td>
                              <td>{reservas.usuario}</td>
                              <td>{reservas.fechaInicio}</td>
                              <td>{reservas.fechaFin}</td>
                          </tr>
                      )
                  })}
                </tbody>
      </Table>
    </>
  );
};

export default ListadoReservasAdmin;