const Nav = ({ isLibOpen, setIsLibOpen }) => {
  return (
    <div className="nav">
      <div className="nav-container">
        <h1>Waves</h1>
        <button onClick={() => setIsLibOpen(!isLibOpen)}>Library</button>
      </div>
    </div>
  );
};

export default Nav;
