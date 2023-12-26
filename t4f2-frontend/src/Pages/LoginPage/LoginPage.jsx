import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./LoginPage.style";

function LoginPage() {
  const navigate = useNavigate();

  const PageChangeHandler = () => {
    navigate("/main");
  };

  return (
    <S.Container>
      <S.LoginTitle>로그인해서 이야기를 들려주세요!</S.LoginTitle>
      <S.LoginBox>
        <S.IsLogin>Login</S.IsLogin>

        <S.Forms>
          <S.FormEmail
            type="email"
            placeholder="이메일을 입력하세요"
          ></S.FormEmail>
          <S.FormPw
            type="password"
            placeholder="비밀번호를 입력하세요"
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
