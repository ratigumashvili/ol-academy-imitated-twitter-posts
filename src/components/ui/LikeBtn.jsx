import { BsHeart, BsHeartFill } from "react-icons/bs";

const LikeBtn = ({ id, liked, handleLike, initialCount, handleLikeCount }) => {
  return (
    <button
      className="btn"
      title={!liked ? "Like" : "Dislike"}
      onClick={(e) => {
        handleLike(e, id);
        handleLikeCount(liked);
      }}
    >
      {!liked ? (
        <>
          <BsHeart size={20} className="icon like-icon" />
          {initialCount}
        </>
      ) : (
        <>
          <BsHeartFill size={20} className="icon like-icon" />
          {initialCount}
        </>
      )}
    </button>
  );
};

export default LikeBtn;
