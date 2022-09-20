import React, { useState, useContext } from "react";
import Cell from "../cell";
import * as G from './Game.style';
import { PlayMatrix } from "../../type/types/game.type";
import { IMatrix } from "../../type/interfaces/cell";
import GameContext from "../../context/game/Game.context";

const Game = () => {
  const [matrix, setMatrix] = useState<PlayMatrix>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const {playerSymbol, setPlayerSymbol}= useContext(GameContext);

  const updateMatrix= ({row, col, symbol}: IMatrix) => {
    const newMatrix = [...matrix];

    if(newMatrix[row][col] === null || newMatrix[row][col] === "null"){
      newMatrix[row][col] = symbol;
      setMatrix(newMatrix);
    }
  }

  return(
    <G.GameContainer>
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