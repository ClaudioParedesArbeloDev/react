import ItemCount from "./itemCount"

import '../css/item.css'

function Item(props) {

    const {title, price, description, image, category} = props.data

    

    return (
        <div className="item">
            <img src={image} alt="" />
            <h3 className="title">{title}</h3>
            <p className="category">{category}</p>
            <p className="description">{description}</p>
            <p className="price">{price}</p>
           
            
            <ItemCount stock="10" />
        </div>
    )
}

export default Item