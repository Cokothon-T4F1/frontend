import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as S from "../MainPage/MainPage.style";
import styled from "styled-components";
import User from "../../components/User";
import Ian from "../Ian/Ian";

function MainPostPage({ placeholder }) {
  const [text, setText] = useState("");
  const [hintText, setHintText] = useState(
    placeholder || "Share your stories!"
  );

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (    
    <Container>
        <Header />
        <Box>
          <VerticBox>
            <Title>Today's Post</Title>
            <Text>Click to share & post!</Text>
            <S.List>
              <S.PlayImg src="/images/today3.png" alt="img5"></S.PlayImg>
              <S.PlayBar></S.PlayBar>
              <S.PlayBarImg src="/images/playbar.png" alt="img6"></S.PlayBarImg>
              <S.PlayExplain>친구가 이성으로 보이는 순간</S.PlayExplain>
            </S.List>
          </VerticBox>
          <VerticBox> 
            {/* <NickName>@IanSinu</NickName> */}
            <Box_>
              <User />
              <SearchBar onChange={onChange} value={text} placeholder={hintText} />
              <SearchImg src="/images/search.png" alt="search" />
            </Box_>
            <CommentBox>
              <Ian/>
            </CommentBox>
          </VerticBox>
        </Box>
        <Footer />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const VerticBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.input`
  width: 550px;
  height: 25px;
  background: linear-gradient(to right, #A4308B, #16B0C5);
  border-radius: 10px;
  margin-top: 60px;
`;

const Box = styled.div`
  margin-left: 7%;
  margin-right: 10%;
  display: flex;
  flex-direction: row;
  gap:350px;
`;

const Box_ = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 20px;
`;

const CommentBox = styled.div`
  margin-top: 30px;
  width: 700px;
  height: 400px;
  border: 2px solid #909090;

`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 21px;
  margin-top: 15px;
  z-index: -1;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 35px;
  margin-left: 4px;
`;

const NickName = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: start;
  margin-left: 90px;
`;

const SearchImg = styled.img`
  width:30px;
  height: 30px;
  cursor: pointer;
`;

export default MainPostPage;