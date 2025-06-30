import React from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../../data/posts.json';
import { Post } from '../../types/post';

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const post = postsData.find((p) => p.id === postId);

  if (!post) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Пост не найден</h2>
        <Link to="/">Вернуться назад</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p>{post.full}</p>
      <Link to="/">← Назад к новостям</Link>
    </div>
  );
};