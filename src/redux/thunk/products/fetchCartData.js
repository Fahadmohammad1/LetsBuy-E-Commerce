import { loadCartData } from "../../actions/productAction";

const fetchCartData = (email) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/v1/cart-item/${email}`);
    const data = await res.json();

    console.log(data);

    if (data.length) {
      dispatch(loadCartData(data));
    }
  };
};

export default fetchCartData;
