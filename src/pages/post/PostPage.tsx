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
      <div className='container'>
        <h2>Пост не найден</h2>
        <Link to="/">Вернуться назад</Link>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='image'>
        <img className='img' src={post.image} alt="img" />
      </div>
      
      <h1>{post.title}</h1>
      <p className='text_full'>{post.full}</p>
      <Link to="/">← Назад к новостям</Link>
    </div>
  );
};