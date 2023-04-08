import SideBarVideo from "../SideBarVideo/SideBarVideo";

function SideBarVideosContainer({ videoData, clickHandler }) {
  console.log(videoData[0].id);
  return (
    <div>
      <h1>NEXT VIDEOS</h1>
      {videoData.map((video, index) => {
        return (
          <SideBarVideo
            key={index}
            index={index}
            clickHandler={clickHandler}
            video={video}
          />
        );
      })}
    </div>
  );
}

export default SideBarVideosContainer;
