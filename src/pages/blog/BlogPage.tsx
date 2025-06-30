"use client";
import React from 'react';
import { CategoryFilter } from '../../widgets/CategoryFilter';
import { PostList } from '../../widgets/PostList';
import { Pagination } from '../../widgets/Pagination';

export const BlogPage = () => {
  return (
    <div >
      <h1>Новости</h1>
      <CategoryFilter />
      <PostList />
      <Pagination />
    </div>
  );
};