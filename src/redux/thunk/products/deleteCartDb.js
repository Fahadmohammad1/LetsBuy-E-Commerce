const deleteCartDb = () => {
  return async (dispatch, getState) => {
    const res = await fetch(``, {
      method: "DELETE",
      Headers: {
        "Content-type": "application/json",
      },
    });

    const data = res.json();
  };
};

export default deleteCartDb;
