import React, { useContext } from 'react';
import { CartContext } from '../../features/ContextProvider';
import CartProduct from '../CartProduct';
import { totalItem, totalPrice } from '../../features/CartReducer';
import './Cart.css';

const Cart = () => {
  const {cart} = useContext(CartContext);
  return (
    <div className='cart_container'>
      <div className='row'>
        <div className='product_column'>
          {cart.map((p) => (
            <CartProduct key={p.id} product={p}/>
          ))}
        </div>
        <div className='total_column'>
          <div className='total'>
            <h4>Total Items: {totalItem(cart)}</h4>
            <h4>Total Price: ${totalPrice(cart)}</h4>
            <button className='checkout_btn'>CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
