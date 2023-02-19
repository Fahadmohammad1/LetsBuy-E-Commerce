import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  LOAD_CART_DATA,
  LOAD_PRODUCTS,
} from "../actionTypes/actionTypes";

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product.productId === action.payload._id
  );

  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case LOAD_CART_DATA:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.productId !== selectedProduct.productId
        );
        console.log(newCart);

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case DELETE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        console.log("hello");
        return state;
      }
      return state;

    default:
      return state;
  }
};

export default productReducer;
