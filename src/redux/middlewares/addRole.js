import { ADD_ROLE } from "../actionTypes/actionTypes";

const addRole = (store) => (next) => (action) => {
  const state = store.getState();

  const user = state?.user?.users;
  console.log(user);

  if (action.type === ADD_ROLE) {
    const newRoleAction = {
      ...action,
      payload: { ...action.payload, role: "admin" },
    };
    return next(newRoleAction);
  }

  return next(action);
};

export default addRole;
