import React from "react";
import { useState } from "react";
// import axios from "axios";
import * as S from "./Ian.style";

function ResultPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [absenceReason, setAbsenceReason] = useState("");

  const handleReasonChange = (event) => {
    setAbsenceReason(event.target.value);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const MusicHandle = () => {
    setModalOpen(true);
  };

  const handleSendReason = () => {
        handleCloseModal();
  };

  return (
    <S.LeftContain>
      <S.Single>
      <S.SinImg src="/images/user.png" alt="UserImg"></S.SinImg>
        <S.SingleInfo>
          {/* <S.SinImg src="/images/unable.png" alt="SearchImg"></S.SinImg> */}
          <S.Texting>
            <S.Name> @이안시누</S.Name>
            <S.InfoDetail> 피크닉 가서 사랑하는 사람과 별것도 아닌 이야기로 시시덕거리면서 웃고 좋아하는 책을 읽다가 봄냄새를 맡으며 낮잠에  들었던 추억이 떠오르네요</S.InfoDetail>
            <S.Emotions>
              <S.ImoList>
                <S.EmoImg src="/images/happy.png" alt="SearchImg"></S.EmoImg>
                <S.EmoSee>조회</S.EmoSee>
              </S.ImoList>

              <S.ImoList>
                <S.EmoImg src="/images/cheer.png" alt="SearchImg"></S.EmoImg>
                <S.EmoSee>조회</S.EmoSee>
              </S.ImoList>

              <S.ImoList>
                <S.EmoImg src="/images/funny.png" alt="SearchImg"></S.EmoImg>
                <S.EmoSee>조회</S.EmoSee>
              </S.ImoList>

              <S.ImoList>
                <S.EmoImg src="/images/sad.png" alt="SearchImg"></S.EmoImg>
                <S.EmoSee onClick={MusicHandle}>조회</S.EmoSee>
              </S.ImoList>
            </S.Emotions>
          </S.Texting>
        </S.SingleInfo>
      </S.Single>
      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalTitle>검색할 노래를 알려주세요!</S.ModalTitle>
            <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>

            <S.ReasonCont>
              <S.TextBox
                value={absenceReason}
                onChange={handleReasonChange}
                placeholder="사유를 입력하세요"
              />
              <S.SendButton onClick={handleSendReason}>전송하기</S.SendButton>
            </S.ReasonCont>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.LeftContain>
  );
}

export default ResultPage;