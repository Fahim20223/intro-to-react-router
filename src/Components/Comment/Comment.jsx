import React from "react";
import { Link, useNavigate } from "react-router";

const Comment = ({ comment }) => {
  const { id, name, email, body } = comment;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/comments/${id}`);
  };
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
      <button onClick={handleNavigate}>Details of comments : {id}</button>
    </div>
  );
};

export default Comment;
