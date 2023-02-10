import { addToCart } from "../../actions/productAction";

const addCartToDb = (product, email) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/v1/cart-item/${email}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (data.success) {
      dispatch(addToCart(product));
    }

    console.log(data);
  };
};

export default addCartToDb;
