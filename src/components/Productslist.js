import React, { useState } from 'react';
import Data from '../Data.json';
import Products from './ProductsCard.js';
import './Productslist.css';
// import { useNavigate } from 'react-router-dom';



const Productslist = () => {
    const [products, setProducts] = useState(Data.products);
    // const navigate = useNavigate();
    // const handleProductClick = (id) => {
    //     navigate(`/product/${id}`);
    //   };
    return (
        <div className='product__container'>
            <div className='product__list'>
                {
                    products.map(p => (
                        <Products product={p} />
                    ))
                }
                
            </div>
        </div>
    );
}

export default Productslist;
