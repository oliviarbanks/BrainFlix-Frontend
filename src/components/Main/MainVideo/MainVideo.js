import "./MainVideo.scss";

function MainVideo({ videoData, videoIndex }) {
  // console.log(videoIndex, "video index from main video");
  return (
    <div className="video">
      <h1>This is the Main video component</h1>
      {/* <h2>{videoData[videoIndex].title}</h2> */}
      <img
        className="video__main"
        src={videoData[videoIndex].image}
        alt=""
      ></img>
    </div>
  );
}

export default MainVideo;
