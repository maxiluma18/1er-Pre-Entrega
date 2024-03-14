import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer =()=>{
    const [product, setProduct] =  useState(null)


    const {itemid}  = useParams();
    
    useEffect(()=>{
        getProductById(itemid)
            .then(result=>{
                setProduct(result)
            })
    }, [itemid])


    return(
        <main>
            <h1>Detalle de producto</h1>
            <ItemDetail { ...product}/>
        </main>
    )
}

export default ItemDetailContainer

