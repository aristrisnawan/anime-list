"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const opts = {
    width: "200",
    height: "150",
  };
  const Player = () => {
    return (
      <div className=" fixed bottom-2 right-2 transition ease-in-out delay-200">
        <button
          className=" text-color-primary float-right bg-color-secondary px-3 mb-1"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={opts}
        />
      </div>
    );
  };
  return isOpen ? (
    <Player />
  ) : (
    <button
      className=" fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded"
      onClick={handleVideoPlayer}
    >
      Tonton Trailer
    </button>
  );
};

export default VideoPlayer;
