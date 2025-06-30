import { setCategory, setPage } from '../pages/blog/model';
import React from 'react';

const categories = ['all', 'sport', 'history'];

export const CategoryFilter = () => {
  const handleClick = (category: string) => {
    setCategory(category);
    setPage(1); // сбрасываем на первую страницу при смене фильтра
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          style={{ marginRight: '10px' }}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};