import {
  ADD_TO_CART,
  LOAD_CART_DATA,
  LOAD_PRODUCTS,
} from "../actionTypes/actionTypes";
const availableItem = localStorage.getItem("cart");
const availableCart = JSON.parse(availableItem);

const initialState = {
  products: [],
  cart: availableCart || [],
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  if (action.type === "ADD_TO_CART") {
    localStorage.setItem("cart", JSON.stringify([...state.cart]));
  }
  console.log(selectedProduct);
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
          (product) => product._id !== selectedProduct._id
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

    default:
      return state;
  }
};

export default productReducer;
