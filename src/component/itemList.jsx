import Item from './item'


function ItemList() {
    

   
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

    const listaDeItems = listaDeProductos.map(productos => <Item key={productos.id} data={productos} />)
    
    return (
        <div>
            <h3>Lista de Productos</h3>
            {listaDeItems}
            
        </div>
    )
}

export default ItemList