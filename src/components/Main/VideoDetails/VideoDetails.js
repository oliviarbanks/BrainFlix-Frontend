import axios from "axios";
import { useEffect, useState } from "react";
import "./VideoDetails.scss";

function VideoDetails({ videoIdToShow, baseURL, APIKey }) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (videoIdToShow === null) {
      return;
    }
    axios.get(`${baseURL}/${videoIdToShow}${APIKey}`).then((response) => {
      setVideo(response.data);
      console.log(response.data);
    });
  }, [videoIdToShow]);

  if (video === null) {
    return <div>Loading</div>;
  }
  const epoch = video.timestamp;
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const date = new Date(epoch).toLocaleDateString("en-US", options);

  const { title, channel, image, description, views, likes } = video;

  return (
    <div className="videoDetails">
      <div className="videoDetails__container">
        <video className="video__main" poster={image} controls></video>
        <div>{title}</div>
        <div className="videoDetails__info">
          <p className="videoDetails__author">{channel}</p>
        </div>
        <div>{date}</div>
        <div className="videoDetails__images">
          <p className="videoDetails__icon eyeLogo">
            <img className="icon__logo" src={views} alt="eye views image"></img>
            {views}
          </p>
          <p className="videoDetails__icon">
            <img className="icon__logo" src={likes} alt="likes image"></img>
            {likes}
          </p>
        </div>
      </div>
      {description}
    </div>
  );
}

export default VideoDetails;
