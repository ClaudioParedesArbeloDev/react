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
            <div className='count'>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default ItemCount