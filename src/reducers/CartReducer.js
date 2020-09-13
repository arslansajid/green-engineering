import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from '../actions/ActionTypes';
import { combineReducers } from 'redux';

export function cart(state = [], action) {
    switch(action.type) {
      case ADD_TO_CART:
        return [ ...state, ...action.payload ];
      case REMOVE_FROM_CART:
      let presentCart = [...state];
      // var apps = [{id:34,name:'My App',another:'thing'},{id:37,name:'My New App',another:'things'}];

      // get index of object with id:37
      presentCart.splice(action.payload, 1)
      // var removeIndex = presentCart.map(function(item) { return item.id; }).indexOf(action.payload.id);

      // remove object
      // presentCart.splice(removeIndex, 1);
        return presentCart;
      default: 
      return state;
    }
  }

  export function isCartOpen(state = false, action) {
    switch(action.type) {
      case TOGGLE_CART:
        return !state;
      default: 
      return state;
    }
  }

  export default combineReducers({
    cart,
    isCartOpen,
  })