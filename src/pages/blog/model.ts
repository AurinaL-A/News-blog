
import { createStore, createEvent, sample } from 'effector';
import postsData from '../../data/posts.json';
import { Post } from '../../types/post';

export const setCategory = createEvent<string>();
export const setPage = createEvent<number>();

export const $category = createStore<string>('all').on(setCategory, (_, cat) => cat);
export const $page = createStore<number>(1).on(setPage, (_, page) => page);

const PAGE_SIZE = 3;

// Все посты
const $allPosts = createStore<Post[]>(postsData);

// Фильтрованные по категории
export const $filteredPosts = sample({
  source: { posts: $allPosts, category: $category },
  fn: ({ posts, category }) =>
    category === 'all' ? posts : posts.filter((p) => p.category === category),
});

// Видимые посты по странице
export const $visiblePosts = sample({
  source: { filtered: $filteredPosts, page: $page },
  fn: ({ filtered, page }) => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  },
});

// Всего страниц
export const $totalPages = sample({
  source: $filteredPosts,
  fn: (posts) => Math.ceil(posts.length / PAGE_SIZE),
});