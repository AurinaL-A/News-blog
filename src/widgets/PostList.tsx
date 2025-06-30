import React from 'react';
import { useStore } from 'effector-react';
import { $visiblePosts } from '../pages/blog/model';
import { PostCard } from '../entities/post/ui/PostCard';

export const PostList = () => {
  const posts = useStore($visiblePosts);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};