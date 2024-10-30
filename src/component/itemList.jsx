import Item from './item'

function ItemList() {
    const listaProductos = [
        {
            id: 1,
            nombre: "Remera",
            descripcion: "Remera es un producto de la familia de remeras",
            precio: 15,
            stock: 10,
        },
        {
            id: 2,
            nombre: "Short",
            descripcion: "Short es un producto de la familia de shorts",
            precio: 25,
            stock: 9,
        },
        {
            id: 3,
            nombre: "Pantalon",
            descripcion: "Pantalon es un producto de la familia de pantalones",
            precio: 35,
            stock: 8,
        },
        {
            id: 4,
            nombre: "Camiseta",
            descripcion: "Camiseta es un producto de la familia de camisetas",
            precio: 45,
            stock: 7,
        },
    ]

    
    const listaDeProductosRenderizados = listaProductos.map(productos => (<Item key={productos.id} id={"producto" + productos.id} data={productos}/>))

    return (
        <div>
            <h2>ItemList</h2>
            {listaDeProductosRenderizados}
            
        </div>
    )
}

export default ItemList