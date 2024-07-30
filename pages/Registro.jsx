import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import pruebaApi from '../api/pruebaApi';
import Swal from 'sweetalert2'

export const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const registroBackend = async(nombre, edad, email, contraseña) => { 
    try {
      const resp = await pruebaApi.post("/auth/registro", {
        nombre,
        edad,
        email,
        contraseña,
      })
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario Creado",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.mensaje,
        });
      }else if (error.response.status === 500) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Contactarse con un administrado",
        });
      }
    }
  };

  const handleRegistro = (e) =>{
    e.preventDefault(); 
    //validaciones
   if (nombre === '' || edad === '' || email === '' || contraseña === '') {
    console.log('todos los campos son obligarios')
   }   
    
    registroBackend(nombre, edad, email, contraseña)
  }
  return (
    <div className='justify-content-md-center row text-center'>
      <h1> Registro</h1>
      <Form className='w-50 p-3' onSubmit={handleRegistro}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" onChange={(e) => setNombre(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" onChange={(e) => setEdad(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="escribir contraseña" onChange={(e) => setContraseña(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
    </div>
  )
}