import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [fetchPosts] = useFetch<Post[]>();
  const [postsState, setPostsState] = useState<{ data: Post[] | null, loading: boolean, error: string | null }>({ data: null, loading: false, error: null });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchPosts('https://jsonplaceholder.typicode.com/posts');
      setPostsState(result);
    };

    fetchData();
  }, [fetchPosts]);

  if (postsState.loading) return <div>Loading...</div>;
  if (postsState.error) return <div>Error: {postsState.error}</div>;

  return (
    <div>
      {postsState.data?.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
