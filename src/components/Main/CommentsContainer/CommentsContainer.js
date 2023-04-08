import Comment from "../Comment/Comment";
import "./CommentsContainer.scss";

function CommentsContainer({ videoData, videoIndex }) {
  const commentCount = videoData[videoIndex].comments.length;
  return (
    <div>
      <p>{commentCount}</p>
      {videoData[videoIndex].comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsContainer;
