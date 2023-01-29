const addUserToDB = (user) => {
  return async () => {
    const res = await fetch("http://localhost:5000/user/v1/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
};

export default addUserToDB;
