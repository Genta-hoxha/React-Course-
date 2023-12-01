import Player from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* <li>
            <span className="player-info">
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>{" "}
            </span>
            <button>Edit</button>
          </li>

          <li>
            <span className="player-info">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
            <button>Edit</button>
          </li> */}
          <Player initialName="Player1" symbol="X" />
          <Player initialName="Player2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
