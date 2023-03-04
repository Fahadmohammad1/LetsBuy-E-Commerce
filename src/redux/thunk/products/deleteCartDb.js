const deleteCartDb = (product, email) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/v1/cart-item/${email}`, {
      method: "DELETE",
      Headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product.productId),
    });

    const data = res.json();
  };
};

export default deleteCartDb;
