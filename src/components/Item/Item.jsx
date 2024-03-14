import { Link } from "react-router-dom";


const Item =({id, nombre, precio, img, categoria})=>{
    return(
        <article>
            <h3>Categoria:{categoria}</h3>
            <h2>{nombre}</h2>
            <img src={img} style={{width:100}} />
            <h2>${precio}</h2>
            <Link to={`/item/${id}`}>Ver Detalles</Link>
        </article>
    )
}

export default  Item;