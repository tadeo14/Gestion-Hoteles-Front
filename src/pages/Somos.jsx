import React from 'react'
import "../assets/Somos.css"
import nicolas from "../images/fotoNicolas.jpg"
import pablo from "../images/fotoPablo.jpg"
import tadeo from "../images/fotoTadeo.jpg"
import fabrizio from "../images/fotoFabrizio.jpg"

const Somos = () => {
  return (
    <div className='nosotros-background'>
      <div className='descripcion'>
        <h1>¿Quiénes Somos?</h1>
        <p>Somos un equipo de cuatro apasionados desarrolladores que se unieron con una visión clara: transformar la manera en que las personas interactúan con una gestión de hotel. Un equipo diverso y comprometido con la innovación y el bienestar, que decidió aplicar nuestras habilidades en desarrollo para crear una solución que mejore la calidad de vida de nuestros usuarios.</p>
      </div>
      <h1 className='text-center'>Nuestro Equipo:</h1>
      <p className='text-center'>Nuestro equipo está formado por 4 profesionales:</p>
      <div className='contenedorImagenes'>
        <div className='tarjetaImagen'>
          <img className='fotoNosotros' src={tadeo} alt='Tadeo Acosta' />
          <h3>Tadeo Acosta</h3>
        </div>
        <div className='tarjetaImagen'>
          <img className='fotoNosotros' src={pablo} alt='Pablo Brennan' />
          <h3>Pablo Brennan</h3>
        </div>
        <div className='tarjetaImagen'>
          <img className='fotoNosotros' src={nicolas} alt='Nicolas Cerusico' />
          <h3>Nicolas Cerusico</h3>
        </div>
        <div className='tarjetaImagen'>
          <img className='fotoNosotros' src={fabrizio} alt='Fabrizio Coronel' />
          <h3>Fabrizio Coronel</h3>
        </div>
      </div>
    </div>
  );
}

export default Somos;