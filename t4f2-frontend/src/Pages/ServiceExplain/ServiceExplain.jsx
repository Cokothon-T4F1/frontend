// ServiceExplain.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ServiceExplain.style";
import Fade from "react-reveal/Fade";

function ServiceExplain() {
  const navigate = useNavigate();
  const PageMoveHandler = () => {
    navigate("/login");
  };
  const NextChangeHandler = () => {
    navigate("/login");
  };

  return (
    <S.Container>
      <S.IsNav>
        <S.Login onClick={PageMoveHandler}>Sign In</S.Login>
      </S.IsNav>

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

      <S.Middle>
        <Fade bottom delay={2000}>
          <S.List>
            <S.PlayImg src="/images/today1.png" alt="img1"></S.PlayImg>
            <S.PlayBar></S.PlayBar>
            <S.PlayBarImg src="/images/playbar.png" alt="img2"></S.PlayBarImg>
            <S.PlayExplain>살면서 겪은 역대급 흑역사 일화</S.PlayExplain>
          </S.List>
        </Fade>

        <Fade bottom delay={2500}>
          <S.TalkImg src="/images/talking.png" alt="im6"></S.TalkImg>
        </Fade>
      </S.Middle>

      <S.Third>
        <S.Emotions>
          <Fade left delay={6000}>
            <S.EmoImg src="/images/happy.png" alt="im6"></S.EmoImg>
          </Fade>

          <Fade left delay={5500}>
            <S.EmoImg src="/images/funny.png" alt="im6"></S.EmoImg>
          </Fade>

          <Fade left delay={5000}>
            <S.EmoImg src="/images/cheer.png" alt="im6"></S.EmoImg>
          </Fade>

          <Fade left delay={4500}>
            <S.EmoImg src="/images/sad.png" alt="im6"></S.EmoImg>
          </Fade>
        </S.Emotions>

        <S.EmotionDetail>
          <Fade bottom delay={4600}>
            <S.EmoChat src="/images/explain2.png" alt="im6"></S.EmoChat>
          </Fade>
          <S.BookList src="/images/book.png" alt="im6"></S.BookList>
        </S.EmotionDetail>
      </S.Third>

      <Fade bottom delay={8500}>
        <S.Fourth>
          <S.Section alt="firstone">
            <S.FirstImg src="/images/melon.png" alt="im6"></S.FirstImg>
            <S.ActionContainer alt="ActionConainer">
              <S.Action1Title>
                '슬퍼요'에 공감한 <br /> 친구들이 만들어준 PlayList 에요!
              </S.Action1Title>
              <S.Carousel>
                <S.LI>
                  <S.Image src="/images/sadlist/album1.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/sadlist/album2.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/sadlist/album3.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/sadlist/album4.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/sadlist/album5.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/sadlist/album6.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/sadlist/album7.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/sadlist/album8.png" />
                </S.LI>
              </S.Carousel>
            </S.ActionContainer>
          </S.Section>

          <S.SecondOne alt="secondone">
            직접 추천한 노래들이 모여 <br /> Topic 에 맞는 PlayList 가 돼요!
          </S.SecondOne>

          <S.Section alt="thirdone">
            <S.ActionContainer alt="HappyList">
              <S.Action2Title>
                '기뻐요'에 공감한 <br /> 친구들이 만들어준 PlayList 에요!
              </S.Action2Title>
              <S.Carousel>
                <S.LI>
                  <S.Image src="/images/happylist/album1.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/happylist/album2.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/happylist/album3.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/happylist/album4.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/happylist/album5.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/happylist/album6.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/happylist/album7.png" />
                </S.LI>
                <S.LI>
                  <S.Image src="/images/happylist/album8.png" />
                </S.LI>
              </S.Carousel>
            </S.ActionContainer>

            <S.PlayListImg src="/images/playlist.png" alt="im6"></S.PlayListImg>
          </S.Section>
        </S.Fourth>
      </Fade>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <S.WriteImg
        onClick={NextChangeHandler}
        src="/images/writebar.png"
        alt="write"
      ></S.WriteImg>
      <br />
      <br />
      <br />
    </S.Container>
  );
}

export default ServiceExplain;
