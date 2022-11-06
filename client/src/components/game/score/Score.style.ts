import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 88%;
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
  font-family: "Raleway",sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

export const Value = styled.span`
  width: 230px;
  height: 40px;
  
  font-family:  "Raleway",sans-serif;
  font-size: 50px;
  font-weight: 400;
  text-align: center;
`;