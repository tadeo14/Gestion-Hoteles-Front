import React, { useEffect, useState } from 'react';
import pruebaApi from "../api/pruebaApi";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaHabitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const fetchHabitaciones = async () => {
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

    fetchHabitaciones();
  }, []);

  return (
    <Container>
      <h1>Lista de Habitaciones</h1>
      <ul>
        {Array.isArray(habitaciones) && habitaciones.length > 0 ? (
          habitaciones.map((habitacion) => (
            <li key={habitacion._id}>
              <h2>{habitacion.numero}</h2>
              <p>{habitacion.imagen}</p>
              <p>Precio: ${habitacion.precio}</p>
            </li>
          ))
        ) : (
          <p>No hay habitaciones disponibles.</p>
        )}
      </ul>
    </Container>
  );
};

export default ListaHabitaciones;
