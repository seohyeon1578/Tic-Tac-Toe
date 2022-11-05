import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #312E2B;
`;

export const ButtonWrap = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;

  a {
    height: 92px;

    margin: 0 0 5px;
    padding: 18px 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.basicBgColor};
    border-radius: 15px;
    color: ${({ theme }) => theme.basicColor};

    text-decoration: none;
    text-shadow: 0 0.1rem 0 rgba(0, 0, 0, 1);

    .button-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 0.8rem;
    }

    .button-subtitle {
      font-family: system-ui,Helvetica,Arial,sans-serif;
      font-size: 14px;
      font-weight: 400;
    }
  }
  
  a:hover {
    background-color: ${({ theme }) => theme.basicBgHoverColor};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: ${({ theme }) => theme.basicHoverColor};
  }
  
  a:first-child {
    margin-bottom: 26px;
    background-color: #F1C550;
    color: #FFF9E0;
    text-shadow: 0 0.1rem 0 rgba(0, 0, 0, .1);
  }

  a:first-child:hover {
    background-color: #FFC421;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: ${({ theme }) => theme.basicHoverColor};
  }

`;