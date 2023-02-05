import { LOAD_USERS } from "../actionTypes/actionTypes";

export const loadUser = (users) => {
  return {
    type: LOAD_USERS,
    payload: users,
  };
};
