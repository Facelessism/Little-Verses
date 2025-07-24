import React from "react";

import '../styles/CategoryFilter.css';

const categories = ["Tech", "Life", "Education", "Work", "Health","Productivity", "Hobby", "Interests","Vent"];

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
