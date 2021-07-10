
import { products } from '../../static';
import cartActionTypes from './cartActionTypes';
import { addItemToCart, decrementQuantity, deleteCart, IncrementQuantity } from './cartUtils';


const INITIAL_STATE = {
    products,
    cartItems: [],
    totalCartItems: 0,
    overallQuantity: 0,
    totalAmount: 0
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case cartActionTypes.CART_ADDED:
            return {
                ...state,
                cartItems: addItemToCart(state.products, state.cartItems, payload)
            }
        case cartActionTypes.CART_INCREMENTED:
            return {
                ...state,
                cartItems: IncrementQuantity(state.cartItems, payload)
            }
        case cartActionTypes.CART_DECREMENTED:
            return {
                ...state,
                cartItems: decrementQuantity(state.cartItems, payload)
            }
        case cartActionTypes.CART_DELETED:
            return {
                ...state,
                cartItems: deleteCart(state.cartItems, payload)
            }
        default:
            return state
    }
};

export default cartReducer;