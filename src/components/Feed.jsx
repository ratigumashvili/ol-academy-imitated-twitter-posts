import { useState, useEffect } from "react";
import SinglePosts from "./ui/SinglePosts";
import CurrentPost from "./ui/CurrentPost";

import useFetchPosts from "../helpers/useFetchPosts";
import useFetchUsers from "../helpers/useFetchUsers";
import useFetchPosters from "../helpers/useFetchPosters";

const POSTS_URL = `https://jsonplaceholder.typicode.com/posts/`;
const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const POSTERS_URL = `https://jsonplaceholder.typicode.com/photos`;

const Feed = ({ commentOpen, setCommentOpen }) => {
  const { posts } = useFetchPosts(POSTS_URL);
  const { users } = useFetchUsers(USERS_URL);
  const { posters } = useFetchPosters(POSTERS_URL);

  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [updatedPosts, setUpdatedPosts] = useState([]);
  const [innerPost, setInnerPost] = useState({});

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

  const generateInnerPost = (post, user, image) => {
    setInnerPost({
      name: user.name,
      username: user.username,
      bg: user.profBgColor,
      id: post.id,
      body: post.body,
      imageUrl: image,
      isLiked: post.isLiked,
    });
    setCommentOpen(true);
  };

  const handleLike = (e, currentId) => {
    e.stopPropagation();
    const newArr = updatedPosts.map((item) => {
      if (item.id === currentId) {
        item.isLiked = !item.isLiked;
      }
      return item;
    });
    setUpdatedPosts(newArr);
  };

  return (
    <div>
      {!commentOpen ? (
        updatedPosts?.map((post) => (
          <SinglePosts
            key={post.id}
            user={updatedUsers[post.userId - 1]}
            post={post}
            image={posters[post.id]?.url}
            generateInnerPost={generateInnerPost}
            handleLike={handleLike}
          />
        ))
      ) : (
        <CurrentPost innerPost={innerPost} handleLike={handleLike} />
      )}
    </div>
  );
};

export default Feed;
