import React from "react";
import { IFrameProps } from "../../type/interfaces/frame";
import { Container } from "./Gameframe.style";

const Gameframe = ({ children, src } : IFrameProps) => {
  return(
    <Container>
      <img src={src} alt="게임 틀" className="frame"/>
      {children}
    </Container>
  )
};

export default Gameframe;