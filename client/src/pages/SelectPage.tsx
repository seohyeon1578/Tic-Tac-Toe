import React, { useEffect } from "react";
import Gameframe from "../components/gameframe";
import gameFrame from "../assets/images/selectframe.png";
import online from "../assets/images/online.png";
import computer from "../assets/images/computer.png";
import { 
  ComputerImg, 
  OnlineImg 
} from "../assets/styles/Select.style";
  import * as S from "../assets/styles/Main.style";
import socketService from "../services/socketService";

const SelectPage = () => {
  useEffect(() => {
    if(socketService.socket) {
      socketService.disconnect();
    }
  }, [])
  return(
    <Gameframe src={gameFrame}>
      <S.TitleWrap top="9%">
        <S.MainTitle>플레이 선택</S.MainTitle>
      </S.TitleWrap>
      <OnlineImg src={online} alt="온라인 플레이"/>
      <ComputerImg src={computer} alt="컴퓨터와 플레이"/>
      <S.ButtonContainer width="35">
        <S.OnlineBtn to="/online">
          <S.TopBtn 
            width="15" 
            firstColor="#40B87B" 
            lastColor="#8FD8B1"
            borderRadius="50%"
          ></S.TopBtn>
          <S.MiddleBtn 
            width="15" 
            firstColor="#159994"
          ></S.MiddleBtn>
          <S.BottomBtn 
            width="15" 
            firstColor="#159994"
            borderRadius="50%"
          ></S.BottomBtn>
          <S.BtnFrame width="16.5" borderRadius="50%"></S.BtnFrame>
        </S.OnlineBtn>
        <S.ComputerBtn to="/computer">
          <S.TopBtn 
            width="15" 
            firstColor="#5A46E2" 
            lastColor="#9F78F9"
            borderRadius="50%"
          ></S.TopBtn>
          <S.MiddleBtn 
            width="15" 
            firstColor="#6247EA"
          ></S.MiddleBtn>
          <S.BottomBtn 
            width="15" 
            firstColor="#6247EA"
            borderRadius="50%"
          ></S.BottomBtn>
          <S.BtnFrame width="16.5" borderRadius="50%"></S.BtnFrame>
        </S.ComputerBtn>
      </S.ButtonContainer>
    </Gameframe>
  )
};

export default SelectPage;