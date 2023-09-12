import React, { useState,useEffect } from 'react'
import Ingredientes from './utilidades/Ingredientes';
import Inicio from './routes/Inicio';
import Detalles from './routes/Detalles';

const url_original='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

const App = () => {
  
  const [url,setUrl] = useState(url_original)
  const [cocteles,setCocteles]= useState([])
  const [ing,setIng] = useState(Ingredientes[0].drinks);
  const [seleccionados,setSelec]=useState([])
  const [shake,setShake]= useState(false);
  const [start,setStart]=useState(true);
  const [desacivado,setDesac]=useState(true);

  ////////////////////////// funciones de recogida de datos a la api, reordenacion de los ingredientes y contrucion de url nueva //////////////////////////

  useEffect(() => {
    getData()
    contruir_url()
    
    if(seleccionados.length<=0){
      setDesac(true)
    }
    else{
      setDesac(false)
    }
    
  },[url,seleccionados]);

  async function getData(){
    try {
      var data=await fetch(url)
      var json=await data.json()
      setCocteles(json.drinks)
      } catch (error) {
        console.log("error: ");
        console.log(error);
      }
  }

  const contruir_url=()=>{

    if(seleccionados.length<=0){
      setUrl(url_original)
      setCocteles(null)
    }
    else{
      var nombre=seleccionados[0].selecString
      setUrl(url_original.concat(nombre))
    }
  }

  const rearrange=(re)=>{
      var id_objeto=re.draggableId;
      var destino=re.destination.droppableId

      if(destino=="coctelera"){
        
        var array_ing_nuevo=[...ing];
        var array_selec_nuevo=[...seleccionados];
        var nombre_selec=ing.find((item) => item.idIngredient == id_objeto)

        array_ing_nuevo=ing.filter((item)=>item.idIngredient != id_objeto)
        array_selec_nuevo.push({"idSelec":id_objeto,"selecString":nombre_selec.strIngredient1})

        setSelec(array_selec_nuevo);
        setIng(array_ing_nuevo);
        
      }

      else if(destino=="ingredientes"){

        var array_ing_nuevo=[...ing];
        var array_selec_nuevo=[...seleccionados];
        var nombre_selec=seleccionados.find((item) => item.idSelec == id_objeto)

        array_selec_nuevo=seleccionados.filter((item)=>item.idSelec != id_objeto);
        array_ing_nuevo.splice(id_objeto,0,{"idIngredient":id_objeto,"strIngredient1":nombre_selec.selecString});

        setSelec(array_selec_nuevo);
        setIng(array_ing_nuevo);

      }
      
  }

  const limpiar_coctelera=()=>{
    setIng(Ingredientes[0].drinks);
    setSelec([])
  }

  //////////////////////////   funciones para cambiar los activities    //////////////////////////////////////////

function cambiar_start(){
  //nos llevara al segundo activity
  setStart(false)
  setShake(true)
}

function cambiar_shake(){
  //nos llevara al primer activity
  setStart(true)
  setShake(false)
}

  /////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className='todo container'>

      {start && (<Inicio ing={ing} seleccionados={seleccionados} rearrange={rearrange} cambiar_start={cambiar_start} limpiar_coctelera={limpiar_coctelera} desacivado={desacivado}/>)}
      
      {shake && (<Detalles cocteles={cocteles} cambiar_shake={cambiar_shake}/>)}

      </div>
    </>
  )
}

export default App