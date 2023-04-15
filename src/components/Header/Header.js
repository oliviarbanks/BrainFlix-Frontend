import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadButton from "../../assets/icons/upload.svg";
import search from "../../assets/icons/search.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import UploadPage from "../../pages/UploadPage";
import MainVideo from "../Main/MainVideo/MainVideo";

function Header() {
  return (
    <>
      <section className="header">
        <Link to="/">
          {/* {MainVideo} */}
          <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
        </Link>
        <div className="header__search">
          <img
            className="header__search-img"
            src={search}
            alt="magnifying glass"
          />
          <input
            className="header__search-input"
            type="text"
            placeholder="Search"
          />
          <img
            className="header__avatar-mobile"
            src={avatar}
            alt="Default Avatar"
          ></img>
        </div>

        <div className="header__upload">
          <img
            className="header__avatar-responsive"
            src={avatar}
            alt="Default Avatar"
          ></img>
          <Link to="uploadpage">
            <button className="header__button">
              {UploadPage}
              <img
                className="header__upload-img"
                src={uploadButton}
                alt="Blue Upload Button"
              ></img>
              <span className="header__span">UPLOAD</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Header;
