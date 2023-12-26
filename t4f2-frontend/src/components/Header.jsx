import styled from 'styled-components';
import React, { useState } from 'react';

const Header = ({ placeholder }) => {
    const [text, setText] = useState('');
    const [hintText, setHintText] = useState(
      placeholder || '검색어를 입력하세요',
    );
  
    const onChange = e => {
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
                <SearchBar onChange={onChange} value={text} placeholder={hintText} />
                <SearchImg src='/images/search.png' alt='SearchImg' />
            </Category>
            <Category>
                <Menu>Monthly Topics</Menu>
                <Menu>Setting</Menu>
                <Menu>Account</Menu>
                <Menu>About</Menu>
            </Category>
        </Box>
      </Container>
    );
  };

const Container = styled.div`
  height: 180px;
  background: linear-gradient(to right, #A4308B, #16B0C5);
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
  font-weight: 1000;
  /* align-self: flex-start; */
  margin-left: 150px;
  margin-top: 20px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 1000; 
  /* align-self: flex-start; */
  margin-left: 95px;
  text-align: center;
`;

const SearchBar = styled.input`
  width: 300px;
  height: 40px;
  border: 2px solid #000000;
  border-radius: 10px;
  /* align-self: flex-end; */
  margin-top: 40px;
`;

const SearchImg = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 46px;
    cursor: pointer;
`;

const Menu = styled.div`
  font-size: 30px;
  font-weight: 1000;
  text-decoration: underline; 
  cursor: pointer; 
`;


// eslint-disable-next-line no-undef
export default Header;