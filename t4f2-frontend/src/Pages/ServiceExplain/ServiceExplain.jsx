import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ServiceExplain.style";
import Fade from "react-reveal/Fade";

function ServiceExplain() {
  const navigate = useNavigate();
  const PageMoveHandler = () => {
    navigate("/login");
  };

  return (
    <S.Container>
      <S.Login onClick={PageMoveHandler}>Sign In</S.Login>

      <S.MainTitle>
        <S.ServiceTitle>Waggle!</S.ServiceTitle>
        <S.ListDetail>Today's Topic</S.ListDetail>
      </S.MainTitle>

      <S.TodayList>
        <Fade bottom delay={0}>
          <S.List>
            <S.PlayImg src="/images/today1.png" alt="img1"></S.PlayImg>
            <S.PlayBar></S.PlayBar>
            <S.PlayBarImg src="/images/playbar.png" alt="img2"></S.PlayBarImg>
            <S.PlayExplain>살면서 겪은 역대급 흑역사 일화</S.PlayExplain>
          </S.List>
        </Fade>
        <Fade bottom delay={500}>
          <S.List>
            <S.PlayImg src="/images/today2.png" alt="img3"></S.PlayImg>
            <S.PlayBar></S.PlayBar>
            <S.PlayBarImg src="/images/playbar.png" alt="img4"></S.PlayBarImg>
            <S.PlayExplain>
              수채화처럼 온 몸에 따스히 번지는 나의 봄
            </S.PlayExplain>
          </S.List>
        </Fade>
        <Fade bottom delay={1000}>
          <S.List>
            <S.PlayImg src="/images/today3.png" alt="im5"></S.PlayImg>
            <S.PlayBar></S.PlayBar>
            <S.PlayBarImg src="/images/playbar.png" alt="img6"></S.PlayBarImg>
            <S.PlayExplain>친구가 이성으로 보이는 순간</S.PlayExplain>
          </S.List>
        </Fade>
      </S.TodayList>
      <S.ScrollCheck> 스크롤 체크입니다 </S.ScrollCheck>
      <S.ScrollCheck> 스크롤 체크입니다 </S.ScrollCheck>
      <S.ScrollCheck> 스크롤 체크입니다 </S.ScrollCheck>
      <S.ScrollCheck> 스크롤 체크입니다 </S.ScrollCheck>
      <S.ScrollCheck> 스크롤 체크입니다 </S.ScrollCheck>
      <S.ScrollCheck> 스크롤 체크입니다 </S.ScrollCheck>
    </S.Container>
  );
}

export default ServiceExplain;
