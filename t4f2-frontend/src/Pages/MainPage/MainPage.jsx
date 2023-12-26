import React from "react";
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function MainPage() {
  return (
    <Container>
      <Header />
      <Title>Today's Post</Title>
      <Text>Click to share & post!</Text>
      <Contain>
        <MusicBox1>
          <TemaImg src='/images/today1.png' alt='TemaImg1' />
          <MusicTitle>
            살면서 겪은 역대급 흑역사 일화
          </MusicTitle>
        </MusicBox1>
        <MusicBox2>
          <MusicTitle>
            수채화처럼 온 몸에 따스히 번지는 나의 봄
          </MusicTitle>
        </MusicBox2>
        <MusicBox3>
          <MusicTitle>
            친구가 이성으로 보이는 순간
          </MusicTitle>
        </MusicBox3>
      </Contain>
      <Footer />
    </Container>
  ); 
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`

const Title = styled.div`
  font-size: 35px;
  font-weight: 1000;
  margin-left: 125px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 1000; 
  margin-left: 150px;
`;

const MusicTitle = styled.div`
  font-size: 25px;
  font-weight: 1000;
  text-align: center;
  margin-bottom: 30px;
  margin-left: 10%;
  margin-right: 10%;
`;

const MusicBox1 = styled.div`
  width: 300px;
  height: 550px;
  border: 2px solid #D9D9D9;
  border-radius: 8px;
  margin: 30px 130px 125px;
  display: flex;
  flex-direction: column;
`;

const MusicBox2 = styled.div`
  width: 300px;
  height: 550px;
  border: 2px solid #D9D9D9;
  border-radius: 8px;
  margin-top: 120px;
  display: flex;
`;

const MusicBox3 = styled.div`
  width: 300px;
  height: 550px;
  border: 2px solid #D9D9D9;
  border-radius: 8px;
  margin: 20px 125px 130px;
  display: flex;
`;

const TemaImg = styled.img`
    width: 300px;
    height: 200px;
    margin-top: 46px;
    border-radius: 8px;
`;

export default MainPage;
