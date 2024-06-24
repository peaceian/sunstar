import React from 'react';
import '../components/ProductsCard.css';
// import { CartContext } from '../features/ContextProvider';
// import GPTproductList from './GPTproductlist';


const Products = ({ product }) => {
    // const { dispatch } = useContext(CartContext);
    return (
        <div className='card_col'>
            <div className="products_card">
                <img src={product.thumbnail} class="card_thumb" alt="..." />
                <div className="card_body">
                    <h4 className="card_title">{product.title}</h4>
                    <h5 className='card_title'>{product.description}</h5>
                    <h5 className='card_title'>{product.type}</h5>
                    <h5 className="card_price">${product.price}</h5>
                    {/* <GPTproductList product={product}/> */}
                    {/* <button href="#" class="card_button"
                        onClick={() => dispatch({ type: "Add", product: product })}>Add to cart</button> */}
                </div>
            </div>
        </div>

    );
};

export default Products
