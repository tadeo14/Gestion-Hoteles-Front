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
            const resp = await pruebaApi.get(`/room/listadoReservas/${usuarioId}`);
            setReservas(resp.data.listadoReservas);
        } catch (error) {
            console.log(error);
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
                            <td>{reserva.fechaInicio}</td>
                            <td>{reserva.fechaFin}</td>
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
