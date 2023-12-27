import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #5220c7;
`;

export const LoginTitle = styled.div`
color: black;
font-weight: 1000;
font-size: xx-large;
}
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  width: 700px;
  background: #ffffff;
  border-radius: 20px;
  margin-left: 400px;
`;

export const IsLogin = styled.div`
  font-weight: 1000;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: xx-large;
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormEmail = styled.input`
  margin: 0 auto;
  width: 400px;
  height: 60px;
  border: 1px solid black;
  margin-bottom: 40px;
  border-radius: 6px;
`;

export const FormPw = styled.input`
  width: 400px;
  height: 60px;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 6px;
`;

export const Options = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
`;

export const IsOption = styled.div`
  font-weight: 1000;
  margin-top: 20px;
  font-size: xx-large;
  letter-spacing: 0;
`;

export const LoginBtn = styled.div`
  width: 140px;
  height: 40px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 6px;
  background: #6a4f77;
  color: white;
  padding-top: 20px;
  margin-bottom: 10px;
`;

export const TitleImg = styled.img`
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
`;
