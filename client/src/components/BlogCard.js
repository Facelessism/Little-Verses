import React from 'react';

import '../styles/BlogCard.css';

function BlogCard({ post }) {
    return(
        <div className='blog-card'>
        <div className="blog-content">
        <div className="blog-header">
          <h3 className="blog-title">{post.title}</h3>
          <span className="blog-category">{post.category}</span>
        </div>

        <p className="blog-excerpt">{post.excerpt}</p>

        <div className="blog-footer">
          <span>By {post.author}</span>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;