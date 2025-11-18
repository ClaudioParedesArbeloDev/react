import { useState, useEffect, use } from 'react'

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
        <div className='flex flex-wrap m-10'>
            {products.map((product) => (
                <div key={product.id} className='flex flex-col border items-center  my-8 rounded-md p-8 h-[450px] justify-between md:w-[300px] md:m-8'>
                    <h2 className='text-xl font-bold text-center'>{product.title}</h2>
                    <img src={product.image} alt={product.name} className='w-3/6'/>
                    <p className='text-3xl py-4'> ${product.price}</p>
                </div>
            ))}
               
        </div>
    )
}

export default Home