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
          <option value="tech">Tech</option>
          <option value="life">Life</option>
          <option value="education">Education</option>
          <option value="work">Work</option>
           <option value="health">Health</option>
            <option value="productivity">Productivity</option>
             <option value="hobby">Hobby</option>
          <option value="interests">Interests</option>
          <option value="vent">Vent</option>
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
