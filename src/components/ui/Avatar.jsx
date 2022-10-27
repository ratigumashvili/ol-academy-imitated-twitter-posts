import React from "react";

const Avatar = (props) => {
  return (
    <div className="avatar" style={{ backgroundColor: props.bg }}>
      {props.name?.charAt(0)}
    </div>
  );
};

export default Avatar;
