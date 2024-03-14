import ItemCount from "../ItemCount/ItemCount";

const ItemDetail =({nombre, precio, img, categoria, stock})=>{
    return(
        <article>
            <h3>Categoria:{categoria}</h3>
            <h2>{nombre}</h2>
            <img src={img} style={{width:100}} />
            <h2>${precio}</h2>
            <ItemCount stock={stock}/>
        </article>
    )
}

export default  ItemDetail;