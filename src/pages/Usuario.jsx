import React from 'react'
import { ListaUsuarios } from '../../componentes/ListaUsuarios'
import ListadoReservasAdmin from '../../componentes/ListadoReservasAdmin'

export const Usuario = () => {
  return (
      <>
          <ListadoReservasAdmin />
          
          <ListaUsuarios/> 
      </>
  )
}

export default Usuario;