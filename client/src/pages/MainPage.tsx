import React from "react";
import { useNavigate } from "react-router-dom";
import Gameframe from "../components/gameframe";
import gameCharacter from "../assets/images/main-character.png";
import * as M from "../assets/styles/Main.style";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Gameframe>
      <M.TitleWrap>
        <M.MainSubtitle>
          <span>온라인</span> 삼목 <span>게임</span>
        </M.MainSubtitle>
        <M.MainTitle>Tic-Tac-Toe</M.MainTitle>
      </M.TitleWrap>
      <M.CharacterImg src={gameCharacter} alt="캐릭터"/>
      <M.ButtonWrap width="20" onClick={() => navigate('/select')}>
        <M.TopBtn width="20" firstColor="#FE7527" lastColor="#FFB85B">시작하기</M.TopBtn>
        <M.MiddleBtn width="20" firstColor="#FF7B02"></M.MiddleBtn>
        <M.BottomBtn width="20" firstColor="#FF7B02"></M.BottomBtn>
        <M.BtnFrame width="21.5"></M.BtnFrame>
      </M.ButtonWrap>
    </Gameframe>
 );
};

export default MainPage