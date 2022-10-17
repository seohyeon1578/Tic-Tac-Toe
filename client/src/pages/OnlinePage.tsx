import React, { useContext } from "react";
import GameContext from "../context/game/Game.context";
import Game from "../components/game";
import JoinRoom from "../components/joinRoom";

const OnlinePage = () => {
  const { isInRoom } = useContext(GameContext);
  
  return (
    <div>
        <h2>test1</h2>
        {!isInRoom ? <JoinRoom /> : <Game />}
    </div>
 );
};

export default OnlinePage