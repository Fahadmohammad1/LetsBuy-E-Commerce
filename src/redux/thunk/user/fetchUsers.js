import { addUser } from "../../actions/userActions";

const LoadAllUsers = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/user/v1/users");
    const data = await res.json();
    console.log(data);

    if (data.length) {
      dispatch(addUser(data));
    }
  };
};

export default LoadAllUsers;
