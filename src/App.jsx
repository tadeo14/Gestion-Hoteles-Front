import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "../src/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
