import React from "react";
import VideoListItem from "./VideoListItem";
import "./VideoList.css";

const VideoList = (props) => {
  return (
    <div className="videoList">
      {props.videos.map((video) => (
        <VideoListItem video={video} onVideoSubmit={props.onVideoSubmit} />
      ))}
    </div>
  );
};
export default VideoList;
