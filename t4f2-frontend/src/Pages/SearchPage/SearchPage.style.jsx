// SearchPage.style.jsx
import styled from "styled-components";

export const Container = styled.div`
  idth: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const MusicBox = styled.div`
  width: 550px;
  height: 220px;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MusicTitle = styled.div`
  font-size: 25px;
  font-weight: 1000;
  text-align: center;
  margin-bottom: 30px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const TemaImg = styled.img`
  width: 450px;
  height: 170px;
  margin-top: 46px;
  border-radius: 8px;
`;

export const IsMain = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 500px;
  max-height: 100vh;
  margin-bottom: 20px;
  overflow-y: scroll;
`;
