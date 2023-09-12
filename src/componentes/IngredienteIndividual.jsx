
const IngredienteIndividual = ({item},{key}) => {
    return (
        <div className='ingred' key={key}>
        <p className=''>{item.strIngredient1}</p>
        </div>
      )
}
export default IngredienteIndividual