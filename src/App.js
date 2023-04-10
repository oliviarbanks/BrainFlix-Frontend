import { useState } from "react";
import Header from "./components/Header/Header";
import CommentsContainer from "./components/Main/CommentsContainer/CommentsContainer";
import MainVideo from "./components/Main/MainVideo/MainVideo";
import SideBarVideosContainer from "./components/Main/SideBarVideosContainer/SideBarVideosContainer";
import VideoDetails from "./components/Main/VideoDetails/VideoDetails";
import videoData from "./data/video-details.json";
import "./App.scss";

function App() {
  const [videoIndex, setVideoIndex] = useState(0);

  const videoList = videoData.filter(
    (video) => video.id !== videoData[videoIndex].id
  );

  const buttonClicked = (index) => {
    setVideoIndex(index + 1);
  };

  return (
    <div>
      <Header />
      <MainVideo videoData={videoData} videoIndex={videoIndex} />
      <div className="app">
        <div className="app__commentDetails">
          <VideoDetails videoData={videoData} videoIndex={videoIndex} />
          <CommentsContainer videoData={videoData} videoIndex={videoIndex} />
        </div>
        <div className="app__videoDetails">
          <SideBarVideosContainer
            videoData={videoList}
            videoIndex={videoIndex}
            clickHandler={buttonClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
