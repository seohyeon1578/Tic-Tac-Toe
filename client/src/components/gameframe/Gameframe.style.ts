import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.mainBgColor};

  .frame {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  
    width: 50%;
    height: 100%;
  }
`;