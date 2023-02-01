import { ADD_USER, LOAD_USERS } from "../actionTypes/actionTypes";

export const loadUser = (users) => {
  return {
    type: LOAD_USERS,
    payload: users,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
