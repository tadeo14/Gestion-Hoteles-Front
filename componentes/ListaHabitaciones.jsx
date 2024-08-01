import React, { useEffect, useState } from 'react';
import pruebaApi from "../src/api/pruebaApi";
import { Container, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const ListaHabitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const listaHabitaciones = async () => {
      try {
        const response = await pruebaApi.get('/admin/listaHabitaciones');
        console.log('Response data:', response.data); // Verifica los datos aquí

        // Accede a la propiedad `habitaciones` en lugar de usar la respuesta directamente
        if (response.data && Array.isArray(response.data.habitaciones)) {
          setHabitaciones(response.data.habitaciones);
        } else {
          console.error('Expected an array of habitaciones but got:', response.data.habitaciones);
        }
      } catch (error) {
        console.error('Error fetching the rooms:', error);
      }
    };

    listaHabitaciones();
  }, []);

  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};

export default ListaHabitaciones;
