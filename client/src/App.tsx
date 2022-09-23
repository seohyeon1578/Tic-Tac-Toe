import React, { useState, useEffect } from 'react';
import { IGameContextProps } from './type/interfaces/game';
import { IPlayerSymbol } from './type/types/game.type';
import GameContext from './context/game/Game.context';
import { socketService } from './utils/socket';
import Game from './components/game';
import JoinRoom from './components/joinRoom';

function App(){
  const [isInRoom, setInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<IPlayerSymbol>('x');
  const [isPlayerTurn, setPlayerTurn] = useState(false);
  const [isGameStart, setGameStart] = useState(false);

  const connect = async() => {
    try { 
      const socket = await socketService.connect("http://localhost:8080")
    } catch(err) {
      console.log("Error: ", err)
    }
  };

  useEffect(() => {
    connect();
  }, []);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setInRoom,
    playerSymbol,
    setPlayerSymbol,
    isPlayerTurn,
    setPlayerTurn,
    isGameStart,
    setGameStart,
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <div>
        <h2>test1</h2>
        {!isInRoom ? <JoinRoom /> : <Game />}
      </div>
    </GameContext.Provider>
  );
}

export default App;
