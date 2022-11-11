import styled from "styled-components";

interface IWidthProps {
  width: string;
}

interface IColorProps extends IWidthProps {
  lastColor?: string;
  firstColor: string;
}

export const TitleWrap = styled.div`
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: "ROKAF-Sans-Bold";
  color: white;
  text-align: center;
  text-shadow: 0 2px 2px black;

  z-index: 1;
`;

export const MainSubtitle = styled.h3`
  font-size: 2rem;
  
  span:first-child {
    color: #D1F9FF;
  }

  span:last-child {
    color: #FFE6B7;
  }
`;

export const MainTitle = styled.h2`
  font-size: 6rem;
`;

export const CharacterImg = styled.img`
  position: absolute;
  left: 49%;
  top: 47%;
  transform: translate(-50%, -50%);

  width: 40%;
`;

export const TopBtn = styled.div<IColorProps>`
  position: absolute;
  top: 0%;
  
  transition: all .5s;
  transform: translateY(-50%);
  
  width: ${({ width }) => width + "rem"};
  height: 6.25rem;
  
  background: ${({ firstColor, lastColor }) => 
                  `linear-gradient(120deg, ${firstColor}, ${lastColor})`};
  border-radius: 50%;

  font-family: "ROKAF-Sans-Bold";
  font-size: 3rem;
  text-align: center;
  text-shadow: -1px -1px 0 gray;
  line-height: 6.25rem;
  color: white;
  
  z-index: 3;
`;

export const MiddleBtn = styled.div<IColorProps>`
  position: absolute;
  top: 51%;
  
  transition: all .5s;
  transform: translateY(-50%);
  
  width: ${({ width }) => width + "rem"};
  height: 2rem;
  
  background-color: ${({ firstColor }) => firstColor};
  
  z-index: 1;
`;

export const BottomBtn = styled.div<IColorProps>`
  position: absolute;
  top: 100%;
  
  transform: translateY(-50%);
  
  width: ${({ width }) => width + "rem"};
  height: 6.25rem;
  
  background-color: ${({ firstColor }) => firstColor};
  border-radius: 50%;
  
  z-index: 2;
`;

export const BtnFrame = styled.div<IWidthProps>`
  position: absolute;
  top: 100%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: ${({ width }) => width + "rem"};
  height: 7rem;

  background-color: white;
  border-radius: 50%;
`;

export const ButtonWrap = styled.div<IWidthProps>`
  cursor: pointer;
  
  position: relative;
  top: 87%;
  left: 50%;
  
  transform: translate(-50%, -50%);

  display: flex;
  
  width: ${({ width }) => width + "rem"};
  height: 2.2rem;

  ${({width}) => width === "20" &&
    `:hover {
      ${TopBtn} {
        top: 16%;
      }

      ${MiddleBtn} {
        top: 64%;
        height: 1.7rem;
      }
    }`
  }
`;

export const OnlineBtn = styled.div`
  position: relative;
  
  width: 15rem;
  height: 2.2rem;

  :hover {
    ${TopBtn} {
      top: 16%;
    }

    ${MiddleBtn} {
      top: 64%;
      height: 1.7rem;
    }
  }
`;

export const ComputerBtn = styled.div`
  position: relative;
  
  width: 15rem;
  height: 2.2rem;

  margin-left: 15%;
  
  :hover {
    ${TopBtn} {
      top: 16%;
    }

    ${MiddleBtn} {
      top: 64%;
      height: 1.7rem;
    }
  }
`;