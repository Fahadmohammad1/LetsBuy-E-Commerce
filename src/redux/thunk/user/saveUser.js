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
    console.log(data);
    if (data.success) {
      dispatch(addUser(user));
    }
    localStorage.setItem("accessToken2", data.accesToken);
  };
};

export default addUserToDB;
