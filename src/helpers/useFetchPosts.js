import { useEffect, useState } from "react";

const useFetchPosts = (url) => {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoadingPosts(true);
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchPosts();
  }, [url]);

  return { posts, loadingPosts };
};

export default useFetchPosts;
