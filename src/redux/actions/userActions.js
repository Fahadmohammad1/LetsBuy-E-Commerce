import { ADD_USER } from "../actionTypes/actionTypes";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
