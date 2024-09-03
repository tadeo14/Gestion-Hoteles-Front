import React from 'react'

import ListadoReservasUsuario from '../../componentes/ListadoReservasUsuario';
import RealizarReservas from '../../componentes/RealizarReservas';


export const Usuario = () => {
  return (
    <>
      <div className='p-4'>
      <RealizarReservas/>
      <ListadoReservasUsuario />
 
      </div>
              
          
      </>
  )
}

export default Usuario;