import { useEffect, useState } from "react";

const useFetchPosters = (url) => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPosters(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosters();
  }, [url]);

  return { posters };
};

export default useFetchPosters;
