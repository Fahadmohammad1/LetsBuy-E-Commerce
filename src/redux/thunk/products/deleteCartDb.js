import { deleteFromCart } from "../../actions/productAction";

const deleteCartDb = (product, email) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/v1/cart-item/${email}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    console.log(data);
    console.log(product);
    dispatch(deleteFromCart(product));
  };
};

export default deleteCartDb;
