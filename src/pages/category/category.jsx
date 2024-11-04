import React, { useEffect, useState } from 'react'
import './category.css'
import  {products} from '../../products'
import { useParams ,Link} from 'react-router-dom';
function filterByCategory(category){
   return products.filter(product=>product.category===category)
}
export function Category() {
    const { category } = useParams(); 
    const [filteredProducts, setFilteredProducts]=useState([])
     
    useEffect(()=>{
       setFilteredProducts(filterByCategory(category))
    },[category])

  return (

        <div className='products'>
            <h1>{category}</h1> 
            <div className='products-grid'>
                {filteredProducts.map(product => (
                    <div className='p-category' key={product.id}>
                        <Link className='link'>
                            <img src={product.img} alt={product.nombre} />
                            <h2>{product.nombre}</h2>
                            <p>${product.precio}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );

}