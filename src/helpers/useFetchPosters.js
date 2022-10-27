import { useEffect, useState } from "react";

const useFetchPosters = (url) => {
  const [posters, setPosters] = useState([]);
  const [loadingPosters, setLoadingPosters] = useState(true);

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        setLoadingPosters(true);
        const response = await fetch(url);
        const data = await response.json();
        setPosters(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingPosters(false);
      }
    };

    fetchPosters();
  }, [url]);

  return { posters, loadingPosters };
};

export default useFetchPosters;
