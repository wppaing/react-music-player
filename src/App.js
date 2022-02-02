import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./api";
import { useState, useRef } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibOpen, setIsLibOpen] = useState(false);
  const [imgDeg, setImgDeg] = useState(0);

  const audioRef = useRef(null);

  return (
    <div className={`app ${isLibOpen ? "lib-open" : ""}`}>
      <Nav isLibOpen={isLibOpen} setIsLibOpen={setIsLibOpen} />
      <Song currentSong={currentSong} isPlaying={isPlaying} imgDeg={imgDeg} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setImgDeg={setImgDeg}
      />
      <Library
        libraryOpen={isLibOpen}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
