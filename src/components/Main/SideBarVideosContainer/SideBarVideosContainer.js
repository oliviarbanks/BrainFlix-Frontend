import { useEffect, useState } from "react";
import SideBarVideo from "../SideBarVideo/SideBarVideo";
import "./SideBarVideosContainer.scss";
import axios from "axios";

function SideBarVideosContainer({ filteredVideos }) {
  // console.log(filteredVideos);
  return (
    <div className="videosContainer">
      <h2 className="videosContainer__header">NEXT VIDEOS</h2>
      {filteredVideos.map((video, id) => {
        return (
          <SideBarVideo
            key={id}
            // index={index}
            // clickHandler={clickHandler}
            video={video}
          />
        );
      })}
    </div>
  );
}

export default SideBarVideosContainer;
