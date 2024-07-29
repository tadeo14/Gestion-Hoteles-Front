import { useState } from 'react'
import pruebaApi from './api/prueba';

function App() {

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const enviarDatosAlBackend = async (nombre, edad, email, contraseña) => {
    try {
      const resp = await pruebaApi.post('auth/registro', {
        nombre,
        edad,
        email,
        contraseña,
      });
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || edad === "" || email === "" || contraseña === "") {
      console.log('todos los campos son obligatorios');
    }
    
    enviarDatosAlBackend(nombre, edad, email, contraseña);
  };

  return (
    <> 
      <h1>registro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input type="text" onChange={(e) => setNombre(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Edad</label>
        <input type="number" onChange={(e) => setEdad(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="email"  onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Contraseña</label>
        <input type="password"  onChange={(e) => setContraseña(e.target.value)} />

        <br />
        <br />

        <input type="submit" />
      </form>
    </>
  )
}

export default App

