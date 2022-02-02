import LibraryItem from "./LibraryItem";

const Library = ({
  libraryOpen,
  isPlaying,
  audioRef,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  return (
    <div className={`library ${libraryOpen ? "open" : ""}`}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibraryItem
          key={song.id}
          isPlaying={isPlaying}
          audioRef={audioRef}
          songs={songs}
          song={song}
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
        />
      ))}
    </div>
  );
};

export default Library;
