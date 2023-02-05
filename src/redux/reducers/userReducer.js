import { ADD_ROLE, LOAD_USERS } from "../actionTypes/actionTypes";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_ROLE:
      const availableUser = state.users.filter(
        (user) => action.payload._id !== user._id
      );
      console.log(availableUser);
      return {
        ...state,
        users: [...availableUser, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
