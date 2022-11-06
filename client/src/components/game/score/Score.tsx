import React from "react";
import { useRecoilState } from "recoil";
import { gameState } from "../../../store/game/gameState";
import * as S from "./Score.style";

const Score = () => {
  const [gameWin, setGameWin] = useRecoilState(gameState);

  return (
    <S.Container>
        <S.ItemWrap>
          <S.Player>X</S.Player>
          <S.Value>{gameWin.x}</S.Value>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.Player>DRAW</S.Player>
          <S.Value>{gameWin.draw}</S.Value>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.Player>O</S.Player>
          <S.Value>{gameWin.o}</S.Value>
        </S.ItemWrap>
    </S.Container>
  )
}

export default Score;

