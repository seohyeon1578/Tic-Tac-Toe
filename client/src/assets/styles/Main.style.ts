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

  .character {
    position: absolute;
    left: 49%;
    top: 47%;
    transform: translate(-50%, -50%);

    width: 40%;

  }

  .button-wrap {
    position: relative;
    top: 87%;
    left: 50%;
    
    transform: translate(-50%, -50%);
    
    width: 20rem;
    height: 2.2rem;
  }

  .button-wrap:hover {
    .top-button {
      top: 16%;
    }

    .middle-button {
      top: 64%;
      height: 1.7rem;
    }
  }

  .top-button {
    position: absolute;
    top: 0%;
    
    transition: all .5s;
    transform: translateY(-50%);
    
    width:20rem;
    height: 6.25rem;
    
    background: linear-gradient(120deg, #FE7527, #FFB85B);
    border-radius: 50%;

    font-family: "ROKAF-Sans-Bold";
    font-size: 3rem;
    text-align: center;
    text-shadow: -1px -1px 0 gray;
    line-height: 6.25rem;
    color: white;
    
    z-index: 3;
  }

  .middle-button {
    position: absolute;
    top: 51%;
    
    transition: all .5s;
    transform: translateY(-50%);
    
    width: 20rem;
    height: 2rem;
    
    background-color: #FF7B02;
    
    z-index: 1;
  }

  .bottom-button {
    position: absolute;
    top: 100%;
    
    transform: translateY(-50%);
    
    width: 20rem;
    height: 6.25rem;
    
    background-color: #FF7B02;
    border-radius: 50%;
    
    z-index: 2;
  }

  .button-frame {
    position: absolute;
    top: 100%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 21.5rem;
    height: 7rem;

    background-color: white;
    border-radius: 50%;
  }
`;