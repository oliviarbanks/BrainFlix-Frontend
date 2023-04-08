import "./SideBarVideo.scss";

function SideBarVideo({ video, clickHandler, index }) {
  return (
    <div>
      <p>{video.channel} </p>
      <p>{video.title}</p>
      <img className="main__video" src={video.image}></img>
      <button onClick={() => clickHandler(index)}>Click Me</button>
    </div>
  );
}

export default SideBarVideo;
