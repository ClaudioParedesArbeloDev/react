import Navbar from '../component/navbar/navbar'
import ItemList from './itemList'


function ItemListConteiner() {

    return (
        <div className='itemListConteiner'>
            <Navbar />
            <h2>Productos</h2>
            <ItemList />
        </div>
    )
}

export default ItemListConteiner