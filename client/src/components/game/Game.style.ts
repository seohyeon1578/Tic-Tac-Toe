import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 50%;
  height: 100%;
`;

export const Board = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  max-width: 21vw;
  max-height: 21vw;

  display: flex;
  flex-wrap: wrap;
`;

export const BoardImg = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;
`;

export const PlayerWait = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 28vw;
  height: 18vh;
  
  background-color: #EFF2F9;
  border-radius: 15px;

  font-family: "ROKAF-Sans-Bold";
  font-size: 3rem;
  color: #01377E;
  text-align: center;
  line-height: 18vh;

  z-index: 99;
`;

export const PlayStopper = styled.div`
  cursor: default;
  
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;
  
  z-index: 99;
`;