import { toast } from "react-hot-toast";
import { addToCart } from "../../actions/productAction";

const addCartToDb = (product, email) => {
  return async (dispatch, getState) => {
    const cartItem = { ...product, email: email };
    const res = await fetch(`http://localhost:5000/v1/cart-item/${email}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });
    const data = await res.json();

    if (data.success) {
      dispatch(addToCart(product));
      toast.success(data.message);
    }

    console.log(data);
  };
};

export default addCartToDb;
