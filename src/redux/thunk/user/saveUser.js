import { addUser } from "../../actions/userActions";

const addUserToDB = (user) => {
  console.log(user);
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/user/v1/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    if (data.success) {
      dispatch(addUser(user));
    }
  };
};

export default addUserToDB;
