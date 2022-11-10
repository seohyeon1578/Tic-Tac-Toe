import React from "react";
import { 
  Container 
} from "../assets/styles/Main.style";
import gameFrame from "../assets/images/gameframe.png";
import gameCharacter from "../assets/images/main-character.png";

const MainPage = () => {
  return (
    <Container>
      <img src={gameFrame} alt="게임" className="frame"/>
      <img src={gameCharacter} alt="캐릭터" className="character"/>
      <div className="button-wrap">
        <div className="top-button">시작하기</div>
        <div className="middle-button"></div>
        <div className="bottom-button"></div>
        <div className="button-frame"></div>
      </div>
    </Container>
 );
};

export default MainPage