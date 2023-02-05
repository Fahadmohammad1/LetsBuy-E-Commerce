import { ADD_ROLE, LOAD_USERS } from "../actionTypes/actionTypes";

export const loadUser = (users) => {
  return {
    type: LOAD_USERS,
    payload: users,
  };
};

export const addAdminRole = (user) => {
  return {
    type: ADD_ROLE,
    payload: user,
  };
};
