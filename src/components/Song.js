const Song = ({ currentSong, isPlaying, imgDeg }) => {
  return (
    <div className="song-container">
      <img
        className={isPlaying ? "img-playing" : ""}
        style={{ transform: `rotate(${imgDeg}deg)` }}
        alt="currentSong.name"
        src={currentSong.cover}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
