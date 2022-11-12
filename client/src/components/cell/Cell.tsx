import React from "react";
import X from "../../assets/images/X.png";
import O from "../../assets/images/O.png";
import * as C from "./Cell.style";

const Cell = ({id, value, winLine, handleClick} : {id:number, value: string | null, winLine: number[], handleClick: (id: number) => void}) => {
  return(
    <C.CellContainer onClick={() => handleClick(id)}>
      <div className={ winLine.length === 9 ? 'change'
        :
        id === winLine[0] || id === winLine[1] || id === winLine[2] 
        ? 'change' 
        : undefined}>
        {value && <img src={value === "O" ? O : X} alt={value}/>}
      </div>
    </C.CellContainer>
  );
};

export default Cell;