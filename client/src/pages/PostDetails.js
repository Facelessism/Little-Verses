import React from "react";
import { useParams } from "react-router-dom";

import '../styles/PostDetails.css';

const dummyPosts = [
  {
    id: 1,
    title: "Three Lessons",
    author: "Anisha",
    excerpt: "These are the three things that you should never forget...",
    content: `These are the three things that you should never forget:
    
1. Be kind to yourself, especially when you're learning.
2. Don't chase perfection, chase consistency.
3. You grow most when you're uncomfortable.

Start today. Reflect, grow, and live fully.`,
    category: "Life",
    date: "July 24, 2025",
  },
  {
    id: 2,
    title: "Workplace Productivity",
    author: "Rahul",
    excerpt: "Learn how to get things done without burning out at your job...",
    content: `Struggling with burnout? Here's what worked for me:
- Set realistic goals every morning.  
- Take intentional short breaks.  
- Respect your off-hours.

You don't have to sacrifice well-being to succeed at work.`,
    category: "Work",
    date: "July 23, 2025",
  },
];

function PostDetails() {
  const { id } = useParams();
  const post = dummyPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div style={{ padding: "2rem" }}>Post Not Found!!!</div>;
  }

  const comments = [
    { id: 1, user: "Maya", text: "Really loved this post!", date: "July 24, 2025" },
    { id: 2, user: "Zeus", text: "Great insights, thanks!", date: "July 25, 2025" },
  ];

return (
    <div className="post-details-wrapper">
      <div className="post-main">
        <h1>{post.title}</h1>
        <div className="meta">
          <span>Blog by <strong>{post.author}</strong></span>
          <span> | {post.date}</span>
          <span> | Category: <em>{post.category}</em></span>
        </div>

        <div className="post-content">
          <p>{post.content}</p>
        </div>

        <section className="comments-section">
          <h3>Comments</h3>
          {comments.map((c) => (
            <div key={c.id} className="comment">
              <strong>{c.user}</strong>
              <p>{c.text}</p>
              <span className="comment-date">{c.date}</span>
            </div>
          ))}
        </section>
      </div>

      <aside className="post-sidebar">
        <h4>Popular Posts</h4>
        <ul>
          {dummyPosts
            .filter((p) => p.id !== post.id)
            .map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
        </ul>
      </aside>
    </div>
  );
}

export default PostDetails;
