
import searchActionTypes from './searchActionTypes';
import { productSearched, searchByState } from './searchUtils';
import { products } from '../../static';


const INITIAL_STATE = {
  products,
  currentLocation: 'all',
  filteredProducts: products
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {

  switch (type) {

    case searchActionTypes.SEARCH_PRODUCT:
      return {
        ...state,
        filteredProducts: productSearched(state.products, payload, state.currentLocation)
      }

    case searchActionTypes.SEARCH_BY_STATE:
      return {
        ...state,
        currentLocation: payload,
        filteredProducts: searchByState(state.products, payload)
      }

    case searchActionTypes.REFRESH_PRODUCTS:
      return {
        ...state,
        currentLocation: 'all',
        filteredProducts: state.products
      }

    default:
      return state;
  }
};

export default searchReducer;
