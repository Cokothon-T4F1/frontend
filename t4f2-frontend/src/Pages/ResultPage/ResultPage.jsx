import React from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "./ResultPage.style";

function ResultPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [word, setAbsenceReason] = useState("");
  const [songname, setSongName] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleReasonChange = (event) => {
    setAbsenceReason(event.target.value);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const MusicHandle = () => {
    setModalOpen(true);
  };

  const handleSendReason = async () => {
    try {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://0d95-1-209-175-115.ngrok-free.app/music/search",
        {
          params: {
            word: word,
            type: "track",
          },
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      const songs = result.data;
      console.log(songs);
      setSongName(songs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <S.LeftContain>
      <S.Single>
        <S.SingleInfo>
          <S.SinImg src="/images/unable.png" alt="SearchImg"></S.SinImg>
          <S.Texting>
            <S.Name> @이안시누</S.Name>
            <S.InfoDetail> 어쩌구 내용</S.InfoDetail>
            <S.Emotions>
              <S.ImoList>
                <S.EmoImg src="/images/happy.png" alt="SearchImg"></S.EmoImg>
                <S.EmoSee onClick={MusicHandle}>조회</S.EmoSee>
              </S.ImoList>

              <S.ImoList>
                <S.EmoImg src="/images/cheer.png" alt="SearchImg"></S.EmoImg>
                <S.EmoSee onClick={MusicHandle}>조회</S.EmoSee>
              </S.ImoList>

              <S.ImoList>
                <S.EmoImg src="/images/funny.png" alt="SearchImg"></S.EmoImg>
                <S.EmoSee onClick={MusicHandle}>조회</S.EmoSee>
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
                value={word}
                onChange={handleReasonChange}
                placeholder="사유를 입력하세요"
              />
              <S.SendButton onClick={handleSendReason}>전송하기</S.SendButton>
            </S.ReasonCont>
            {songname && Array.isArray(songname) && (
              <S.SongListContainer>
                {songname.map((song, index) => (
                  <S.SongItem key={index}>{song.name}</S.SongItem>
                ))}
              </S.SongListContainer>
            )}
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.LeftContain>
  );
}

export default ResultPage;
