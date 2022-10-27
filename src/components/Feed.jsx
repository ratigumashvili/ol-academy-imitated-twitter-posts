import { useState, useEffect } from "react";
import SinglePosts from "./ui/SinglePosts";

import useFetchPosts from "../helpers/useFetchPosts";
import useFetchUsers from "../helpers/useFetchUsers";
import useFetchPosters from "../helpers/useFetchPosters";

const POSTS_URL = `https://jsonplaceholder.typicode.com/posts/`;
const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const POSTERS_URL = `https://jsonplaceholder.typicode.com/photos`;

const Feed = () => {
  const { posts } = useFetchPosts(POSTS_URL);
  const { users } = useFetchUsers(USERS_URL);
  const { posters } = useFetchPosters(POSTERS_URL);

  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [updatedPosts, setUpdatedPosts] = useState([]);

  useEffect(() => {
    const generateModifiedUser = () => {
      const allUsers = users?.map((user) => {
        let profBgColor = `#${Math.floor(Math.random() * 0xffffff).toString(
          16
        )}`;
        return { ...user, profBgColor };
      });
      setUpdatedUsers(allUsers);
    };
    generateModifiedUser();
  }, [users]);

  useEffect(() => {
    const generateModifiedPosts = () => {
      const allPosts = posts?.map((post) => {
        let isLiked = false;
        return { ...post, isLiked };
      });
      setUpdatedPosts(allPosts);
    };
    generateModifiedPosts();
  }, [posts]);

  return (
    <div>
      feed
      {updatedPosts?.map((post) => (
        <SinglePosts
          key={post.id}
          user={updatedUsers[post.userId - 1]}
          post={post}
          image={posters[post.id]?.url}
        />
      ))}
    </div>
  );
};

export default Feed;
