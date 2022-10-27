import { useEffect, useState } from "react";

const useFetchPosts = (url) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, [url]);

  return { posts };
};

export default useFetchPosts;
