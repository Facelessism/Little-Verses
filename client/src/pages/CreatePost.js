import React, { useState } from "react";

import "../styles/CreatePost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="create-post-wrapper">
      <h1>Create A New Post</h1>
      <p className="subtitle">Write your thoughts, ideas & experiences</p>

      <form className="post-form">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select A Category</option>
          <option value="Tech">Tech</option>
          <option value="Life">Life</option>
          <option value="Education">Education</option>
          <option value="Work">Work</option>
          <option value="Interests">Interests</option>
          <option value="Vent">Vent</option>
        </select>

        <textarea
          placeholder="Write your post content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Publish Your Blog</button>
      </form>
    </div>
  );
}

export default CreatePost;
