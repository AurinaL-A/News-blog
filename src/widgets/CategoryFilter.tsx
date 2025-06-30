import React from 'react';
import { useUnit } from 'effector-react';
import { setCategory, setPage, $category } from '../pages/blog/model';

const categories = ['all', 'Спорт', 'История', 'Технологии', 'Культура'];

export const CategoryFilter = () => {
  const selectedCategory = useUnit($category);

  const handleClick = (category: string) => {
    setCategory(category);
    setPage(1); // сброс пагинации при смене категории
  };

  return (
    <div className="filter">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={cat === selectedCategory ? 'active' : ''}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};