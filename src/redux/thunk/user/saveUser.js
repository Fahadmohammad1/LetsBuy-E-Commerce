import { addUser } from "../../actions/userActions";

const addUserToDB = (user) => {
  console.log(user);
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/user/v1/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      dispatch(addUser(user));
    }
  };
};

export default addUserToDB;
