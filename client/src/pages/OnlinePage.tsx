import React from "react";
import { useRecoilState } from "recoil";
import Game from "../components/game";
import JoinRoom from "../components/joinRoom";
import { inRoom } from "../store/game/inRoom";

const OnlinePage = () => {
  const [isInRoom, setInRoom] = useRecoilState(inRoom);
  
  return (
    <div>
        <h2>test1</h2>
        {!isInRoom ? <JoinRoom /> : <Game />}
    </div>
 );
};

export default OnlinePage;