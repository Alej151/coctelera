import React, { useState,useEffect } from 'react'
import IngredienteIndividual from '../componentes/IngredienteIndividual';
import { DragDropContext, Draggable,Droppable } from 'react-beautiful-dnd';



const Inicio = ({ing,seleccionados,rearrange,cambiar_start,limpiar_coctelera, desacivado}) => {
    
    return(
        <>
        <DragDropContext  onDragEnd={rearrange}>
      <div className='ingredientes d-flex justify-content-center align-items-center'>
      <Droppable droppableId="ingredientes" key="asdasd">
        {(provided)=>(
          <>
          <div className='ingredientes_caja' ref={provided.innerRef}
          {...provided.droppableProps}
          >
            {
              ing && (
                ing.map(item=>(
                  <Draggable draggableId={item.idIngredient} index={2} key={item.idIngredient}>
                    {(provided)=>(
                      <div className='hover_dragable'  ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      {...provided.placeholder} 
                      key={item.idIngredient}>
                        <IngredienteIndividual item={item} key={item.idIngredient}></IngredienteIndividual>
                      </div>
                    )}
                  </Draggable>
                  ))
                )
            }

          </div>
          </>
        )}
        </Droppable>
        </div>

          
          <Droppable droppableId="coctelera" key="asdasd">
            {(provided)=>( 
              <div className='coctelera' ref={provided.innerRef}
              {...provided.droppableProps}>
              <ul className='seleccionados'>
                {
                  seleccionados && (
                    seleccionados.map(item=>(
                      <Draggable draggableId={item.idSelec} index={2} key={item.idSelec}>
                        {(provided)=>(
                          <li ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          {...provided.placeholder} 
                          key={item.idIngredient}
                          className='li_selec'
                          >
                            <p>{item.selecString}</p>
                            </li>
                        )}
                        
                      </Draggable>
                      
                    ))
                  )
                }
              </ul>
              <div className='botones d-flex justify-content-center'>
            <button  type="button" class="btn btn-primary limpiar" onClick={limpiar_coctelera}>Limpiar</button>
            <button  type="button" class="btn btn-primary mezclar"  disabled={desacivado} onClick={cambiar_start}>Mezclar</button>
          </div>
              </div>
            )}
            </Droppable>
          </DragDropContext>
          
          </>
          
    )
     
}

export default Inicio