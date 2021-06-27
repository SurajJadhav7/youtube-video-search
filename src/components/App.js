import React, { useState } from "react";
import Search from "./Search";
import Video from "./Video";
import VideoList from "./VideoList";
import "./App.css";
import youtube from "../api/youtube";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const onTermSubmit = async (term) => {
    console.log("submitted term: ", term);
    const res = await youtube.get("/search", {
      params: { q: term },
    });
    setVideos(res.data.items);
    setCurrentVideo(res.data.items[0]);
  };
  const onVideoSubmit = async (video) => {
    console.log("selected video: ", video);
    setCurrentVideo(video);
  };
  return (
    <div>
      <h1 className="title">Video Search</h1>
      <Search onSubmit={onTermSubmit} />
      <Video video={currentVideo} />
      <VideoList videos={videos} onVideoSubmit={onVideoSubmit} />
    </div>
  );
}
