import React, { useState } from "react";
import Cell from "../cell";
import * as G from './Game.style';
import { PlayMatrix } from "../../type/types/game.type";
import { Col, Row } from "../../type/types/cell.type";

const Game = () => {
  const [matrix, setMatrix] = useState<PlayMatrix>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const updateMatrix = (col: Col, row: Row) => {
    console.log(row, col)
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
                colIdx={colIdx}
                rowIdx={rowIdx} 
                updateMatrix={updateMatrix}
              />
            ))}
          </G.RowContainer>
        )})}
    </G.GameContainer>
  )
};

export default Game;