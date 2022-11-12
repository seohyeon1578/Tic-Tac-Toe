import styled from "styled-components";

export const CellContainer = styled.div`
  position: relative;

  width: 7vw;
  height: 7vw;
  
  z-index: 1;

  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes blinker {
    30% {
      opacity: 0;
    }
  }
  
  .change {
    animation: blinker 1s linear infinite;
  }
`;