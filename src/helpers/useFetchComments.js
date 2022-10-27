import { useEffect, useState } from "react";

const useFetchComments = (url) => {
  const [fetchedComments, setFetchedComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setFetchedComments(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [url]);

  return { fetchedComments, loading };
};

export default useFetchComments;
