function VideoDetails({ videoData, videoIndex }) {
  console.log(videoData, "from video details container");
  return (
    <div>
      <h2 className="video__title">{videoData[videoIndex].title}</h2>
    </div>
  );
}

export default VideoDetails;
