import React from 'react';

import '../styles/BlogCard.css';

function BlogCard({ post }) {
    return(
        <div className='blog-card'>
        <div className="blog-header">
            <h3>{post.title}</h3>
            <span className='="blog-category'>{post.category}</span>
        </div>
        <p>{post.excerpt}</p>
        <div className="blog-footer">By {post.author}</div>
        </div>       
    );
}

export default BlogCard;