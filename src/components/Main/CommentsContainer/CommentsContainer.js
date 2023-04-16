import Comment from "../Comment/Comment";
import "./CommentsContainer.scss";
import avatar from "../../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../../assets/icons/add_comment.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function CommentsContainer({ videoIdToShow, baseURL, APIKey }) {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (videoIdToShow === null) {
      return;
    }
    axios.get(`${baseURL}/${videoIdToShow}${APIKey}`).then((response) => {
      setComment(response.data.comments);
    });
  }, [videoIdToShow]);
  console.log(comment);

  if (comment === null) {
    return <div>Loading</div>;
  }

  return (
    <div className="commentContainer">
      <h2 className="commentContainer__header">3 Comments</h2>
      <div className="commentContainer__box">
        <img
          className="commentContainer__avatar"
          src={avatar}
          alt="avatar image"
        ></img>
        <form className="commentContainer__container">
          <label className="commentContainer__subheader" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <div className="commentContainer__tablet">
            <input
              className="commentContainer__input"
              placeholder="Add a new comment"
            ></input>
            <button className="commentContainer__button">
              <img
                className="icon_logo"
                src={commentIcon}
                alt="add comment icon"
              ></img>
              <span className="commentContainer__button--text">COMMENT</span>
            </button>
          </div>
        </form>
      </div>
      <div className="commentContainer__comments">
        {comment.map((userComment) => (
          <Comment key={userComment.id} userComment={userComment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsContainer;
