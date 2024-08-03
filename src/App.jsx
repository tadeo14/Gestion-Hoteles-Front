import { useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import { Navbar } from "react-bootstrap";


function App() {
  return (
    <>
    
      <AppRouter />
    </>
  );
}

export default App;
