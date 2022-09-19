import React from "react";
import { ICellProps } from "../../type/interfaces/cell";
import * as C from "./Cell.style";

const Cell = ({value, colIdx, rowIdx, updateMatrix}: ICellProps) => {
  return(
    <C.CellContainer onClick={() => updateMatrix(colIdx, rowIdx)}>
      {value}
    </C.CellContainer>
  );
};

export default Cell;