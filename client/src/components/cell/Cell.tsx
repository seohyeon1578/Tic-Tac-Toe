import React from "react";
import * as C from "./Cell.style";

const Cell = ({id, value, winLine, handleClick} : {id:number, value: string | null, winLine: number[], handleClick: (id: number) => void}) => {
  return(
    <C.CellContainer onClick={() => handleClick(id)}>
      <span className={id === winLine[0] || id === winLine[1] || id === winLine[2] ? 'change' : ''}>
        {value}
      </span>
    </C.CellContainer>
  );
};

export default Cell;