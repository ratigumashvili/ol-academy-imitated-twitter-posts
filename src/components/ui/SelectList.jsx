import React from "react";

const SelectList = ({
  generateInnerPost,
  post,
  user,
  image,
  handleLike,
  handleLikeCount,
  setShowDropDown,
}) => {
  return (
    <ul className="dropdown-list">
      <li onClick={() => generateInnerPost(post, user, image)}>View post</li>
      <li
        onClick={(e) => {
          handleLikeCount(post.isLiked);
          handleLike(e, post.id);
          setShowDropDown(false);
        }}
      >
        {post.isLiked ? "Dislike" : "Like"}
      </li>
    </ul>
  );
};

export default SelectList;
