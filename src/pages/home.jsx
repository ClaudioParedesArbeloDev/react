import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error al cargar productos: ', error);
            }
        }
        fetchProducts();
    }, []);
    
    

    return (
        <div className='flex flex-wrap m-10 md:justify-center'>
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} >
                <div key={product.id} className='flex flex-col border items-center  my-8 rounded-md p-8 h-[450px] justify-between md:w-[300px] md:m-8'>
                    <h2 className='text-xl font-bold text-center'>{product.title}</h2>
                    <img src={product.image} alt={product.name} className='w-3/6'/>
                    <p className='text-2xl py-4'>Precio ${product.price}</p>
                </div>
                </Link>
            ))}
               
        </div>
    )
}

export default Home