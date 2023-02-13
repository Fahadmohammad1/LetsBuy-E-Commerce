import { toast } from "react-hot-toast";
import { addToCart } from "../../actions/productAction";

const addCartToDb = (product, email) => {
  return async (dispatch, getState) => {
    const cartItem = { ...product, email: email };
    const res = await fetch(``, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });
    const data = await res.json();

    console.log(data);
  };
};

export default addCartToDb;
