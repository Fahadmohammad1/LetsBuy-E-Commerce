const addRole = (store) => (next) => (action) => {
  const state = store.getState();

  const user = state;
  console.log(user);
};

export default addRole;
