import React, { useState, useEffect } from 'react';
import { JoinRoom } from './components/joinRoom';
import GameContext from './context/game/Game.context';
import { IGameContextProps } from './type/interfaces/game';
import { socketService } from './utils/socket';

function App(){
  const [isInRoom, setInRoom] = useState(false);

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
    setInRoom
  }

  return (
    <GameContext.Provider value={gameContextValue}>
      <div>
        <h2>test1</h2>
        <JoinRoom />
      </div>
    </GameContext.Provider>
  );
}

export default App;
