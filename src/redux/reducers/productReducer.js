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

  const availableProduct = state.cart.find(
    (product) => product.productId === action.payload.productId
  );
  console.log(availableProduct);

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
      if (availableProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product.productId !== action.payload.productId
        );

        availableProduct.quantity = availableProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, availableProduct],
        };
      }
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (product) => product.productId !== action.payload.productId
          ),
        ],
      };

    default:
      return state;
  }
};

export default productReducer;
