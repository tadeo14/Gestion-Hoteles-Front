import React from 'react'

import ListadoReservasUsuario from '../../componentes/ListadoReservasUsuario';
import ListaHabitacionesUsuario from '../../componentes/ListaHabitacionesUsuario';

export const Usuario = () => {
  return (
    <>
      <div className='p-4'>
      <ListadoReservasUsuario />
      <ListaHabitacionesUsuario/> 
      </div>
              
          
      </>
  )
}

export default Usuario;