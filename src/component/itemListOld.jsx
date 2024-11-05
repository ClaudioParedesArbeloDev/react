//Estilos
import Item from './item'


//Componentes
import { useState } from 'react'


function ItemList(props) {
//Logica    
  
   const listaDeProductos = [
       {
        id: 1,
        nombre: "Producto 1",
        precio: 100,
        stock: 10,
        descripcion: "Este es un producto de ejemplo",
        categoria: "construccion",
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200,
        stock: 20,
        descripcion: "Este es un producto de ejemplo",
        categoria: "hogar",
    },
     {
        id: 3,
        nombre: "Producto 3",
        precio: 300,
        stock: 30,
        descripcion: "Este es un producto de ejemplo",
        categoria: "cocina",
    },
     {
        id: 4,
        nombre: "Producto 4",
        precio: 400,
        stock: 40,
        descripcion: "Este es un producto de ejemplo",
        categoria: "cocina",
    },
]   

let productosRenderizados = []

if (props.categoriaName === "all") {
    productosRenderizados = listaDeProductos.map(producto => <Item key={producto.id} data={producto} />)
}else {
    const productosPorCategoria = listaDeProductos.filter(producto => producto.categoria === props.categoriaName)
    productosRenderizados = productosPorCategoria.map(producto => <Item key={producto.id} data={producto} />)
}

//Hook de estado, renderizable (acumula los cambios en el estado), setRenderizable (actualiza el estado)
//const [renderizable, setRenderizable] = useState([])


//Funcion de promesa, que se ejecuta despues de 1.5 segundos
//const respuesta = new Promise((resolve, reject) => {
    //filter es una funcion de javascript que filtra un array, llamamos producto, le decimos que queremos productos x categoria
    //y que esto sea igual props que estamos enviando desde itemListConteiner (props.categoria)

//setTimeout es una funcion de javascript que ejecuta una funcion despues de X milisegundos
//setTimeout(() => {
    //resolve es una funcion de javascript que devuelve un valor a una promesa
    //map es una funcion de javascript que mapea un array a otro array
//    resolve(productosPorCategoria.map(productos => <Item key={productos.id} data={productos} />))})
//}, 1500)})

//Ejecuta la promesa y data trae todo la informacion de los productos
//respuesta.then((data) => {setRenderizable(data)})





    return (
        <div>
            <h3>Lista de Productos</h3>
            {productosRenderizados}
            </div>
    )
}

export default ItemList