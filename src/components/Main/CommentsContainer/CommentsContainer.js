import Comment from "../Comment/Comment";
import "./CommentsContainer.scss";
import avatar from "../../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../../assets/icons/add_comment.svg";

function CommentsContainer() {
  return (
    <div className="commentContainer">
      <h1>This is the comments container</h1>
      {/* <p className="commentContainer__count">{commentCount} Comments</p> */}
      <div className="commentContainer__box">
        <img
          className="commentContainer__avatar"
          src={avatar}
          alt="avatar image"
        ></img>
        <form className="commentContainer__container">
          <label className="commentContainer__header" for="comment">
            JOIN THE CONVERSATION
          </label>
          <div className="commentContainer__tablet">
            <input
              className="commentContainer__input"
              placeholder="Add a new comment"
            ></input>
            <button className="commentContainer__button">
              {/* <img src={commentIcon} alt="add comment icon"></img> */}
              <span className="commentContainer__button--text">COMMENT</span>
            </button>
          </div>
        </form>
      </div>
      {/* {videoData[videoIndex].comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))} */}
    </div>
  );
}

export default CommentsContainer;
