import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import pruebaApi from '../src/api/pruebaApi';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

export const ListadoReservasUsuario = () => {
    const [reservas, setReservas] = React.useState([]);
    const [error, setError] = React.useState(null);

    const getReservas = async () => {
        // Obtener el token del localStorage
        const token = localStorage.getItem('token');

        // Decodificar el token y obtener el usuarioId
        let usuarioId;
        try {
            const decodedToken = jwtDecode(token);
            usuarioId = decodedToken.id;
        } catch (error) {
            console.error('Error al decodificar el token', error);
            setError('No se pudo decodificar el token.');
            return;
        }

        if (!usuarioId) {
            console.log(usuarioId);
            setError('No se encontró el ID de usuario.');
            return;
        }

        try {
            console.log(`Llamando a la API con usuarioId: ${usuarioId}`);
            const resp = await pruebaApi.get(`/room/listadoReservas/${usuarioId}`);
            console.log("Respuesta de la API:", resp.data);
            setReservas(resp.data.listadoReservas);
        } catch (error) {
            console.error('Error al obtener las reservas:', error);
            setError('Error al obtener las reservas');
        }
    };

    useEffect(() => {
        getReservas();
    }, []);

    const cancelarReserva = async (id) => {
        try {
            const resp = await pruebaApi.delete(`/room/reservas/${id}`);
            console.log(resp);
            Swal.fire({
                title: "Reserva eliminada",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
            getReservas(); // Actualizar la lista de reservas después de la eliminación
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error",
                text: "Ocurrió un problema al eliminar la reserva.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses de 0 a 11, así que sumamos 1
        const day = String(date.getDate()).padStart(2, '0'); // Asegura que el día tenga dos dígitos
        return `${year}-${month}-${day}`;
    };

    return (
        <>
            <h1>Listado de Reservas</h1>
            {error && <p>{error}</p>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva) => (
                        <tr key={reserva._id}>
                            <td>{reserva._id}</td>
                            <td>{reserva.usuario}</td>
                            <td>{formatDate(reserva.fechaInicio)}</td> {/* Formatea la fecha de inicio */}
                            <td>{formatDate(reserva.fechaFin)}</td> {/* Formatea la fecha de fin */}
                            <td>
                                <button
                                    onClick={() => cancelarReserva(reserva._id)}
                                    className="btn btn-danger"
                                >
                                    Cancelar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ListadoReservasUsuario;
