import React from "react";
import { 
  ButtonWrap, 
  Container 
} from "../assets/styles/Main.style";

const MainPage = () => {
  return (
    <Container>
      <ButtonWrap>
        <a href="/online">
          <div>
            <div className="button-title">온라인 플레이</div>
            <div className="button-subtitle">다른 유저와 플레이 하여 실력을 겨뤄보세요.</div>
          </div>
        </a>
        <a href="/computer">
          <div>
            <div className="button-title">컴퓨터와 플레이</div>
            <div className="button-subtitle">고급 훈련 bot와 플레이 하여 실력을 키워보세요.</div>
          </div>
        </a>
      </ButtonWrap>
    </Container>
 );
};

export default MainPage