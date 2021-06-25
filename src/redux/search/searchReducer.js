
import searchActionTypes from './search.types';
import { searchByName, searchByLocation, updateLocation, updateSearch } from './search.utils';
import { products } from '../../static';


const INITIAL_STATE = {
  products: products,
  search: '',
  location: ''
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case searchActionTypes.SEARCH_PRODUCT:
      searchByName(state.text, state.products);
      break;

    case searchActionTypes.SEARCH_BY_STATE:
      searchByLocation(state.location, state.products);
      break;

    case searchActionTypes.UPDATE_SEARCH:
      updateSearch(state.text);
      return state.products;
      break;

    case searchActionTypes.UPDATE_LOCATION:
      updateLocation(state.location);
      break;

    default:
      return state;
  }
};

export default searchReducer;
