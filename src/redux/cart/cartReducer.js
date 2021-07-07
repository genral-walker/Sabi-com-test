
import { products } from '../../static';
import cartActionTypes from './cartActionTypes';
import { } from './cartUtils';


const INITIAL_STATE = {
    products,
    cartItems: []

};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {

        default:
            return state
    }
};

export default cartReducer;