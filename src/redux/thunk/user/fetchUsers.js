import { loadUser } from "../../actions/userActions";

const LoadAllUsers = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/user/v1/users", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken2")}`,
      },
    });
    const data = await res.json();

    if (data.length) {
      dispatch(loadUser(data));
    }
  };
};

export default LoadAllUsers;
