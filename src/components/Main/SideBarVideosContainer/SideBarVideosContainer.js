import SideBarVideo from "../SideBarVideo/SideBarVideo";
import "./SideBarVideosContainer.scss";

function SideBarVideosContainer({ videoData, clickHandler }) {
  return (
    <div className="videosContainer">
      <h2 className="videosContainer__header">NEXT VIDEOS</h2>
      {videoData.map((video, index) => {
        return (
          <SideBarVideo
            key={index}
            // index={index}
            // clickHandler={clickHandler}
            video={video}
          />
        );
      })}
    </div>
  );
}

export default SideBarVideosContainer;
