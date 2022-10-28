import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import generateColor from "../helpers/generateColor";
import SinglePosts from "./ui/SinglePosts";
import CurrentPost from "./ui/CurrentPost";
import Spinner from "./ui/Spinner";

const POSTS_URL = `https://jsonplaceholder.typicode.com/posts/`;
const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const POSTERS_URL = `https://jsonplaceholder.typicode.com/photos`;

const Feed = ({ commentOpen, setCommentOpen }) => {
  const { data: posts, loading: loadingPosts } = useFetch(POSTS_URL);
  const { data: users, loading: loadingUsers } = useFetch(USERS_URL);
  const { data: posters, loading: loadingPosters } = useFetch(POSTERS_URL);

  const [updatedUsers, setUpdatedUsers] = useState([]);
  const [updatedPosts, setUpdatedPosts] = useState([]);
  const [innerPost, setInnerPost] = useState({});

  useEffect(() => {
    const generateModifiedUser = () => {
      const allUsers = users?.map((user) => {
        let profBgColor = generateColor();
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

  if (loadingPosters || loadingPosts || loadingUsers) {
    return <Spinner />;
  }

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
        <CurrentPost innerPost={innerPost} />
      )}
    </div>
  );
};

export default Feed;
