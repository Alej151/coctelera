import { useEffect, useState } from "react";

const Coctel = ({item},{key}) => {
  const [hover,setHover]=useState()

  var url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const ingredientesInd= new Array();

  const [estado_ing,setEstado_ing]=useState([])
  const [instrucciones,setInstrucciones]=useState()
  const [coctelInd,setCoctel] = useState({})

  function mostrar(){
    if(hover){
      setHover(false)
    }
    else{
      setHover(true)
    }
    contruirInstrucciones()
    construir_array_ingredientes()
  }

  function construir_array_ingredientes(){
    ingredientesInd.push({"id":1,"strIngredient":coctelInd.strIngredient1,"strMeasure":coctelInd.strMeasure1})
    ingredientesInd.push({"id":2,"strIngredient":coctelInd.strIngredient2,"strMeasure":coctelInd.strMeasure2})
    ingredientesInd.push({"id":3,"strIngredient":coctelInd.strIngredient3,"strMeasure":coctelInd.strMeasure3})
    ingredientesInd.push({"id":4,"strIngredient":coctelInd.strIngredient4,"strMeasure":coctelInd.strMeasure4})
    ingredientesInd.push({"id":5,"strIngredient":coctelInd.strIngredient5,"strMeasure":coctelInd.strMeasure5})
    ingredientesInd.push({"id":6,"strIngredient":coctelInd.strIngredient6,"strMeasure":coctelInd.strMeasure6})
    ingredientesInd.push({"id":7,"strIngredient":coctelInd.strIngredient7,"strMeasure":coctelInd.strMeasure7})
    ingredientesInd.push({"id":8,"strIngredient":coctelInd.strIngredient8,"strMeasure":coctelInd.strMeasure8})
    ingredientesInd.push({"id":9,"strIngredient":coctelInd.strIngredient9,"strMeasure":coctelInd.strMeasure9})
    ingredientesInd.push({"id":10,"strIngredient":coctelInd.strIngredient10,"strMeasure":coctelInd.strMeasure10})
    ingredientesInd.push({"id":11,"strIngredient":coctelInd.strIngredient11,"strMeasure":coctelInd.strMeasure11})
    ingredientesInd.push({"id":12,"strIngredient":coctelInd.strIngredient12,"strMeasure":coctelInd.strMeasure12})
    ingredientesInd.push({"id":13,"strIngredient":coctelInd.strIngredient13,"strMeasure":coctelInd.strMeasure13})
    ingredientesInd.push({"id":14,"strIngredient":coctelInd.strIngredient14,"strMeasure":coctelInd.strMeasure14})
    ingredientesInd.push({"id":15,"strIngredient":coctelInd.strIngredient15,"strMeasure":coctelInd.strMeasure15})

    var filtered_ing=ingredientesInd.filter(item=>item.strIngredient !=null)
    setEstado_ing(filtered_ing)
  }

  function contruirInstrucciones(){
    setInstrucciones(coctelInd.strInstructions)
  }

  useEffect(()=>{
    getData()
  },[hover])

  async function getData(){
    try {
      var nombre=item.strDrink
      var url_nueva=url.concat(nombre).replace(' ','%20')

      var res =await fetch(url_nueva)
      var data = await res.json()

      setCoctel(data.drinks[0])
      
    } catch (error) {
      console.log("error: ");
      console.log(error);
    }
  }

  return (
    <>
    <div className='ind_cock' key={key}>
      
        <img className='img_cock' src={item.strDrinkThumb} alt={item.strDrink} />
        <h1 className='nombre'>{item.strDrink}</h1>
        <button className="btn btn-secondary boton_cock" onClick={mostrar}>Detalles</button>
        {hover && (
          <>
          <div className="detalles_ing">
              <div className="titulo">              
                <ul className="ul_detalles">
                  {estado_ing && estado_ing.map(item=>(
                    <li key={item.id} className="ingredientes_indi">-{item.strIngredient} {item.strMeasure && (<>/ {item.strMeasure}</>)}</li>
                  ))}
                </ul>
            </div>
            
            <section>
                  {instrucciones}
            </section>
          </div>
          </>
        )}

    </div>
    </>
  )
}

export default Coctel