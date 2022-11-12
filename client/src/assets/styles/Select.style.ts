import styled from "styled-components";

export const OnlineImg = styled.img`
  position: absolute;
  top: 46%;
  left: 35%;
  transform: translate(-50%, -50%);

  @keyframes fadeInRight {
    0% {
      opacity: 0;
    }
    100%   {
      opacity: 1;
      left: 40%;
    }
  }
  animation: fadeInRight 1s forwards;
`

export const ComputerImg = styled.img`
  position: absolute;
  top: 46%;
  left: 65%;
  transform: translate(-50%, -50%);

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
    }
    100%   {
      opacity: 1;
      left: 60%;
    }
  }
  animation: fadeInLeft 1s forwards;
`