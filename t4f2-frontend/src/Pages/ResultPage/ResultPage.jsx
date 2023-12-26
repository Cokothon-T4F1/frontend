import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "./ResultPage.style";

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
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://8bf9-1-209-175-115.ngrok-free.app/music/search",
        {
          params: {
            word: absenceReason,
            type: "track",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("곡 탐색 완료!");
        handleCloseModal();
      })
      .catch((error) => {
        // Handle errors
        console.error("Error sending GET request:", error);
      });
  };

  return (
    <S.LeftContain>
      <S.Single>
        {/* 넣기 */}
        <S.SingleInfo>
          <S.SinImg src="/images/unable.png" alt="SearchImg"></S.SinImg>
          <S.Texting>
            <S.Name> @이안시누</S.Name>
            <S.InfoDetail> 어쩌구 내용</S.InfoDetail>
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
