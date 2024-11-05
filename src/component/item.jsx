import ItemCount from "./itemCount"

function Item(props) {

    const {descripcion, nombre, precio, stock} = props.data

    

    return (
        <div>
            {nombre}
            
            <ItemCount />
        </div>
    )
}

export default Item