const makeAdmin = (user) => {
  return async (dispatch, getState) => {
    const data = await fetch(`http://localhost:5000/user/v1/user/${user?._id}`);
    const res = data.json();
    console.log(res);
  };
};

export default makeAdmin;
