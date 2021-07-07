

import searchActionTypes from './searchActionTypes';

export const searchProduct = searchInputValue => ({
    type: searchActionTypes.SEARCH_PRODUCT,
    payload: searchInputValue 
});

export const refreshProducts = () => ({
    type: searchActionTypes.REFRESH_PRODUCTS
});

export const searchByState = InputValue => ({
    type: searchActionTypes.SEARCH_BY_STATE,
    payload: InputValue
})
