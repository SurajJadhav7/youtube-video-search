import React from "react";
import "./VideoListItem.css";

const VideoListItem = (props) => {
  return (
    <div
      className="VideoListItem"
      onClick={() => props.onVideoSubmit(props.video)}
    >
      <div className="videoListItemWrapper">
        <img
          src={`${props.video.snippet.thumbnails.high.url}`}
          alt="thumbnail"
        />
      </div>
      <div className="videoListItemDescriptionWrapper">
        <div className="videoListItemDescription">
          <h3>{props.video.snippet.title}</h3>
        </div>
      </div>
    </div>
  );
};
export default VideoListItem;
