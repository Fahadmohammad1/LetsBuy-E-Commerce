import { toast } from "react-hot-toast";
import { addUser } from "../../actions/userActions";

const makeAdmin = (user) => {
  return async (dispatch, getState) => {
    const data = await fetch(
      `http://localhost:5000/user/v1/user/${user?._id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken2")}`,
        },
      }
    );
    const res = await data.json();
    console.log(res);
    if (res.success) {
      dispatch(addUser(user));
      toast.success("Make admin successful");
    } else {
      toast.error("Make admin failed");
    }
  };
};

export default makeAdmin;
