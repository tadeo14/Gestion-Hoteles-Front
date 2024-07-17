import { useState } from 'react'
import pruebaApi from './api/prueba';

function App() {

  const [name, setName] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const enviarDatosAlBackend = async (name, edad, email, password) => {
    try {
      const resp = await pruebaApi.post('auth/registro', {
        name,
        edad,
        email,
        password,
      });
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || edad === "" || email === "" || password === "") {
      console.log('todos los campos son obligatorios');
    }
    
    enviarDatosAlBackend(name, edad, email, password);
  };

  return (
    <> 
      <h1>registro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
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
        <label htmlFor="">Password</label>
        <input type="password"  onChange={(e) => setPassword(e.target.value)} />

        <br />
        <br />

        <input type="submit" />
      </form>
    </>
  )
}

export default App

