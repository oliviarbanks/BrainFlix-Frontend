// import axios from "axios";
// import { useEffect, useState } from "react";
// import "./MainVideo.scss";

// function MainVideo({ mainVideoId, baseURL, APIKey }) {
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     if (mainVideoId === null) {
//       return;
//     }
//     axios.get(`${baseURL}/${mainVideoId}${APIKey}`).then((response) => {
//       setVideo(response.data);
//       console.log(response.data);
//     });
//   }, [mainVideoId]);

//   if (video === null) {
//     return <div>Loading</div>;
//   }
// const {
//   title,
//   channel,
//   image,
//   description,
//   views,
//   likes,
//   timestamp,
//   comments,
// } = video;

//   return (
//     <div className="video">
//       {/* <div className="video__main">{image}</div>
//       <div>{title}</div>
//       <div>{channel}</div>
//       <div className="video__videoDetails">{description}</div>
//       <div>{views}</div>
//       <div>{likes}</div>
//       <div>{timestamp}</div>
//       <div className="video__commentDetails">{comments}</div> */}
//     </div>
//   );
// }

// export default MainVideo;
