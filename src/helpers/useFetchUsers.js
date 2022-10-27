import { useEffect, useState } from "react";

const useFetchUsers = (url) => {
  const [users, setUsers] = useState([]);
  const [loadUsers, setLoadUsers] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadUsers(true);
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadUsers(false);
      }
    };
    fetchUsers();
  }, [url]);

  return { users, loadUsers };
};

export default useFetchUsers;
