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
  };

  useEffect(() => {
    getReservas();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses de 0 a 11, así que sumamos 1
    const day = String(date.getDate()).padStart(2, '0'); // Asegura que el día tenga dos dígitos
    return `${year}-${month}-${day}`;
  };

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
                <td>{formatDate(reserva.fechaInicio)}</td> {/* Usa formatDate para formatear la fecha */}
                <td>{formatDate(reserva.fechaFin)}</td> {/* Usa formatDate para formatear la fecha */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ListadoReservasAdmin;
