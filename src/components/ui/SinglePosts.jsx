import { useState, useEffect, useRef } from "react";
import Avatar from "./Avatar";
import LikeBtn from "./LikeBtn";
import SelectList from "./SelectList";

const SinglePosts = ({ user, post, image, generateInnerPost, handleLike }) => {
  const [initialCount, setInitialCount] = useState(
    Math.floor(Math.random() * 1000)
  );
  const handleLikeCount = (value) => {
    value === true
      ? setInitialCount(initialCount - 1)
      : setInitialCount(initialCount + 1);
  };
  const [showDropdown, setShowDropDown] = useState(false);
  const dropdownRef = useRef();
  const handleDropDown = (e) => {
    e.stopPropagation();
    setShowDropDown((prev) => !prev);
  };
  const closeDropDown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropDown);
    return () => document.removeEventListener("click", closeDropDown);
  }, []);
  return (
    <article
      className="single-post"
      onClick={() => generateInnerPost(post, user, image)}
    >
      <Avatar name={user?.name} bg={user?.profBgColor} />
      <div className="single-post__main-body">
        <div className="single-post__header">
          <b>{user?.name}</b> @{user?.username}
          <div className="dropdown-container" ref={dropdownRef}>
            <button className="btn dropdown" onClick={(e) => handleDropDown(e)}>
              ...
            </button>
            {showDropdown && (
              <SelectList
                generateInnerPost={generateInnerPost}
                post={post}
                user={user}
                image={image}
                handleLike={handleLike}
                handleLikeCount={handleLikeCount}
                setShowDropDown={setShowDropDown}
              />
            )}
          </div>
        </div>
        <p className="single-post__text">{post?.body}</p>
        <img className="single-post__poster" src={image} alt={post?.title} />
        <div className="single-post__footer">
          <LikeBtn
            id={post.id}
            liked={post.isLiked}
            handleLike={handleLike}
            initialCount={initialCount}
            handleLikeCount={handleLikeCount}
          />
        </div>
      </div>
    </article>
  );
};

export default SinglePosts;
