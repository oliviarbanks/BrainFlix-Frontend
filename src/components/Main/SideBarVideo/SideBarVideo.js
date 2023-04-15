import { Link } from "react-router-dom";
import "./SideBarVideo.scss";

function SideBarVideo({ video }) {
  return (
    <div className="videos">
      <Link to={`/videos/${video.id}`}>
        <div className="videos__container">
          <img className="videos__img" src={video.image}></img>
        </div>
      </Link>
      <div className="videos__content">
        <p className="videos__title">{video.title}</p>
        <p className="videos__author"> {video.channel} </p>
      </div>
    </div>
  );
}

export default SideBarVideo;
