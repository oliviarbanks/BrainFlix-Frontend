import "./UploadPage.scss";
import bikeImage from "../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../assets/icons/publish.svg";

function UploadPage() {
  return (
    <div className="upload">
      <h1 className="upload__header">Upload Video </h1>
      <div className="upload__subcontainer">
        <p className="upload__subheader">VIDEO THUMBNAIL</p>
        <img
          className="upload__image"
          src={bikeImage}
          alt="aerial view of riding a blue bike"
        ></img>
      </div>
      <form className="upload__form">
        <div className="upload__form-container">
          <div className="upload__form-title">
            <label className="upload__label" htmlFor="comment">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__input-title"
              placeholder="Add a title to your video"
            ></input>
          </div>
          <div className="upload__form-description">
            <label className="upload__label" htmlFor="comment">
              ADD A VIDEO DESCRIPTION
            </label>
            <input
              className="upload__input-description"
              placeholder="Add a description to your video"
            ></input>
          </div>
        </div>
        <button className="upload__publish">
          <img
            className="upload__icon"
            src={uploadIcon}
            alt="upload icon standard image"
          ></img>
          <span className="upload__span">PUBLISH</span>
        </button>
      </form>
      <div className="upload__cancel">CANCEL</div>
    </div>
  );
}

export default UploadPage;
