import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Importa el componente Table
import pruebaApi from '../src/api/pruebaApi';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListadoReservasUsuario.css';

export const ListadoReservasUsuario = () => {
    const [reservas, setReservas] = React.useState([]);
    const [error, setError] = React.useState(null);

    const getReservas = async () => {
        try {
           
            const resp = await pruebaApi.get(`room/listadoReservas/${usuario}`);
            setReservas(resp.data.listadoReservas);
        } catch (error) {
            console.error('Error al obtener las reservas:', error);
            setError('Error al obtener las reservas');
        }
    };;

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
        <div className="container mt-4">
            <h1 className="mb-4">Listado de Reservas</h1>
            {error && <p className="text-danger">{error}</p>}
            <div className="table-responsive">
                {/* Vista de tabla para pantallas medianas y grandes */}
                <div className="d-none d-md-block">
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
                </div>
                {/* Vista de tarjetas para pantallas pequeñas */}
                <div className="d-block d-md-none">
                    {reservas.map((reserva) => (
                        <div className="card mb-3" key={reserva._id}>
                            <div className="card-body">
                                <h5 className="card-title">Reserva #{reserva._id}</h5>
                                <p className="card-text"><strong>Usuario:</strong> {reserva.usuario}</p>
                                <p className="card-text"><strong>Fecha Inicio:</strong> {reserva.fechaInicio}</p>
                                <p className="card-text"><strong>Fecha Fin:</strong> {reserva.fechaFin}</p>
                                <button
                                    onClick={() => cancelarReserva(reserva._id)}
                                    className="btn btn-danger"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListadoReservasUsuario;
