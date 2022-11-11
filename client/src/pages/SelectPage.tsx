import React from "react";
import { useNavigate } from "react-router-dom";
import Gameframe from "../components/gameframe";
import * as S from "../assets/styles/Main.style";

const SelectPage = () => {
  const navigate = useNavigate();

  return(
    <Gameframe>
      <S.ButtonWrap width="35">
        <S.OnlineBtn onClick={() => navigate('/online')}>
          <S.TopBtn width="15" firstColor="#40B87B" lastColor="#8FD8B1"></S.TopBtn>
          <S.MiddleBtn width="15" firstColor="#159994"></S.MiddleBtn>
          <S.BottomBtn width="15" firstColor="#159994"></S.BottomBtn>
          <S.BtnFrame width="16.5"></S.BtnFrame>
        </S.OnlineBtn>
        <S.ComputerBtn onClick={() => navigate('/computer')}>
          <S.TopBtn width="15" firstColor="#5A46E2" lastColor="#9F78F9"></S.TopBtn>
          <S.MiddleBtn width="15" firstColor="#6247EA"></S.MiddleBtn>
          <S.BottomBtn width="15" firstColor="#6247EA"></S.BottomBtn>
          <S.BtnFrame width="16.5"></S.BtnFrame>
        </S.ComputerBtn>
      </S.ButtonWrap>
    </Gameframe>
  )
};

export default SelectPage;