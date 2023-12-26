import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const TodayList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const List = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const PlayImg = styled.img`
  width: 100%;
  height: 60%;
`;

export const PlayBar = styled.div`
  margin: 30px 20px 5px 20px;
  border: 1px solid black;
`;
export const PlayBarImg = styled.img``;
export const PlayExplain = styled.div`
  font-weight: 800;
`;
