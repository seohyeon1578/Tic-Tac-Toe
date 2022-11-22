import React from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { gameState } from "../../../store/game/gameState";
import { symbolState } from "../../../store/game/symbolState";
import { nameState } from "../../../store/user/nameState";
import * as S from "./Score.style";

const Score = () => {
  const [gameWin, setGameWin] = useRecoilState(gameState);
  const [userNames, setUserNames] = useRecoilState(nameState);
  const [playerSymbol, setPlayerSymbol] = useRecoilState(symbolState);

  const location = useLocation();

  return (
    <S.Container>
        <S.ItemWrap>
          <S.Player>{location.pathname === "/online"
                    ? playerSymbol === 'X'
                    ? userNames.my === ''
                    ? 'Guest(X)'
                    : userNames.my + '(X)'
                    : userNames.other === ''
                    ? 'Guest(X)'
                    : userNames.other + '(X)'
                    : 'X'}</S.Player>
          <S.Value>{gameWin.x}</S.Value>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.Player>DRAW</S.Player>
          <S.Value>{gameWin.draw}</S.Value>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.Player>{location.pathname === "/online"
                    ? playerSymbol === 'O'
                    ? userNames.my === ''
                    ? 'Guest(O)'
                    : userNames.my + '(O)'
                    : userNames.other === ''
                    ? 'Guest(X)'
                    : userNames.other + '(O)'
                    : 'O'}</S.Player>
          <S.Value>{gameWin.o}</S.Value>
        </S.ItemWrap>
    </S.Container>
  )
}

export default Score;

