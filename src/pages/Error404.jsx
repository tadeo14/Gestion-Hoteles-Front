import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const home = () => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  };

  useEffect(() => {
    home();
  }, []);
  
  return (
    <div className="principal d-flex align-items-center justify-content-center">
      <div className="container bg-white d-flex main flex-wrap align-items-center justify-content-center">
        <p>
          Error 404 - Seras redirigido a la pagina principal en 10 segundos.
        </p>
      </div>
    </div>
  );
};

export default Error404;