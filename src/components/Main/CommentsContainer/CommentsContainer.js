function CommentsContainer({ videoData, videoIndex }) {
  // comments.map(comment) was gonna put that in the parameter but didnt work
  console.log(videoData, "from comments container");
  return (
    <div>
      {/* key={comments.comment} found this online and said to insert in div */}
      {/* <h1>This is the comments container component</h1> */}
      <h3 className="video__comment">{videoData[videoIndex].comment}</h3>
    </div>
  );
}

export default CommentsContainer;
