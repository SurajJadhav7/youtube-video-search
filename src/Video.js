import React from "react";
import "./Video.css";

const Video = (props) => {
  if (props.video == null) {
    return null;
  }
  return (
    <div className="video">
      <div className="videoWrapper">
        <iframe
          src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div className="videoDescriptionWrapper">
        <div className="videoDescription">
          <h3>{props.video.snippet.title}</h3>
          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
