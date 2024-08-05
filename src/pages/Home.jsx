import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../assets/Home.css";
import imagen1 from "../images/carrousel1.jpg";
import imagen2 from "../images/carrousel2.jpg";
import imagen3 from "../images/carrousel3.jpg";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-imagen"
              src={imagen1}
              alt="habitacion"
            />
            <Carousel.Caption className="custom-caption">
              <h3>Habitación del hotel.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-imagen"
              src={imagen2}
              alt="Bar"
            />
            <Carousel.Caption className="custom-caption">
              <h3>Bar del hotel.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-imagen"
              src={imagen3}
              alt="piscina"
            />
            <Carousel.Caption className="custom-caption">
              <h3>Piscina del hotel</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="descripcion">
        <h2>Bienvenidos a Nuestro Hotel</h2>
        <p>
          En nuestro hotel, nos enorgullecemos de priorizar la comodidad y
          satisfacción de nuestros huéspedes. Ofrecemos un ambiente moderno y
          acogedor, ideal para una estancia relajante. Nuestras instalaciones
          incluyen habitaciones elegantes, un bar con una excelente selección de
          bebidas y una piscina que te invita a disfrutar de un refrescante
          descanso.
        </p>
        <p>
          Nos comprometemos a brindarte una experiencia hotelera única, con un
          servicio atento y personalizado. Desde el momento en que llegas hasta
          el final de tu estancia, nuestro objetivo es superar tus expectativas
          y asegurar que cada aspecto de tu visita sea excepcional.
        </p>
        {!isAuthenticated && (
          <div className="button-container">
            <button className="btn-login" onClick={() => navigate("/login")}>
              Iniciar Sesión
            </button>
            <button className="btn-registro" onClick={() => navigate("/registro")}>
              Registrarse
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
