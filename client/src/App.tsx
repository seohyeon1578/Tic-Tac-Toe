import React, { useState, useEffect } from 'react';
import Game from './components/game';
import JoinRoom from './components/joinRoom';
import GameContext from './context/game/Game.context';
import { IGameContextProps } from './type/interfaces/game';
import { PlayerSymbol } from './type/types/game.type';
import { socketService } from './utils/socket';

function App(){
  const [isInRoom, setInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<PlayerSymbol>('x');

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
