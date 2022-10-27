import Avatar from "./Avatar";

const CommentBlock = ({ fetchedComments }) => {
  return (
    <ul className="comments-block">
      {fetchedComments?.map((comment) => (
        <li key={comment.id}>
          <Avatar
            name={comment.email}
            bg={`#${Math.floor(Math.random() * 0xffffff).toString(16)}`}
          />
          <b>{comment.email}</b>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentBlock;
