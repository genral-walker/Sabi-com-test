
import { products } from '../../static';
import cartActionTypes from './cartActionTypes';
import { addItemToCart } from './cartUtils';


const INITIAL_STATE = {
    products,
    cartItems: [],
    totalCartItems: 0,
    totalAmount: 0
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case cartActionTypes.CART_ADDED:
            return {
                ...state,
                cartItems: state.cartItems.push(addItemToCart(state.products, payload))
            }
        default:
            return state
    }
};

export default cartReducer;