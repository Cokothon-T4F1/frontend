import styled from "styled-components";

export const LeftContain = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export const SingleInfo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Single = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export const SinImg = styled.img`
  width: 40px;
`;

export const Texting = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  border: 1px solid black;
`;

export const InfoDetail = styled.div`
  border: 1px solid black;
  margin-top: 10px;
`;

export const Emotions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ImoList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const EmoImg = styled.img`
  width: 40px;
`;

export const EmoSee = styled.div``;

export const ModalTitle = styled.div`
  color: black;
  position: fixed;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* semi-transparent gray background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  height: 20%;
  width: 80%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  margin-left: 40px;
  margin-right: 40px;
  align-items: center;
`;

export const CloseButton = styled.div`
  color: white;
  position: fixed;
  right: 60px;
  background-color: black;
`;
export const ReasonCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.input`
  height: 60px;
  border: 1px solid black;
  margin-top: 30px;
`;

export const SendButton = styled.div`
  margin-left: 90px;
  margin-top: 12px;
  width: 90px;
  padding: 10px;
  border-radius: 10px;
  background: #2b80ff33;
  font-weight: 700;
`;
