import { addUser } from "../../actions/userActions";

const makeAdmin = (user) => {
  return async (dispatch, getState) => {
    const data = await fetch(
      `http://localhost:5000/user/v1/user/${user?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const res = await data.json();
    console.log(res);
    if (res.success) {
      dispatch(addUser(user));
    }
  };
};

export default makeAdmin;
