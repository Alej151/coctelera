import React from 'react'
import Coctel from '../componentes/Coctel';


const Detalles = ({cocteles ,cambiar_shake}) => {
  return (
    <>
    <button className='btn btn-secondary salir' onClick={cambiar_shake}>Volver a mezclar</button>
    <div className='cocteles'>
    {
      cocteles && (
        cocteles.map(item=>(
          <Coctel item={item} key={item.strDrink}></Coctel>
        ))
      )
    }
    </div>
    </>
  )
}

export default Detalles