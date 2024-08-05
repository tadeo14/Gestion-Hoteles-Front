import React from 'react'
import ListaHabitaciones from '../../componentes/ListaHabitaciones'
import { ListaUsuarios } from '../../componentes/ListaUsuarios'
import ListadoReservasAdmin from '../../componentes/ListadoReservasAdmin'

export const Admin = () => {
  return (
      <>
          <ListaHabitaciones />
          
          <ListaUsuarios/> 
          
          <ListadoReservasAdmin />
      </>
  )
}

export default Admin;