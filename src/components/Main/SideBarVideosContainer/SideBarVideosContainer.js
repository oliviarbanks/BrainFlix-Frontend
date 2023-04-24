import SideBarVideo from "../SideBarVideo/SideBarVideo";
import "./SideBarVideosContainer.scss";

function SideBarVideosContainer({ filteredVideos }) {
  return (
    <div className="videosContainer">
      <h2 className="videosContainer__header">NEXT VIDEOS</h2>
      {filteredVideos.map((video, id, title) => {
        return <SideBarVideo key={id} video={video} alt={title} />;
      })}
    </div>
  );
}

export default SideBarVideosContainer;
