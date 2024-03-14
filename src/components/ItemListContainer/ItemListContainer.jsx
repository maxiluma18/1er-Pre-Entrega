import clase from "./ItemListContainer.module.css"
import  { useState,useEffect } from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer =(props)=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
            .then(result =>{
                setProducts(result)
            })    
    }, [])
    
    return(
        <div>
            <h2 className={clase.hero}  >{props.greeting}</h2>
            <ItemList products={products} />
        </div>
        
    )
}

export default ItemListContainer