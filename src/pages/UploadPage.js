import { useState } from "react";
import "./UploadPage.scss";
import bikeImage from "../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../assets/icons/publish.svg";
import axios from "axios";

const baseURL = "http://localhost:8085";

function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePublishClick = (e) => {
    e.preventDefault();

    const newVideo = {
      title: title,
      description: description,
      image: "http://localhost:8085/public/images/Upload-video-preview.jpg",
    };
    axios
      .post(`${baseURL}/videos`, newVideo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // if (title && description) {
    //   alert("Upload");
    //   window.location.href = "/";
    // }
  };

  return (
    <div className="upload">
      <h1 className="upload__header">Upload Video </h1>

      <div className="upload__desktop">
        <div className="upload__subcontainer">
          <p className="upload__subheader">VIDEO THUMBNAIL</p>
          <img
            className="upload__image"
            src={bikeImage}
            alt="aerial view of riding a blue bike"
          ></img>
        </div>
        <div>
          <form className="upload__form">
            <div className="upload__form-container">
              <div className="upload__form-title">
                <label className="upload__label" htmlFor="comment">
                  TITLE YOUR VIDEO
                </label>
                <input
                  className="upload__input-title"
                  placeholder="Add a title to your video"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="upload__form-description">
                <label className="upload__label" htmlFor="comment">
                  ADD A VIDEO DESCRIPTION
                </label>
                <input
                  className="upload__input-description"
                  placeholder="Add a description to your video"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="upload__buttons">
        <button className="upload__publish" onClick={handlePublishClick}>
          <img
            className="upload__icon"
            src={uploadIcon}
            alt="upload icon"
          ></img>
          <span className="upload__span">PUBLISH</span>
        </button>
        <p className="upload__cancel">CANCEL</p>
      </div>
    </div>
  );
}

export default UploadPage;
