import React, { use } from "react";

const UserDetails2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  const { name, username } = users;
  return (
    <div>
      <p>
        <small>user Name : {username}</small>
      </p>
      <p>{name}</p>
    </div>
  );
};

export default UserDetails2;
