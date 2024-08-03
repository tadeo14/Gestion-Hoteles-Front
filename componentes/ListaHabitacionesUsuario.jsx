import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

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
          <h1 >  Listado de Habitaciones</h1>
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
          <div>
          <CardGroup>
                        {habitaciones.map((habitacion) => (
                            <Card key={habitacion._id}>
                                <Card.Img variant="left" src={`http://localhost:5173/public/images/${habitacion.imagen}`} alt={`Habitación ${habitacion.numero}`} style={{ width: '300px', height: 'auto' }}  />
                                <Card.Body>
                                    <Card.Title>Habitación {habitacion.numero}</Card.Title>
                                    <Card.Text>
                                        Tipo: {habitacion.tipo}<br />
                                        Precio: ${habitacion.precio}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Última actualización hace 3 minutos</small>
                                </Card.Footer>
                            </Card>
                        ))}
                    </CardGroup>
          </div>
          </div>
     
    </>
  );
};

export default ListaHabitacionesUsuario;