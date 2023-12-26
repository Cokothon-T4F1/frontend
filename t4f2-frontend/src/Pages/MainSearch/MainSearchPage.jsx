import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as S from "../MainPage/MainPage.style";
import * as T from "../MainSearch/MainSearchPage.style";
import { PlayImg, ImageRow, Circle } from "./MainSearchPage.style"; // Import ImageRow

function MainSearchPage() {
  return (
    <S.Container>
      <Header />
      <T.MusicImg
        src="/images/Circlemusic.png"
        alt="Image 4"
      />

      <T.IsText>Now Playing</T.IsText>
      <T.IsText_2>수채화처럼 온 몸에 따스히 번지는 나의 봄</T.IsText_2>
      <T.IsText_3>Covered with the Reddish Sky</T.IsText_3>
      <ImageRow>
        {" "}
        {/* Wrap PlayImg components with ImageRow */}
        <PlayImg
          src="/images/left_foward_play.png"
          alt="Image 1"
        />
        <PlayImg
          src="/images/plsy_button.png"
          alt="Image 2"
        />
        <PlayImg
          src="/images/right_foward_play.png"
          alt="Image 3"
        />
      </ImageRow>
      <Footer />
    </S.Container>
  );
}

export default MainSearchPage;
