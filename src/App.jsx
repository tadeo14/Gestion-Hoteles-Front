import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import { AppRouter } from './router/AppRouter'
import { useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
