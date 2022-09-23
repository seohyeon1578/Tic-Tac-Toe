import React, { useState, useContext, useEffect, useCallback } from "react";
import { IPlayMatrix } from "../../type/types/game.type";
import { IMatrix } from "../../type/interfaces/cell";
import GameContext from "../../context/game/Game.context";
import { socketService } from "../../utils/socket";
import { onGameUpdate, onStartGame, updateGame } from "../../utils/game";
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

  const updateMatrix= ({row, col, symbol}: IMatrix) => {
    const newMatrix = [...matrix];

    if(newMatrix[row][col] === null || newMatrix[row][col] === "null"){
      newMatrix[row][col] = symbol;
      setMatrix(newMatrix);
    }

    if(socket){
      updateGame(socket, newMatrix);
      setPlayerTurn(false);
    } 
  };

  const handleStartGame = useCallback(() => {
    if(socket){
      onStartGame(socket, (option) => {
        console.log(option)
        setGameStart(true);
        setPlayerSymbol(option.symbol);
        if(option.start){
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
        setPlayerTurn(true);
      }) 
    }  
  }, [socket, setPlayerTurn]);

  useEffect(() => {
    handleGameUpdate();
    handleStartGame();
  }, [handleGameUpdate, handleStartGame])
  
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