import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const LoginTitle = styled.div`
width: 100%;
color: black;
font-weight: 800;
margin-top: 100px;
font-size: xx-large;
}
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 200px;
  height: 400px;
  background: #d9d9d9;
  border-radius: 10px;
`;

export const IsLogin = styled.div`
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
`;

export const FormPw = styled.input`
  width: 400px;
  height: 60px;
  border: 1px solid black;
  margin: 0 auto;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
`;

export const IsOption = styled.div`
  width: 200px;
  height: 30px;
  background: #ffbdbd;
  border-radius: 8px;
  margin-top: 20px;
`;
export const LoginBtn = styled.div`
  width: 100px;
  height: 30px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 6px;
  background: #6a4f77;
  color: white;
`;
