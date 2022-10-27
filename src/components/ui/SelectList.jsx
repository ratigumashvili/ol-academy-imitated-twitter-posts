import React from "react";

const SelectList = () => {
  const handleClick = (e) => e.stopPropagation();
  return (
    <ul className="dropdown-list" onClick={(e) => handleClick(e)}>
      <li>Show post</li>
      <li>Like/dislike</li>
    </ul>
  );
};

export default SelectList;
