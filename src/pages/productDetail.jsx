import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductDetail() {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }catch(error){
            console.error('Error al obtener producto: ', error);
        }

    }
    
    return (
        <div className='m-10 flex flex-col items-center'>
            <h1 className='text-2xl text-center font-bold p-4'>{product.title}</h1>
            <img src={product.image} alt={product.name} className='w-3/4 p-4 md:w-2/8' />
            <p className='text-justify'>{product.description}</p>
            <p className='text-center font-bold text-2xl p-2'>Precio: ${product.price}</p>
        </div>
    )
}

export default ProductDetail