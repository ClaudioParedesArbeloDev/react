import ItemCount from "./itemCount"

function Item(props) {

    const {nombre, descripcion, precio, stock} = props.data

    

    return (
        <div>
            <h2>Item</h2>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <p>{stock}</p>
            <ItemCount />
        </div>
    )
}

export default Item