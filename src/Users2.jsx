import React, { use } from "react";
import User from "./Components/User/User";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log("users 2 suspense data load", users);
  return (
    <div>
      <h3>This is User 2</h3>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users2;
