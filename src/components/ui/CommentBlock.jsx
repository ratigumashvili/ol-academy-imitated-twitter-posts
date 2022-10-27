const CommentBlock = ({ fetchedComments }) => {
  return (
    <div>
      {fetchedComments?.map((comment) => (
        <div key={comment.id}>
          {comment.email} <br /> <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentBlock;
