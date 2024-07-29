
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


