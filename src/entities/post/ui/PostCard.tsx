import { Post } from '../../../types/post';
import { Link } from 'react-router-dom';
import React from 'react';

export const PostCard = ({ post }: { post: Post }) => (
  <div className="b-categories__item">
    <div className="b-categories__item__header-info">
      <p className="b-categories__item__number">Категория: {post.category}</p>
      <p className="b-categories__item__date">{post.date}</p>
    </div>
    <h2 className="b-categories__item__title">{post.title}</h2>
    <p className="b-categories__item__description grey">{post.short}</p>
    <Link to={`/post/${post.id}`}>Читать полностью</Link>
  </div>
);
