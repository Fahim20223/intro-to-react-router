import React from "react";
import { Link } from "react-router";

const Comment = ({ comment }) => {
  const { id, name, email, body } = comment;
  return (
    <div
      style={{
        border: "2px solid skyblue",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <h3>{name}</h3>
      <h5>{email}</h5>
      <p>{body}</p>
      <Link to={`/comments/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Comment;
