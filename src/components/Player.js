import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  setCurrentSong,
  isPlaying,
  songs,
  setSongs,
  setIsPlaying,
  setImgDeg,
  setIsImgRotate,
}) => {
  // state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animatePercent: 0,
  });
  // event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      document.getElementsByTagName("img")[0].style.animationPlayState =
        "paused";
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      setIsImgRotate(true);
      audioRef.current.play();
      document.getElementsByTagName("img")[0].style.animationPlayState =
        "running";
      setIsPlaying(!isPlaying);
    }
  };

  const getImgRotation = () => {
    let el = document.getElementsByTagName("img")[0];
    let value = window.getComputedStyle(el).getPropertyValue("transform");
    setImgDeg(getRotationDegrees(value));
  };
  const getRotationDegrees = (matrix) => {
    if (matrix !== "none") {
      var values = matrix.split("(")[1].split(")")[0].split(",");
      var a = values[0];
      var b = values[1];
      let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      return angle;
    } else {
      let angle = 0;
      return angle;
    }
  };

  // animate cover img
  // let animateCover = () => {
  //   document
  //     .getElementsByTagName("img")[0]
  //     .animate(
  //       [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
  //       {
  //         duration: 10000,
  //         iterations: Infinity,
  //       }
  //     );
  // };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const animatePercent = (current / duration) * 100;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animatePercent: animatePercent,
    });
  };

  // animate input based on current time
  const animate = {
    transform: `translateX(${songInfo.animatePercent}%)`,
  };
  const inputStyle = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
    if (direction === "backward") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (isPlaying) {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      audioRef.current.play();
    }
  };

  const activeLibraryHandler = (nextPrev) => {
    setSongs(
      songs.map((song) => {
        return song.id === nextPrev.id
          ? { ...song, active: true }
          : { ...song, active: false };
      })
    );
  };
  // utility function
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track">
          <input
            style={inputStyle}
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div className="animate" style={animate}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipHandler("backward")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipHandler("forward")}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default Player;
