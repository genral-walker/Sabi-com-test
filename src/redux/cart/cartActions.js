
import cartActionTypes from './cartActionTypes'

export const addToCart = productID => ({
    type: cartActionTypes.CART_ADDED,
    payload: productID
});

export const IncrementQuantity = productID => ({
    type: cartActionTypes.CART_INCREMENTED,
    payload: productID
});

export const decrementQuantity = productID => ({
    type: cartActionTypes.CART_DECREMENTED,
    payload: productID
});

export const deleteProduct = productID => ({
    type: cartActionTypes.CART_DELETED,
    payload: productID
});

