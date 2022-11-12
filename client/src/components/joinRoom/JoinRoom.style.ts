import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 50%;
  height: 100%;
`;

export const Form = styled.form`
  position: absolute;
  top: 26%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
`;

export const NameInput = styled.input`
  width: 20vw;
  height: 5vh;
  
  margin-right: 15px;
  padding: 16px;

  background-color: white;
  border-radius: 15px;
  color: #F7A39A;
  font-family: "ROKAF-Sans-Bold";
  font-size: 1rem;
  font-weight: 400;
  
`;

export const JoiningBtn = styled.button`
  width: 4vw;
  height: 5vh;

  background-color: white;
  border-radius: 15px;
  color: #F7A39A;
  font-family: "ROKAF-Sans-Bold";
  font-size: 1rem;
  font-weight: 400;

  :hover {
    background-color: #F7A39A;
    color: white;
  }
`;

export const RoomList = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 26vw;
  height: 40vh;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: white;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #F7A39A;
  }
`;

export const Room = styled.button`
  position: relative;
  width: 24vw;
  height: 6vh;
  margin-bottom: 2vh;

  background-color: white;
  border-radius: 15px;
  color: #F7A39A;
  font-family: "ROKAF-Sans-Bold";
  font-size: 1rem;
  font-weight: 400;

  :hover {
    background-color: #F7A39A;
    color: white;
  }
`;

export const RoomName = styled.span`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
`;

export const RoomSize = styled.span`
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translateY(-50%);

  white-space: nowrap;
`;