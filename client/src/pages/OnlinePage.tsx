import React from "react";
import { useRecoilState } from "recoil";
import Game from "../components/game";
import Gameframe from "../components/gameframe";
import JoinRoom from "../components/joinRoom";
import { inRoom } from "../store/game/inRoom";

const OnlinePage = () => {
  const [isInRoom, setInRoom] = useRecoilState(inRoom);
  
  return (
    <Gameframe>
        {!isInRoom ? <JoinRoom /> : <Game />}
    </Gameframe>
 );
};

export default OnlinePage;