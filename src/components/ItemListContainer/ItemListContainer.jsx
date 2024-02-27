import clase from "./ItemListContainer.module.css"

const ItemListContainer =(props)=>{

    return(
        <h2 className={clase.hero}  >{props.greeting}</h2>
        

    )
}

export default ItemListContainer