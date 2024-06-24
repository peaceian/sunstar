export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0)
};
//return cart.reduce((sum, product) => sum + (product.quantity || 0), 0); #by GPT
export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity* product.price, 0)
};
//return cart.reduce((total, product) => total + (product.quantity || 0) * (product.price || 0), 0); #by GPT
const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            // return [...state, action.product] original from YTR
            return [...state, { ...action.product, quantity: action.product.quantity || 1, price: action.product.price || 0 }];//alter by GPT
        case "Remove":
            return state.filter(p => p.id !== action.id);
        // case "Increase":
        //     const IndexI = state.findIndex((p) => p.id === action.id)
        //     state[IndexI].quantity += 1
        //     return [...state]
        // case "Decrease":
        //     const IndexD = state.findIndex((p) => p.id === action.id)
        //     state[IndexD].quantity -= 1
        //     return [...state]
        case "Increase":
            return state.map((product) =>
                product.id === action.id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
        case "Decrease":
            return state.map((product) =>
                product.id === action.id
                    ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
                    : product
            );
        default:
            return state;
    }
};

export default CartReducer;