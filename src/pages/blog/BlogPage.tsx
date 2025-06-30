"use client";
import React from 'react';
import { CategoryFilter } from '../../widgets/CategoryFilter';
import { PostList } from '../../widgets/PostList';
import { Pagination } from '../../widgets/Pagination';

export const BlogPage = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <h1>Новости</h1>
      <CategoryFilter />
      <PostList />
      <Pagination />
    </div>
  );
};