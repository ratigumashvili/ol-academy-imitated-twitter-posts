import generateColor from "../../helpers/generateColor";
import Avatar from "./Avatar";

const CommentBlock = ({ fetchedComments }) => {
  return (
    <ul className="comments-block">
      {fetchedComments?.map((comment) => (
        <li key={comment.id}>
          <Avatar name={comment.email} bg={generateColor()} />
          <b>{comment.email}</b>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentBlock;
