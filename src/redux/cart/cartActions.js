
import cartActionTypes from './cartActionTypes'

export const addToCart = productID =>({
    type: cartActionTypes.CART_ADDED,
    payload: productID
})