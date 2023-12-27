import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as s from "./SearchPage.style";
import styled from "styled-components";
import Header from "../../components/Header";

const SearchPage = () => {
  const [topicid, setText] = useState("");
  const navigate = useNavigate();

  const NextChangeHandle = () => {
    navigate("/result");
  };

  const onChange = (event) => {
    setText(event.target.value);
  };
  const ApiHandler = async () => {
    try {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://0d95-1-209-175-115.ngrok-free.app/topic",
        {
          params: {
            query: topicid,
          },
          headers: {
            "Content-Type": `application/json`,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      alert("성공");
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <s.Container>
      <Header />
      <Ques>
        <SearchImg
          onClick={ApiHandler}
          src="/images/search.png"
          alt="SearchImg"
        />
        <SearchBar
          onChange={onChange}
          value={topicid}
          placeholder="검색어를 입력하세요."
        ></SearchBar>
      </Ques>

      <s.IsMain>
        <s.MusicBox>
          <s.TemaImg
            onClick={NextChangeHandle}
            src="/images/search1.png"
            alt="TopicImg1"
          />
          <s.MusicTitle>살면서 겪은 역대급 흑역사 일화</s.MusicTitle>
        </s.MusicBox>
        <s.MusicBox>
          <s.TemaImg src="/images/search2.png" alt="TopicImg2" />
          <s.MusicTitle>수채화처럼 온 몸에 따스히 번지는 나의 봄</s.MusicTitle>
        </s.MusicBox>
        <s.MusicBox>
          <s.TemaImg src="/images/search3.png" alt="TopicImg3" />
          <s.MusicTitle>친구가 이성으로 보이는 순간</s.MusicTitle>
        </s.MusicBox>
      </s.IsMain>
    </s.Container>
  );
};
export default SearchPage;

const SearchBar = styled.input`
  width: 300px;
  height: 25px;
  border: 2px solid #000000;
  border-radius: 10px;
  margin-top: 40px;
`;

const SearchImg = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 45px;
  cursor: pointer;
  margin-top: -10;
  margin-right: 5px;
  margin-left: -18px;
`;

const Ques = styled.div`
  margin-left: 620px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: -10px;
`;
