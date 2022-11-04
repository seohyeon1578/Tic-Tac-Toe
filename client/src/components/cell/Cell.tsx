import React from "react";
import * as C from "./Cell.style";

const Cell = ({id, value, handleClick} : {id:number, value: string | null, handleClick: (id: number) => void}) => {
  return(
    <C.CellContainer onClick={() => handleClick(id)}>
      {value}
    </C.CellContainer>
  );
};

export default Cell;