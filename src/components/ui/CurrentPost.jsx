import useFetch from "../../hooks/useFetch";
import Avatar from "./Avatar";
import CommentBlock from "./CommentBlock";
import Spinner from "./Spinner";

const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

const CurrentPost = ({ innerPost }) => {
  const { id, name, username, bg, body, imageUrl } = innerPost;

  const { data: fetchedComments, loading: loadingComments } = useFetch(
    `${COMMENTS_URL}/?postId=${id}`
  );
  return (
    <>
      <article className="single-post inner">
        <Avatar bg={bg} name={name} />
        <div className="single-post__main-body">
          <div className="single-post__header">
            <b>{name}</b> @{username}
          </div>
          <p className="single-post__text">{body}</p>
          <img className="single-post__poster" src={imageUrl} alt={name} />
        </div>
      </article>
      {loadingComments ? (
        <Spinner />
      ) : (
        <CommentBlock fetchedComments={fetchedComments} />
      )}
    </>
  );
};

export default CurrentPost;
