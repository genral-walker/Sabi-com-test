
import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  cart: cartReducer
});


export default rootReducer;
