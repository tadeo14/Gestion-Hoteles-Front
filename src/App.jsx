import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import AppRouter from '../src/router/AppRouter.jsx';
import { useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
// import AppRouter from "./router/AppRouter";


function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
