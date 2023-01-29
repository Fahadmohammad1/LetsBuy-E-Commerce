import { LOAD_PRODUCTS } from "../actionTypes/actionTypes";

export const loadProduct = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};
