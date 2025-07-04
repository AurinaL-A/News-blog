import React from 'react';
import { useStore } from 'effector-react';
import { $page, $totalPages, setPage } from '../pages/blog/model';

export const Pagination = () => {
  const currentPage = useStore($page);
  const totalPages = useStore($totalPages);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='pagination'>
      {pages.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => setPage(pageNum)}
          className={pageNum === currentPage ? 'active' : ''}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
};