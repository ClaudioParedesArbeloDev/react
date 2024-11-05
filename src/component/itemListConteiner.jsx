import Navbar from '../component/navbar/navbar'
import ItemList from './itemList'
import { useState } from 'react'

function ItemListConteiner() {

    const [categoria, setCategoria] = useState("all")

    const categoriaAll = () => {
        setCategoria("all")
    }

    const categoriaCocina = () => {
        setCategoria("cocina")
    }

    const categoriaHogar = () => {
        setCategoria("hogar")
    }

    const categoriaConstruccion = () => {
        setCategoria("construccion")
    }

    return (

        <div className='itemListConteiner'>
            <Navbar />
            <button onClick={categoriaAll}>Todos los productos</button>
            <button onClick={categoriaCocina}>Cocina</button>
            <button onClick={categoriaHogar}>Hogar</button>
            <button onClick={categoriaConstruccion}>Construccion</button>
            <h2>Productos</h2>
            <ItemList categoriaName={categoria} />
        </div>
    )
}

export default ItemListConteiner