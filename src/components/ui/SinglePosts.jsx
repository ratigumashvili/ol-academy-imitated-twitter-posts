import Avatar from "./Avatar";

const SinglePosts = ({ user, post, image, generateInnerPost }) => {
  return (
    <article
      className="single-post"
      onClick={() => generateInnerPost(post, user, image)}
    >
      <Avatar name={user?.name} bg={user?.profBgColor} />
      <div className="single-post__main-body">
        <div className="single-post__header">
          <b>{user?.name}</b> @{user?.username}
          <div className="dropdown-container">
            <button className="btn dropdown">...</button>
          </div>
        </div>
        <p className="single-post__text">{post?.body}</p>
        <img className="single-post__poster" src={image} alt={post?.title} />
        <div className="single-post__footer">footer for buttons</div>
      </div>
    </article>
  );
};

export default SinglePosts;
