import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const CommentsDetails = () => {
  const comment = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <h2>These are the the comments</h2>
      <h3>{comment.body}</h3>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default CommentsDetails;
