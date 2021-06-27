import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: "AIzaSyBHGkWVtMUxqg6lTQsdL5Jd5t1F6oGo4vs",
  },
});
