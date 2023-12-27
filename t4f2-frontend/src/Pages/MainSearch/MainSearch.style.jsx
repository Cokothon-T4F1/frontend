import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlayImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const ImageRow = styled.div`
  display: flex;
  margin-top: 10px;
  position: absolute;
  bottom: 80px;
  left: 260px;
`;

export const IsText = styled.div`
  font-weight: 900;
  margin-top: 140px;
  font-size: xx-large;
  font-size: 50px;
`;

export const IsText_2 = styled.div`
  font-weight: 900;
  margin-top: 50px;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const IsText_3 = styled.div`
  font-weight: 600;

  font-size: 40px;
  color: #a4308b;
`;

export const MusicImg = styled.img`
  width: 200px; // Circle diameter
  height: 200px; // Circle diameter
  background-color: blue; // Circle color
  border-radius: 50%; // Makes the div round
`;

export const Ir = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
