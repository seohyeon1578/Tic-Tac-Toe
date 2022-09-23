import React, { useContext } from "react";
import { ICellProps } from "../../type/interfaces/cell";
import * as C from "./Cell.style";
import GameContext from "../../context/game/Game.context";

const Cell = ({value, col, row, updateMatrix}: ICellProps) => {
  const {playerSymbol, setPlayerSymbol}= useContext(GameContext);
  const symbol = playerSymbol;

  return(
    <C.CellContainer onClick={() => updateMatrix({col, row, symbol})}>
      {value}
    </C.CellContainer>
  );
};

export default Cell;