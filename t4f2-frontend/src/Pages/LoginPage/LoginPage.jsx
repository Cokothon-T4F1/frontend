import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./LoginPage.style";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");

  const PageChangeHandler = async () => {
    try {
      const response = await axios.post(
        // "https://cors-anywhere.herokuapp.com/https://8bf9-1-209-175-115.ngrok-free.app/signin",
        "https://cors-anywhere.herokuapp.com/https://0d95-1-209-175-115.ngrok-free.app/signin",
        {
          email,
          pwd,
        }
      );

      // Assuming your server responds with a success status
      if (response.status === 200) {
        // You can perform additional actions if login is successful
        navigate("/main");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      // Handle Axios error
      console.error("Error occurred during login:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.TitleImg src="/images/lock.png" alt="img5"></S.TitleImg>

        <S.IsLogin>로그인해서 본인의 이야기를 들려주세요</S.IsLogin>
        <S.IsLogin>Login</S.IsLogin>

        <S.Forms>
          <S.FormEmail
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={handleEmailChange}
          ></S.FormEmail>
          <S.FormPw
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={pwd}
            onChange={handlePasswordChange}
          ></S.FormPw>
        </S.Forms>

        <S.Options>
          <S.IsOption>아이디/비밀번호찾기</S.IsOption>
          <S.IsOption>회원가입</S.IsOption>
        </S.Options>

        <S.LoginBtn onClick={PageChangeHandler}>로그인</S.LoginBtn>
      </S.LoginBox>
    </S.Container>
  );
}

export default LoginPage;
