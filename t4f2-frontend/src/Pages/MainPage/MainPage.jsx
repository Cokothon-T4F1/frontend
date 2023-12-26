import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import * as S from "./MainPage.style";

function MainPage() {
  return (
    <Container>
      <Header />
      <Title>Today's Post</Title>
      <Text>Click to share & post!</Text>
      <S.TodayList>
        <Fade bottom delay={500}>
          <S.List>
            <S.PlayImg src="/images/today1.png" alt="img1"></S.PlayImg>
            <S.PlayBar></S.PlayBar>
            <S.PlayBarImg src="/images/playbar.png" alt="img2"></S.PlayBarImg>
            <S.PlayExplain>살면서 겪은 역대급 흑역사 일화</S.PlayExplain>
          </S.List>
        </Fade>
        <Fade bottom delay={0}>
          <S.List style={{ marginTop: "30px" }}>
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
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 125px;
  margin-top: 15px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-left: 108px;
  margin-bottom: 35px;
`;

export default MainPage;
