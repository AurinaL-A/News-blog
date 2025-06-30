import { Post } from '../../../types/post';
import { Link } from 'react-router-dom';
import React from 'react';

export const PostCard = ({ post }: { post: Post }) => (
  <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
    <h2>{post.title}</h2>
    <p>{post.short}</p>
    <Link to={`/post/${post.id}`}>Читать полностью</Link>
  </div>
);
