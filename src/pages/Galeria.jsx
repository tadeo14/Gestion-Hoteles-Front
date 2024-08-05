import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import imagen1 from "../images/galeria1.jpg"
import imagen2 from "../images/galeria2.jpg"
import imagen3 from "../images/galeria3.jpg"
import imagen4 from "../images/galeria4.jpg"
import imagen5 from "../images/galeria5.jpg"
import imagen6 from "../images/galeria6.jpg"
import imagen7 from "../images/galeria7.jpg"
import imagen8 from "../images/galeria8.jpg"
import imagen9 from "../images/galeria9.jpg"
import imagen10 from "../images/galeria10.jpg"
import imagen11 from "../images/galeria11.jpg"
import imagen12 from "../images/galeria12.jpg"
import imagen13 from "../images/galeria13.jpg"
import imagen14 from "../images/galeria14.jpg"
import imagen15 from "../images/galeria15.jpg"
import imagen16 from "../images/galeria16.jpg"
import "../assets/Galeria.css"

function MultipleRows() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 2,
    speed: 1000,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
        }
      }
    ]
  };
  return (
    <div className="galeria-background">
      <h1 className="text-center">Galería de Imágenes</h1>
      <Slider {...settings}>
        {[imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16].map((imagen, index) => (
          <div key={index}>
            <img className="imagenesGaleria" src={imagen} alt={"Imagen ${index + 1}"} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleRows;
