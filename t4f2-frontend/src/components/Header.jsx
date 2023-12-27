import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = ({ placeholder }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [hintText, setHintText] = useState(
    placeholder || "검색어를 입력하세요"
  );

  const SearchHandler = () => {
    navigate("/search");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <Box>
        <Title>Wiggle</Title>
        <Text>
          Share Stories
          <br />
          And Make Automatic Playlist!
        </Text>
      </Box>
      <Box>
        <Category>
          <SearchImg src="/images/search.png" alt="SearchImg" />
          <SearchBar onChange={onChange} value={text} placeholder={hintText} />
        </Category>
        <Category>
          <Menu onClick={SearchHandler}>Monthly Topics</Menu>
          <Menu onClick={SearchHandler}>Search</Menu>
          <Menu>Account</Menu>
          <Menu>About</Menu>
        </Category>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  height: 140px;
  background: linear-gradient(to right, #a4308b, #16b0c5);
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-right: 40px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bolder;
  /* align-self: flex-start; */
  margin-left: 150px;
  margin-top: 20px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-left: 120px;
  text-align: center;
  margin-top: -20px;
`;

const SearchBar = styled.input`
  width: 300px;
  height: 25px;
  border: 2px solid #000000;
  border-radius: 10px;
  /* align-self: flex-end; */
  margin-top: 40px;
`;

const SearchImg = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 45px;
  cursor: pointer;
  margin-right: -10px;
`;

const Menu = styled.div`
  font-size: 15px;
  font-weight: 1000;
  cursor: pointer;
  margin-right: 60px;
`;

// eslint-disable-next-line no-undef
export default Header;
