import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import { IGameContextProps } from "./type/interfaces/game";
import { IPlayerSymbol } from "./type/types/game.type";
import GameContext from "./context/game/Game.context";


function App() {
  const [isInRoom, setInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<IPlayerSymbol>("x");
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    playerSymbol,
    setPlayerSymbol,
    isPlayerTurn,
    setPlayerTurn,
    isGameStarted,
    setGameStarted,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GameContext.Provider>
  );
}

export default App;
