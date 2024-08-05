import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';

export const ListadoReservasUsuario = ({usuario}) => {
    const [reservas, setReservas] = React.useState([]);

    const getReservas = async () => {
        try {
           
            const resp = await pruebaApi.get(`room/listadoReservas/${usuario}`);
            setReservas(resp.data.listadoReservas);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (usuario) {
            getReservas();
        }
        
    }, [usuario]);






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

const cancelarReserva = async (id) => {
  try {
    const resp = await pruebaApi.delete(`/room/reservas/${id}`);
    console.log(resp);
    Swal.fire({
      title: "Habitación eliminada",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    getHabitaciones(); // Actualizar la lista de habitaciones después de la eliminación
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Error",
      text: "Ocurrió un problema al eliminar la habitación.",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
}
export default ListadoReservasUsuario;