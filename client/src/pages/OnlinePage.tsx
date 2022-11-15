import React from "react";
import { useRecoilState } from "recoil";
import Game from "../components/game";
import Gameframe from "../components/gameframe";
import JoinRoom from "../components/joinRoom";
import gameService from "../services/gameService";
import socketService from "../services/socketService";
import { inRoom } from "../store/game/inRoom";
import { roomId } from "../store/game/roomId";
import JoinRoomFrame from "../assets/images/selectframe.png";
import gameFrame from "../assets/images/gameBoardframe.png";
import * as O from "../assets/styles/Main.style";

const OnlinePage = () => {
  const [isInRoom, setInRoom] = useRecoilState(inRoom);
  const [roomIdValue, setRoomId] = useRecoilState(roomId);
  
  const handlerClick = () =>{
    if(socketService.socket && isInRoom){
      gameService.leaveGameRoom(socketService.socket, roomIdValue);
      setInRoom(false);
    }
  };

  return (
    <Gameframe src={!isInRoom ? JoinRoomFrame : gameFrame}>
      {!isInRoom 
      ? 
      <>
        <O.TitleWrap top="9%">
          <O.MainTitle>온라인 플레이</O.MainTitle>
        </O.TitleWrap>
        <JoinRoom /> 
      </>
      : 
        <Game />}
      <O.ButtonWrap width="20" to={!isInRoom ? "/select" : "/online"} onClick={handlerClick}>
        <O.TopBtn 
          width="20" 
          firstColor="#4C87FF" 
          lastColor="#4E89FF"
          borderRadius="15px"
        >나가기</O.TopBtn>
        <O.MiddleBtn 
          width="20" 
          firstColor="#0259FB"
        ></O.MiddleBtn>
        <O.BottomBtn 
          width="20" 
          firstColor="#0259FB"
          borderRadius="15px"
        ></O.BottomBtn>
        <O.BtnFrame width="21.5" borderRadius="15px"></O.BtnFrame>
    </O.ButtonWrap>
    </Gameframe>
 );
};

export default OnlinePage;