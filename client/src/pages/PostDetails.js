import React from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Post Details</h1>
      <p>Viewing blog post with ID: {id}</p>
    </div>
  );
}

export default PostDetails;
