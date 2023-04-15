import "./Comment.scss";

function Comment({ userComment }) {
  const epoch = userComment.timestamp;
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const date = new Date(epoch).toLocaleDateString("en-US", options);

  return (
    <div className="comment">
      <div className="comment__avatar"></div>
      <div className="comment__container">
        <div className="comment__header">
          <h3 className="comment__author">{userComment.name}</h3>
          <p className="comment__date">{date}</p>
        </div>
        <div className="comment__comment-box">
          <p className="comment__comment">{userComment.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
