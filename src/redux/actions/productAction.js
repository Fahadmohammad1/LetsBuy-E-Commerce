import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  LOAD_CART_DATA,
  LOAD_PRODUCTS,
} from "../actionTypes/actionTypes";

export const loadProduct = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const loadCartData = (products) => {
  return {
    type: LOAD_CART_DATA,
    payload: products,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};
