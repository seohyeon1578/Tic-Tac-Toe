import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import gameService from "../../services/gameService";
import socketService from "../../services/socketService";
import { gameState } from "../../store/game/gameState";
import { symbolState } from "../../store/game/symbolState";
import { turnState } from "../../store/game/turnState";
import { gameStarted } from "../../store/game/gameStarted";
import { IMatrix } from "../../type/interfaces/cell";
import { IPlayMatrix } from "../../type/types/game.type";
import Cell from "../cell";
import Score from "./score/Score";
import * as G from './Game.style';

const Game = () => {
  const [matrix, setMatrix] = useState<IPlayMatrix>(Array(9).fill(""));
  const [nodes, setNodes] = useState({});
  const [winLine, setWinLine] = useState([]);
  
  const [gameWin, setGameWin] = useRecoilState(gameState);
  const [playerSymbol, setPlayerSymbol] = useRecoilState(symbolState);
  const [isPlayerTurn, setPlayerTurn] = useRecoilState(turnState)
  const [isGameStarted, setGameStarted] = useRecoilState(gameStarted)
  
  const gameReset = () => {
    setWinLine([])
    setMatrix(Array(9).fill(""));
  }

  /** 게임 상태 체크하는 함수 행 열 대각선을 체크한다*/
  const checkGameState = useCallback((matrix: IPlayMatrix) => {
    // 행 체크
    for (let i = 0; i < matrix.length; i++) {
      let row = [];
      for (let j = 0; j < matrix[i].length; j++) {
        row.push(matrix[i][j]);
      }

      if (row.every((value) => value && value === playerSymbol)) {
        return [true, false];
      } else if (row.every((value) => value && value !== playerSymbol)) {
        return [false, true];
      }
    }

    // 열 체크
    for (let i = 0; i < matrix.length; i++) {
      let column = [];
      for (let j = 0; j < matrix[i].length; j++) {
        column.push(matrix[j][i]);
      }

      if (column.every((value) => value && value === playerSymbol)) {
        return [true, false];
      } else if (column.every((value) => value && value !== playerSymbol)) {
        return [false, true];
      }
    }

    // 대각선 체크
    if (matrix[1][1]) {
      if (matrix[0][0] === matrix[1][1] && matrix[2][2] === matrix[1][1]) {
        if (matrix[1][1] === playerSymbol) return [true, false];
        else return [false, true];
      }

      if (matrix[2][0] === matrix[1][1] && matrix[0][2] === matrix[1][1]) {
        if (matrix[1][1] === playerSymbol) return [true, false];
        else return [false, true];
      }
    }

    // 무승부
    if (matrix.every((m) => m.every((v) => v !== null))) {
      return [true, true];
    }

    return [false, false];
  }, [playerSymbol]);

  /** 게임Board의 상태를 변경해주는 함수 + 바뀔 때 마다 소켓통신과 게임 상태 체크*/
  const updateMatrix = ({row, col, symbol}: IMatrix) => {
    const newMatrix = [...matrix];

    if (newMatrix[row][col] === null || newMatrix[row][col] === "null") {
      newMatrix[row][col] = symbol;
      setMatrix(newMatrix);
    }

    if (socketService.socket) {
      gameService.updateGame(socketService.socket, newMatrix);
      const [currentPlayerWon, otherPlayerWon] = checkGameState(newMatrix);
      if (currentPlayerWon && otherPlayerWon) {
        gameService.gameWin(socketService.socket, "draw");
        alert("무승부");
        setGameWin({...gameWin, draw: gameWin.draw + 1})
      } else if (currentPlayerWon && !otherPlayerWon) {
        gameService.gameWin(socketService.socket, playerSymbol);
        alert(`${playerSymbol} 승리`)
        setGameWin({...gameWin, [playerSymbol] : gameWin[playerSymbol] + 1})
      }

      setPlayerTurn(false);
    }
  };

  /** 상대편, 소켓에서 넘어온 상태로 현재 상태를 변경하는 함수 */
  const handleGameUpdate = useCallback(() => {
    if (socketService.socket)
      gameService.onGameUpdate(socketService.socket, (newMatrix) => {
        setMatrix(newMatrix);
        checkGameState(newMatrix);
        setPlayerTurn(true);
      });
  }, [checkGameState, setPlayerTurn]);

  /** 상대편이 들어왔으면 게임을 시작시키는 함수 */
  const handleStartGame = useCallback(() => {
    if (socketService.socket)
      gameService.onStartGame(socketService.socket, (options) => {
        setGameStarted(true);
        setPlayerSymbol(options.symbol);
        if (options.start) setPlayerTurn(true);
        else setPlayerTurn(false);
      });
  }, [setGameStarted, setPlayerSymbol, setPlayerTurn]);

  /** 이긴사람 확인하는 함수 */
  const handleGameWin = useCallback(() => {
    if (socketService.socket)
      gameService.onGameWin(socketService.socket, (message) => {
        setPlayerTurn(false);
        if(message === "draw"){
          alert("무승부");
          setGameWin({...gameWin, draw: gameWin.draw + 1})
        }else {
          alert(`${message} 승리`)
          setGameWin({...gameWin, [message] : gameWin[message] + 1})
        }
      });
  }, [gameWin, setGameWin, setPlayerTurn]);

  useEffect(() => {
    handleGameUpdate();
    handleStartGame();
    handleGameWin();  
  }, [handleGameUpdate, handleStartGame, handleGameWin]);
  
  return (
    <G.GameContainer>
      {!isGameStarted && <h2>기다려!</h2>}
      {(!isGameStarted || !isPlayerTurn) && <h2>상대턴</h2>}
      {matrix.map((row, rowIdx) => {
        return (
          <G.RowContainer key={rowIdx}>
            {row.map((col, colIdx) => (
              <Cell 
                key={colIdx} 
                value={col}
                col={colIdx}
                row={rowIdx} 
                updateMatrix={updateMatrix}
              />
            ))}
          </G.RowContainer>
        );
      })}
      <Score />
    </G.GameContainer>
  );
}

export default Game;