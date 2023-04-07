function CommentsContainer({ videoData, videoIndex }) {
  console.log(videoData, "from comments container");
  return (
    <div>
      <h1>This is the comments container component</h1>
      <p className="video__comment">{videoData[videoIndex].comment}</p>
    </div>
  );
}

export default CommentsContainer;
