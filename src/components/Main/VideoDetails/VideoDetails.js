import axios from "axios";
import { useEffect, useState } from "react";
import "./VideoDetails.scss";
import viewsIcon from "../../../assets/icons/views.svg";
import likesIcon from "../../../assets/icons/likes.svg";

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
      <div className="videoDetails__hero">
        <video className="videoDetails__main" poster={image} controls></video>
      </div>
      <h1 className="videoDetails__header">{title}</h1>
      <div className="videoDetails__container">
        <div className="videoDetails__info">
          <p className="videoDetails__author">By {channel}</p>
          <p className="videoDetails__date">{date}</p>
        </div>
        <div className="videoDetails__icons">
          <p className="videoDetails__icon eyeLogo">
            <img
              className="icon__logo"
              src={viewsIcon}
              alt="eye views image"
            ></img>
            {views}
          </p>
          <p className="videoDetails__icon">
            <img className="icon__logo" src={likesIcon} alt="likes image"></img>
            {likes}
          </p>
        </div>
      </div>
      <div className="videoDetails__description">{description}</div>
    </div>
  );
}

export default VideoDetails;
