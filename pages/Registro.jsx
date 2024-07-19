import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import hotelApi from '../api/hotelApi';
import Swal from 'sweetalert2'

export const Registro = () => {
  const [name, setName] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registroBackend = async(name, edad, email, password) => { 
    try {
      const resp = await hotelApi.post('/auth/registro', {
        name,
        email,
        edad,
        password,
      })
      Swal.fire({
        position: "center",
        icon: "success",
        title: "usuario creado",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: 'El usuario registrado ya existe',
        });
      }else if(error.response.status === 500){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: 'Contactarse con un administrador',
        });
      }
    }
  };

  const handleRegistro = (e) =>{
    e.preventDefault();

    //validaciones
    if (name === '' || edad === '' || email === '' || password === ''){
      return console.log('tdodos los campos son obligatorios');
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "usuario creado",
      showConfirmButton: false,
      timer: 1500
    });
    
    registroBackend(name, edad, email, password)
  }
  return (
    <div>
      <h1>Registro</h1>
      <Form className='w-50 p-3' onSubmit={handleRegistro}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" onChange={(e) => setName(e.target.value)}/>
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
        <Form.Control type="password" placeholder="escribir contraseña" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
    </div>
  )
}
