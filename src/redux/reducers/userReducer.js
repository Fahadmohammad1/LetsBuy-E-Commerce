import { ADD_USER, LOAD_USERS } from "../actionTypes/actionTypes";

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
    case ADD_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
