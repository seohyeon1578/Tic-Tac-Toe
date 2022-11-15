import React from "react";
import Game from "../components/game";
import Gameframe from "../components/gameframe";
import gameFrame from "../assets/images/gameBoardframe.png";
import * as C from "../assets/styles/Main.style";

const ComputerPage = () => {
  return (
    <Gameframe src={gameFrame}>
      <Game />
      <C.ButtonWrap width="20" to="/select">
          <C.TopBtn 
            width="20" 
            firstColor="#4C87FF" 
            lastColor="#4E89FF"
            borderRadius="15px"
          >나가기</C.TopBtn>
          <C.MiddleBtn 
            width="20" 
            firstColor="#0259FB"
          ></C.MiddleBtn>
          <C.BottomBtn 
            width="20" 
            firstColor="#0259FB"
            borderRadius="15px"
          ></C.BottomBtn>
          <C.BtnFrame width="21.5" borderRadius="15px"></C.BtnFrame>
      </C.ButtonWrap>
    </Gameframe>
 );
};

export default ComputerPage;