import { ADD_TO_CART, LOAD_PRODUCTS } from "../actionTypes/actionTypes";

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default productReducer;
