import React from "react";

import '../styles/CategoryFilter.css';

const categories = ["Tech", "Life", "Education", "Health", "Productivity", "Hobby"];

function CategoryFilter() {
  return (
    <div className="category-bar">
      {categories.map(cat => (
        <span key={cat} className="category-pill">{cat}</span>
      ))}
    </div>
  );
}

export default CategoryFilter;
