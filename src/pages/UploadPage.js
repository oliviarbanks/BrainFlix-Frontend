function UploadPage() {
  return (
    <div>
      <h1 className="">Insert Header here</h1>
      <div className="">
        <form className="">
          <div>
            <label className="" for="comment">
              INSERT COMMENT HERE
            </label>
            <input className="" placeholder="Add a title to your video"></input>
            <input
              className=""
              placeholder="Add a description to your video"
            ></input>
            <button className="">
              <span className="">COMMENT</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
