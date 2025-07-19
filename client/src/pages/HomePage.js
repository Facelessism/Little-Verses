 import React from "react";

 import '../styles/HomePage.css';
 import BlogCard from "../components/BlogCard";
 import CategoryFilter from "../components/CategoryFilter";

const dummyPosts = [
  {
    id: 1,
    title: "Three Lessons",
    author: "Anisha",
    excerpt: "These are the three things that you should never forget...",
    category: "Life",
  },
  {
    id: 2,
    title: "Workplace Productivity",
    author: "Rahul",
    excerpt: "Learn how to get things done without burning out at your job...",
    category: "Work",
  },
];

function HomePage() {
  return (
    <div className="home-wrapper">
      <section className="hero">
      <h1>Welcome to Little Verses</h1>
      <p>Your Personal Blogging Platform to Read, Write & Share</p>
      <p>Browse recent posts, trending topics in categories</p>
    <input className="search-bar" placeholder="Search posts..." />
      </section>

      <CategoryFilter />

      <section className="featured">
        {dummyPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
