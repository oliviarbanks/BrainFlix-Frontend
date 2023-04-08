function Comment({ comment }) {
  const epoch = comment.timestamp;
  const date = new Date(epoch).toLocaleDateString("en-US");

  return (
    <div>
      <h3 className="video__comment">{comment.comment}</h3>
      <p>{comment.name}</p>
      <p>{date}</p>
    </div>
  );
}

export default Comment;
