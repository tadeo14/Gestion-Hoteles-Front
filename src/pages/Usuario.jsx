import React from 'react'

import ListadoReservasUsuario from '../../componentes/ListadoReservasUsuario';
import ListaHabitacionesUsuario from '../../componentes/ListaHabitacionesUsuario';
import RealizarReservas from '../../componentes/RealizarReservas';


export const Usuario = () => {
  return (
    <>
      <div className='p-4'>
      <RealizarReservas/>
      <ListadoReservasUsuario />
      <ListaHabitacionesUsuario/> 
      </div>
              
          
      </>
  )
}

export default Usuario;