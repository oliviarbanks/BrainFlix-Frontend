import { useState, useEffect } from "react";
import SideBarVideosContainer from "../components/Main/SideBarVideosContainer/SideBarVideosContainer";
// import VideoDetails from "../VideoDetails/VideoDetails";
// import videoData from "../../../data/video-details.json";
import axios from "axios";
import "./MainVideoPage.scss";
// import { useParams } from "react-router-dom";

const baseURL = "https://project-2-api.herokuapp.com/videos";
const APIKey = "?api_key=e13ff1e8-7949-4bc9-9d57-978fdffb3fb7";

function MainVideoPage() {
  const [videoIndex, setVideoIndex] = useState(null);
  const [videoList, setVideoList] = useState([]);

  // const { idFromParams } = useParams();

  // const videos = videoData.filter(
  //   (video) => video.id !== videoData[videoIndex].id
  // );

  // const buttonClicked = (index) => {
  //   setVideoIndex(index + 1);
  // };

  //populating preview video list
  useEffect(() => {
    axios.get(`${baseURL}/${APIKey}`).then((response) => {
      console.log(response.data);
      setVideoList(response.data);
    });
  }, []);
  console.log(videoList);
  return (
    <div>
      <div className="app">
        <div className="app__commentDetails">
          {/* <VideoDetails videoData={videoData} videoIndex={videoIndex} />
          <CommentsContainer videoData={videoData} videoIndex={videoIndex} /> */}
        </div>
        <div className="app__videoDetails">
          <SideBarVideosContainer
            videoData={videoList}
            videoIndex={videoIndex}
            // clickHandler={buttonClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default MainVideoPage;
