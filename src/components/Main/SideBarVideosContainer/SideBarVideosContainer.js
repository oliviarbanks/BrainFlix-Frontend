import SideBarVideo from "../SideBarVideo/SideBarVideo";
import "./SideBarVideosContainer.scss";

function SideBarVideosContainer({ filteredVideos }) {
  return (
    <div className="videosContainer">
      <h2 className="videosContainer__header">NEXT VIDEOS</h2>
      {filteredVideos.map((video, id) => {
        return <SideBarVideo key={id} video={video} />;
      })}
    </div>
  );
}

export default SideBarVideosContainer;
