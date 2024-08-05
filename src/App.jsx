import { useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import { Navbar } from "react-bootstrap";
import { AuthProvider } from "../src/context/AuthContext";

function App() {
  return (
    <AuthProvider>
    
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
