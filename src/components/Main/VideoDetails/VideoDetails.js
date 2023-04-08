function VideoDetails({ videoData, videoIndex }) {
  console.log(videoData, "from video details container");
  return (
    <div>
      <h2 className="video__title">{videoData[videoIndex].description}</h2>
      <p>{videoData[videoIndex].views}</p>
      <p>{videoData[videoIndex].likes}</p>
    </div>
  );
}

export default VideoDetails;
