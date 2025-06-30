
import { Routes, Route } from 'react-router-dom';
import { BlogPage } from '../pages/blog/BlogPage';
import { PostPage } from '../pages/post/PostPage';
import { Layout } from '../pages/layout'; // <-- добавь импорт

export const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <BlogPage />
        </Layout>
      }
    />
    <Route
      path="/post/:id"
      element={
        <Layout>
          <PostPage />
        </Layout>
      }
    />
  </Routes>
);