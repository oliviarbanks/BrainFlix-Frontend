import { useState, useEffect } from "react";
import SideBarVideosContainer from "../components/Main/SideBarVideosContainer/SideBarVideosContainer";
import VideoDetails from "../components/Main/VideoDetails/VideoDetails";
import CommentsContainer from "../components/Main/CommentsContainer/CommentsContainer";
import axios from "axios";
import "./MainVideoPage.scss";
import { useParams } from "react-router-dom";

const baseURL = "https://project-2-api.herokuapp.com/videos";
const APIKey = "?api_key=e13ff1e8-7949-4bc9-9d57-978fdffb3fb7";

function MainVideoPage() {
  const { idFromParams } = useParams();
  const [videoList, setVideoList] = useState([]);

  let mainVideoId = null;

  if (videoList.length > 0) {
    mainVideoId = videoList[0].id;
  }

  let videoIdToShow = idFromParams || mainVideoId;

  const filteredVideos = videoList.filter(
    (video) => video.id !== videoIdToShow
  );
  console.log(filteredVideos);

  useEffect(() => {
    axios.get(`${baseURL}/${APIKey}`).then((response) => {
      setVideoList(response.data);
    });
  }, []);

  return (
    <div>
      <div className="app">
        <div className="app__commentDetails">
          <VideoDetails
            videoIdToShow={videoIdToShow}
            baseURL={baseURL}
            APIKey={APIKey}
          />
          <CommentsContainer
            videoIdToShow={videoIdToShow}
            baseURL={baseURL}
            APIKey={APIKey}
          />
        </div>
        <div className="app__videoDetails">
          <SideBarVideosContainer filteredVideos={filteredVideos} />
        </div>
      </div>
    </div>
  );
}

export default MainVideoPage;
