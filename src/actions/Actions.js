import * as types from './ActionTypes';

export function userLogin(value) {
  return {type: types.USER_LOGIN, payload: value };
}

export function userLogout() {
  return {type: types.USER_LOGOUT};
}

export function addToCart(value) {
  return {type: types.ADD_TO_CART, payload: value };
}

export function removeFromCart(value) {
  return {type: types.REMOVE_FROM_CART, payload: value };
}

export function toggleCart(value) {
  return { type: types.TOGGLE_CART };
}