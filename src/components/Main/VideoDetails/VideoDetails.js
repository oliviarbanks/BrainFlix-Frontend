import views from "../../../assets/icons/views.svg";
import likes from "../../../assets/icons/likes.svg";
import "./VideoDetails.scss";

function VideoDetails() {
  // const epoch =.timestamp;
  // const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  // const date = new Date(epoch).toLocaleDateString("en-US", options);

  return (
    <div className="videoDetails">
      <h1 className="videoDetails__header">This is the video VideoDetails</h1>
      <div className="videoDetails__container">
        <div className="videoDetails__info">
          <p className="videoDetails__author">
            {/* By {videoData[videoIndex].channel} */}
          </p>
          {/* <p className="videoDetails__date">{date}</p> */}
        </div>
        <div className="videoDetails__images">
          <p className="videoDetails__icon eyeLogo">
            {/* <img className="icon__logo" src={views} alt="eye views image"></img> */}
            {/* {videoData[videoIndex].views} */}
          </p>
          <p className="videoDetails__icon">
            {/* <img className="icon__logo" src={likes} alt="likes image"></img> */}
            {/* {videoData[videoIndex].likes} */}
          </p>
        </div>
      </div>
      {/* <p className="videoDetails__title">{videoData[videoIndex].description}</p> */}
    </div>
  );
}

export default VideoDetails;

// {videoData[videoIndex].title} this was on h1
