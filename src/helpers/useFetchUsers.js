import { useEffect, useState } from "react";

const useFetchUsers = (url) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [url]);

  return { users };
};

export default useFetchUsers;
