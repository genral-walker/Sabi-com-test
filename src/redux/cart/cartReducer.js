
import { products } from '../../static';
import cartActionTypes from './cartActionTypes';
import { addItemToCart, calculateOverallPrice, calculateOverallQuantity, decrementQuantity, deleteCart, IncrementQuantity } from './cartUtils';


const INITIAL_STATE = {
    products,
    cartItems: [],
    totalCartItems: 0,
    totalAmount: 0,
    outOfStock: false,
    showPopUpOnClick: false
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case cartActionTypes.CART_ADDED:
            return {
                ...state,
                cartItems: addItemToCart(state.products, state.cartItems, payload),
                totalCartItems: calculateOverallQuantity(),
                totalAmount: calculateOverallPrice()
            }
        case cartActionTypes.CART_INCREMENTED:
            return {
                ...state,
                cartItems: IncrementQuantity(state.cartItems, payload),
                totalCartItems: calculateOverallQuantity(),
                totalAmount: calculateOverallPrice()
            }
        case cartActionTypes.CART_DECREMENTED:
            return {
                ...state,
                cartItems: decrementQuantity(state.cartItems, payload),
                totalCartItems: calculateOverallQuantity(),
                totalAmount: calculateOverallPrice()
            }
        case cartActionTypes.CART_DELETED:
            return {
                ...state,
                cartItems: deleteCart(state.cartItems, payload),
                totalCartItems: calculateOverallQuantity(),
                totalAmount: calculateOverallPrice()
            }
        case cartActionTypes.STOCK_FINISHED:
            return {
                ...state,
                outOfStock: payload
            }
        case cartActionTypes.SHOW_POP_UP:
            return {
                ...state,
                showPopUpOnClick: true
            }
        case cartActionTypes.HIDE_POP_UP:
            return {
                ...state,
                showPopUpOnClick: false
            }
        default:
            return state
    }
};

export default cartReducer;