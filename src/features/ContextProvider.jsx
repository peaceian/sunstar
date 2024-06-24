import React, { createContext,useReducer } from 'react';
import CartReducer from './CartReducer';
// import PropTypes from 'prop-types';

export const CartContext = createContext();

const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, []);
    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

// ContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default ContextProvider;
