import React from "react";
import gameFrame from "../../assets/images/gameframe.png";
import { IChildren } from "../../type/interfaces/frame";
import { Container } from "./Gameframe.style";

const Gameframe = ({ children } : IChildren) => {
  return(
    <Container>
      <img src={gameFrame} alt="게임 틀" className="frame"/>
      {children}
    </Container>
  )
};

export default Gameframe;