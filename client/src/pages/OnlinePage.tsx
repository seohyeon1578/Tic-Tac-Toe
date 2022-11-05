import React from "react";
import { useRecoilState } from "recoil";
import Game from "../components/game";
import JoinRoom from "../components/joinRoom";
import { inRoom } from "../store/game/inRoom";

const OnlinePage = () => {
  const [isInRoom, setInRoom] = useRecoilState(inRoom);
  
  return (
    <div>
        {!isInRoom ? <JoinRoom /> : <Game />}
    </div>
 );
};

export default OnlinePage;