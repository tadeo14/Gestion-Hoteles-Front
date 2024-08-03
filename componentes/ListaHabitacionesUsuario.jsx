import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'; // Asegúrate de importar Table desde react-bootstrap
import pruebaApi from '../src/api/pruebaApi';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
          <div>
          <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
                  </Card>
                  </CardGroup>
          </div>
    </>
  );
};

export default ListaHabitacionesUsuario;