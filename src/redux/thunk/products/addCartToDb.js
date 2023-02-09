const addCartToDb = (product) => {
  return async (dispatch, getState) => {
    const res = fetch("http://localhost:5000/v1/cart-item", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = (await res).json();

    console.log(data);
  };
};

export default addCartToDb;
