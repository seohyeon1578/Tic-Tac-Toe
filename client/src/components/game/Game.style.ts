import styled from "styled-components";

export const GameContainer = styled.div`
  position: relative;
  
  width: 100vw;
  height: 100vh;
  
  background-color: ${({ theme }) => theme.mainBgColor};
`;

export const Board = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  max-width: 600px;
  max-height: 600px;
  
  display: flex;
  flex-wrap: wrap;
`;