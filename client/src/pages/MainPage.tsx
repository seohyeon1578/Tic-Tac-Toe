import React from "react";
import Gameframe from "../components/gameframe";
import gameFrame from "../assets/images/gameframe.png";
import gameCharacter from "../assets/images/main-character.png";
import * as M from "../assets/styles/Main.style";

const MainPage = () => {
  return (
    <Gameframe src={gameFrame}>
      <M.TitleWrap top="16%">
        <M.MainSubtitle>
          <span>온라인</span> 삼목 <span>게임</span>
        </M.MainSubtitle>
        <M.MainTitle>Tic-Tac-Toe</M.MainTitle>
      </M.TitleWrap>
      <M.CharacterImg src={gameCharacter} alt="캐릭터"/>
      <M.ButtonWrap width="20" to="/select">
        <M.TopBtn 
          width="20" 
          firstColor="#FE7527" 
          lastColor="#FFB85B"
          borderRadius="50%"
        >시작하기</M.TopBtn>
        <M.MiddleBtn 
          width="20" 
          firstColor="#FF7B02"
        ></M.MiddleBtn>
        <M.BottomBtn 
          width="20" 
          firstColor="#FF7B02"
          borderRadius="50%"
        ></M.BottomBtn>
        <M.BtnFrame width="21.5" borderRadius="50%"></M.BtnFrame>
      </M.ButtonWrap>
    </Gameframe>
 );
};

export default MainPage