import React from 'react';
import "../assets/Somos.css";
import nicolas from "../images/fotoNicolas.jpg";
import pablo from "../images/fotoPablo.jpg";
import tadeo from "../images/fotoTadeo.jpg";
import fabrizio from "../images/fotoFabrizio.jpg";

const Somos = () => {
  // Define los enlaces personalizados para cada miembro del equipo
  const links = {
    github: {
      tadeo: "https://github.com/tadeo14",  
      pablo: "https://github.com/pabloleonardobrennan",  
      nicolas: "https://github.com/nicolino79", 
      fabrizio: "https://github.com/farz21"
    },
    linkedin: {
      tadeo: "https://www.linkedin.com/in/tadeo-acosta/",      
      pablo: "https://www.linkedin.com/in/pablo-leonardo-brennan-182a8420a",    
      nicolas: "https://www.linkedin.com/in/nico-cerusico-783242327/",  
      fabrizio: "https://www.linkedin.com/in/fabrizio-gabriel-coronel-gordillo-36379822b/"
    }
  };

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
          <div className='social-links'>
            <a href={links.github.tadeo} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href={links.linkedin.tadeo} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className='tarjetaImagen'>
          <img className='fotoNosotros' src={pablo} alt='Pablo Brennan' />
          <h3>Pablo Brennan</h3>
          <div className='social-links'>
            <a href={links.github.pablo} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href={links.linkedin.pablo} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className='tarjetaImagen'>
          <img className='fotoNosotros' src={nicolas} alt='Nicolas Cerusico' />
          <h3>Nicolas Cerusico</h3>
          <div className='social-links'>
            <a href={links.github.nicolas} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href={links.linkedin.nicolas} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className='tarjetaImagen'>
          <img className='fotoNosotros' src={fabrizio} alt='Fabrizio Coronel' />
          <h3>Fabrizio Coronel</h3>
          <div className='social-links'>
            <a href={links.github.fabrizio} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href={links.linkedin.fabrizio} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Somos;
