import { toast } from "react-hot-toast";
import { addToCart } from "../../actions/productAction";

const addCartToDb = (product, email) => {
  return async (dispatch, getState) => {
    const cartItem = { ...product, email: email };
    const res = await fetch(`http://localhost:5000/v1/cart-item/${email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });
    const data = await res.json();

    if (data.success) {
      dispatch(
        addToCart({
          ...product,
          _id: data.data._id,
        })
      );
      toast.success(data.message);
    } else {
      dispatch(addToCart(product));
      toast.success("Quantity Increased");
    }

    console.log(data);
  };
};

export default addCartToDb;
