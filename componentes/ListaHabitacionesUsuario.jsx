import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ListaHabitacionesUsuario = () => {
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
            <div className='p-2'>
                <h1>Listado de Habitaciones</h1>
                <div>
                    {habitaciones.map((habitacion) => (
                        <Row key={habitacion._id} className="mb-3">
                            <Col>
                                <Card className="flex-row">
                                    <Card.Img className="img-fluid" style={{ width: '200px', height: 'auto' }} src={`http://localhost:5173/public/images/${habitacion.imagen}`} alt={`Habitación ${habitacion.numero}`} />
                                    <Card.Body>
                                        <Card.Title>Habitación {habitacion.numero}</Card.Title>
                                        <Card.Text>
                                            Tipo: {habitacion.tipo}<br />
                                            Precio: ${habitacion.precio}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ListaHabitacionesUsuario;
