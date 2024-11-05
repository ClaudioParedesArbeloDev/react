//Estilos
import '../css/itemList.css'

import Item from './item'

import { useState } from 'react'





function ItemList(props) {

    const [productosRenderizados, setProductosRenderizados] = useState([])

    
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> setProductosRenderizados(json.map(productos => <Item key={productos.id} data={productos} />)))
    

    

    return (
        <div >
            <h3>Lista de Productos</h3>
            <div className="itemList">
            {productosRenderizados}
            </div>
        </div>
    )
}

export default ItemList