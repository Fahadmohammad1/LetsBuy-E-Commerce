import { toast } from "react-hot-toast";
import { addToCart } from "../../actions/productAction";

const addCartToDb = (product, userEmail) => {
  return async (dispatch, getState) => {
    const cartItem = { ...product, email: userEmail };
    const res = await fetch(
      `http://localhost:5000/v1/cart-item/query?userEmail=${userEmail}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      }
    );
    const data = await res.json();

    if (data.success) {
      dispatch(addToCart(product));
      toast.success(data.message);
    } else {
      dispatch(addToCart(product));
      toast.success("quantity increased");
    }
  };
};

export default addCartToDb;
