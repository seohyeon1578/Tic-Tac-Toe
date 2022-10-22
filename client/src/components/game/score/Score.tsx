import React from "react";
import { useRecoilState } from "recoil";
import { gameState } from "../../../store/game/gameState";
import * as S from "./Score.style";

const Score = () => {
  const [gameWin, setGameWin] = useRecoilState(gameState);
  return (
    <S.Container>
        <S.ItemWrap>
          <span>X</span>
          <span>{gameWin.x}</span>
        </S.ItemWrap>
        <S.ItemWrap>
          <span>DRAW</span>
          <span>{gameWin.draw}</span>
        </S.ItemWrap>
        <S.ItemWrap>
          <span>O</span>
          <span>{gameWin.o}</span>
        </S.ItemWrap>
    </S.Container>
  )
}

export default Score;

