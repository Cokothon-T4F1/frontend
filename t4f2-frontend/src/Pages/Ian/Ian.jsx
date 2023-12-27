import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "./Ian.style";

function ResultPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [absenceReason, setAbsenceReason] = useState("");
  const [data, setData] = useState({
    title: "민망",
    content: "살면서 겪은 역대급 흑역사 일화 모음",
    posts: [
      {
        content: "난 자꾸 말을 더듬고 잠드는 법도 잊었네",
        id: 2,
        topic_id: 1,
        created_time: "2023-12-26T21:39:23.000Z",
        edited: false,
        user_mail: "bent_shrimp@kookmin.ac.kr",
      },
      {
        content: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        id: 3,
        topic_id: 1,
        created_time: "2023-12-26T21:42:35.000Z",
        edited: false,
        user_mail: "bent_shrimp@kookmin.ac.kr",
      },
      {
        content: "내일이란 오늘의 다른 이름일 뿐이다.",
        id: 4,
        topic_id: 1,
        created_time: "2023-12-26T21:42:52.000Z",
        edited: false,
        user_mail: "bent_shrimp@kookmin.ac.kr",
      },
      {
        content: "마음만을 가지고 있어서는 안 된다. 반드시 실천하여야 한다.",
        id: 5,
        topic_id: 1,
        created_time: "2023-12-26T21:43:04.000Z",
        edited: false,
        user_mail: "bent_shrimp@kookmin.ac.kr",
      },
      {
        content:
          "시간이 덜어주거나 부드럽게 해주지 않는 슬픔이란 하나도 없다. ",
        id: 7,
        topic_id: 1,
        created_time: "2023-12-26T22:12:40.000Z",
        edited: false,
        user_mail: "joohyoeun@sookmyung.ac.kr",
      },
    ],
  });

  // async function getData() {
  //   try {
  //     const result = await axios(
  //       "https://cors-anywhere.herokuapp.com/http://0d95-1-209-175-115.ngrok-free.app/topic/1",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "ngrok-skip-browser-warning": "69420",
  //         },
  //       }
  //     );
  //     await setData(result.data.posts);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://cors-anywhere.herokuapp.com/http://0d95-1-209-175-115.ngrok-free.app/topic/1",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "ngrok-skip-browser-warning": "69420",
  //         },
  //       }
  //     );
  //     setData(response);
  //     return response;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
      {data.posts.map((item) => (
        <S.Single>
          <S.SinImg src="/images/user.png" alt="UserImg"></S.SinImg>
          <S.Texting>
            <S.Name>{item.user_mail}</S.Name>
            <S.InfoDetail>{item.content}</S.InfoDetail>
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
                <S.EmoSee>조회</S.EmoSee>
              </S.ImoList>
            </S.Emotions>
          </S.Texting>
        </S.Single>
      ))}

      {/* <S.Single>
        <S.SinImg src="/images/user.png" alt="UserImg"></S.SinImg>
        <S.SingleInfo>
          <S.Texting>
            <S.Name> @이안시누</S.Name>
            <S.InfoDetail>
              {" "}
              피크닉 가서 사랑하는 사람과 별것도 아닌 이야기로 시시덕거리면서
              웃고 좋아하는 책을 읽다가 봄냄새를 맡으며 낮잠에 들었던 추억이
              떠오르네요
            </S.InfoDetail>
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
      </S.Single> */}
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
