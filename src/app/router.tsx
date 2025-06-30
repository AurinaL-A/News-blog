import { Routes, Route } from 'react-router-dom';
import { BlogPage } from '../pages/blog/BlogPage';
import { PostPage } from '../pages/post/PostPage';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<BlogPage />} />
    <Route path="/post/:id" element={<PostPage />} />
  </Routes>
);