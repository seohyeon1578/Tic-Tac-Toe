import React, { useState, useContext, useEffect, useCallback } from "react";
import { IPlayMatrix } from "../../type/types/game.type";
import { IMatrix } from "../../type/interfaces/cell";
import GameContext from "../../context/game/Game.context";
import { socketService } from "../../utils/socket";
import { gameWin, onGameUpdate, onGameWin, onStartGame, updateGame } from "../../utils/game";
import Cell from "../cell";
import * as G from './Game.style';

const Game = () => {
  const [matrix, setMatrix] = useState<IPlayMatrix>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const socket = socketService.getSocket();

  const { 
    playerSymbol, 
    setPlayerSymbol, 
    isPlayerTurn, 
    setPlayerTurn, 
    isGameStart, 
    setGameStart 
  } = useContext(GameContext);

  const checkGameState = (matrix: IPlayMatrix) => {
    // 행 체크
    for (let i = 0; i < matrix.length; i++) {
      let row = [];
      for (let j = 0; j < matrix[i].length; j++) {
        row.push(matrix[i][j]);
      }

      if (row.every((value) => value && value === playerSymbol)) {
        alert(playerSymbol + "Win");
        return [true, false];
      }else if (row.every((value) => value && value !== playerSymbol)) {
        alert(playerSymbol + "Win");
        return [false, true];
      }
    }

    // 열 체크
    for (let i = 0; i < matrix.length; i++) {
      let col = [];
      for (let j = 0; j < matrix[i].length; j++) {
        col.push(matrix[i][j]);
      }

      if (col.every((value) => value && value === playerSymbol)) {
        return [true, false];
      }else if (col.every((value) => value && value !== playerSymbol)) {
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
  };

  const updateMatrix= ({row, col, symbol}: IMatrix) => {
    const newMatrix = [...matrix];

    if(newMatrix[row][col] === null || newMatrix[row][col] === "null"){
      newMatrix[row][col] = symbol;
      setMatrix(newMatrix);
    }

    if(socket){
      updateGame(socket, newMatrix);
      const [currentPlayerWon, otherPlayerWon] = checkGameState(newMatrix);
      if (currentPlayerWon && otherPlayerWon) {
        gameWin(socket, "The Game is a TIE!");
        alert("The Game is a TIE!");
      } else if (currentPlayerWon && !otherPlayerWon) {
        gameWin(socket, "You Lost!");
        alert("You Won!");
      }
      
      setPlayerTurn(false);
    };
  }

  const handleStartGame = useCallback(() => {
    if(socket){
      onStartGame(socket, (options) => {
        setGameStart(true);
        setPlayerSymbol(options.symbol);
        if(options.start){
          setPlayerTurn(true);
        }else {
          setPlayerTurn(false);
        }
      });
    }; 
  }, [socket, setGameStart, setPlayerSymbol, setPlayerTurn]);

  const handleGameUpdate = useCallback(() => { 
    if(socket){
      onGameUpdate(socket, (newMatrix) => {
        setMatrix(newMatrix);
        checkGameState(newMatrix);
        setPlayerTurn(true);
      }) 
    }  
  }, [socket, setPlayerTurn]);

  const handleGameWin = useCallback(() => {
    if (socket)
      onGameWin(socket, (message) => {
        console.log("Here", message);
        setPlayerTurn(false);
        alert(message);
      });
  }, [socket, setPlayerTurn]);

  useEffect(() => {
    handleGameUpdate();
    handleStartGame();
    handleGameWin();
  }, [handleGameUpdate, handleStartGame, handleGameWin])
  
  console.log(isGameStart, isPlayerTurn)
  return(
    <G.GameContainer>
      {!isGameStart && (<h2>기다려!</h2>)}
      {(!isGameStart || !isPlayerTurn) && <h2>상대턴</h2>}
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
        )})}
    </G.GameContainer>
  )
};

export default Game;