import styled from "styled-components";

export const CellContainer = styled.div`
  position: relative;

  width: 200px;
  height: 200px;

  border: 1px solid white;
  
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  :nth-child(1) {
    border-width: 0 1px 1px 0;
  }
  :nth-child(2) {
    border-width: 0 0 1px 0;
  }
  :nth-child(3) {
    border-width: 0px 0px 1px 1px;
  }

  :nth-child(4) {
    border-width: 0 1px 0 0;
  }
  :nth-child(5) {
    border: none;
  }
  :nth-child(6) {
    border-width: 0 0 0 1px;
  }

  :nth-child(7) {
    border-width: 1px 1px 0 0;
  }
  :nth-child(8) {
    border-width: 1px 0 0 0;
  }
  :nth-child(9) {
    border-width: 1px 0 0 1px;
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