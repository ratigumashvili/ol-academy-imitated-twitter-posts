const CommentBlock = ({ fetchedComments }) => {
  return (
    <ul className="comments-block">
      {fetchedComments?.map((comment) => (
        <li key={comment.id}>
          <b>{comment.email}</b>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentBlock;
