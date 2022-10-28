import React, { useContext } from "react";
import { useRecoilState } from "recoil";
import { symbolState } from "../../store/game/symbolState";
import { ICellProps } from "../../type/interfaces/cell";
import * as C from "./Cell.style";

const Cell = ({value, col, row, updateMatrix}: ICellProps) => {
  const [playerSymbol, setPlayerSymbol] = useRecoilState(symbolState)

  return(
    <C.CellContainer onClick={() => updateMatrix({col, row, symbol: playerSymbol})}>
      {value}
    </C.CellContainer>
  );
};

export default Cell;