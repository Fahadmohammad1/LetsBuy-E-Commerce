import { deleteFromCart } from "../../actions/productAction";

const deleteCartDb = (product, userEmail) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `http://localhost:5000/v1/cart-item-delete/query?userEmail=${userEmail}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    const data = await res.json();

    console.log(product);
    dispatch(deleteFromCart(product));
  };
};

export default deleteCartDb;
