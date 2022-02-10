import { Fragment, useState, useEffect } from 'react';
import './App.css';
import PostsList from './components/PostsList';

function App() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostsHandler = (async () => {
    setIsLoading(true);
    setError(null);
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const data = await response.json();
    setPost(data);
    }
    catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  });
  useEffect(() => {
    fetchPostsHandler()
  }, []);

  let content = <p>Empty</p>;

  if (post.length > 0) {
    content = <PostsList posts={post} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>POSTS</h1>
      {content}
      {Error}
    </Fragment>
  );
}

export default App;
