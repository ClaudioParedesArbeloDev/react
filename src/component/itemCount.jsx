import '../css/itemcount.css'

import { useState } from "react"


const ItemCount = () => {
    //Logica
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }


    return (
        //Renderizar
        <div className='itemCount'>
            <h3>ItemCount</h3>
            <div className='count'>
                <button onClick={increment}>+</button>
                <p>{count}</p>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default ItemCount