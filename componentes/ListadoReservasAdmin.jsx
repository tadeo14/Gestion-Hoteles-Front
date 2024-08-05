import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import pruebaApi from '../src/api/pruebaApi'; 

export const ListadoReservasAdmin = () => {
  const [reservas, setReservas] = React.useState([]);

  const getReservas = async () => {
    try {
      const resp = await pruebaApi.get('room/listadoReservas');
      setReservas(resp.data.listadoReservas);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getReservas();
  }, []);

  return (
    <>
      <h1 className="text-center my-4">Listado de Reservas</h1>
      <div className="table-responsive">
        <Table striped bordered hover className="table-custom">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Usuario</th>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva._id}>
                <td>{reserva._id}</td>
                <td>{reserva.usuario}</td>
                <td>{reserva.fechaInicio}</td>
                <td>{reserva.fechaFin}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ListadoReservasAdmin;
