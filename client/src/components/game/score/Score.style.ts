import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  
  display: flex;
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
`;

export const Player = styled.span`
  font-family: "ROKAF-Sans-Bold";
  font-size: 3rem;
  font-weight: 500;
  text-shadow: 0 -3px 1px black;
`;

export const Value = styled.span`
  width: 10vw;
  height: auto;
  
  margin-top: 2vh;

  font-family: "ROKAF-Sans-Bold";
  font-size: 3.5rem;
  font-weight: 500;
  text-align: center;
`;