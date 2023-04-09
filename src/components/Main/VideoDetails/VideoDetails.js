import views from "../../../assets/icons/views.svg";
import likes from "../../../assets/icons/likes.svg";
import "./VideoDetails.scss";

function VideoDetails({ videoData, videoIndex }) {
  const epoch = videoData[videoIndex].timestamp;
  const date = new Date(epoch).toLocaleDateString("en-US");

  return (
    <div className="videoDetails">
      <h1 className="videoDetails__header">{videoData[videoIndex].title}</h1>
      <div className="videoDetails__container">
        <div className="videoDetails__info">
          <h2 className="videoDetails__author">
            By {videoData[videoIndex].channel}
          </h2>
          <p>{date}</p>
        </div>
        <div className="videoDetails__images">
          <p className="videoDetails__icon">
            <img className="icon__logo" src={views} alt="eye views image"></img>
            {videoData[videoIndex].views}
          </p>
          <p className="videoDetails__icon">
            <img className="icon__logo" src={likes} alt="likes image"></img>
            {videoData[videoIndex].likes}
          </p>
        </div>
      </div>
      <p className="videoDetails__title">{videoData[videoIndex].description}</p>
    </div>
  );
}

export default VideoDetails;
