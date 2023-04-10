import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadButton from "../../assets/icons/upload.svg";
import search from "../../assets/icons/search.svg";
import "./Header.scss";

function Header() {
  return (
    <>
      <section className="header">
        <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
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
          <button className="header__button">
            <img
              className="header__upload-img"
              src={uploadButton}
              alt="Blue Upload Button"
            ></img>
            <span className="header__span">UPLOAD</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
