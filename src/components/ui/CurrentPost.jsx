import useFetchComments from "../../helpers/useFetchComments";
import CommentBlock from "./CommentBlock";
import Spinner from "./Spinner";

const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

const CurrentPost = ({ innerPost }) => {
  const { fetchedComments, loading } = useFetchComments(
    `${COMMENTS_URL}/?postId=${innerPost.id}`
  );
  return (
    <article>
      <h1>{innerPost.id}</h1>
      {innerPost.name} {innerPost.username} {innerPost.body}{" "}
      {innerPost.imageUrl}
      {loading ? (
        <Spinner />
      ) : (
        <CommentBlock fetchedComments={fetchedComments} />
      )}
    </article>
  );
};

export default CurrentPost;
