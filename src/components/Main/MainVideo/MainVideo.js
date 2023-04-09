import "./MainVideo.scss";

function MainVideo({ videoData, videoIndex }) {
  return (
    <div className="video">
      <video
        className="video__main"
        poster={videoData[videoIndex].image}
        alt=""
        controls
      ></video>
    </div>
  );
}

export default MainVideo;
