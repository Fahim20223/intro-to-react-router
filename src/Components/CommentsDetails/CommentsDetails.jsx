import React from "react";
import { useLoaderData } from "react-router";

const CommentsDetails = () => {
  const comment = useLoaderData();
  return (
    <div>
      <h2>These are the the comments</h2>
      <h3>{comment.body}</h3>
    </div>
  );
};

export default CommentsDetails;
