const LibraryItem = ({
  isPlaying,
  audioRef,
  songs,
  setSongs,
  song,
  setCurrentSong,
}) => {
  const clickHandler = (id) => {
    const selectedSong = songs.filter((song) => song.id === id);
    setCurrentSong(selectedSong[0]);

    // recheck these codes
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => audioRef.current.play());
      }
    }
    // active status changing
    setSongs(
      songs.map((song) => {
        return song.id == selectedSong[0].id
          ? { ...song, active: true }
          : { ...song, active: false };
      })
    );
  };

  return (
    <div
      className={`library-item ${song.active ? "active" : ""}`}
      onClick={() => clickHandler(song.id)}
    >
      <img src={song.cover} alt={song.name} />
      <div className="info-container">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibraryItem;
