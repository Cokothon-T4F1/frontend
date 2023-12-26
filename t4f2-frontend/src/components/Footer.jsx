import styled from 'styled-components';

const Footer = ({ onClick }) => {
    return (
      <Container onClick={onClick} />
    );
  };

const Container = styled.div`
  height: 64px;
  background: linear-gradient(to right, #A4308B, #16B0C5);
  cursor: pointer;
  margin-bottom: 0px;
  margin-top: auto;
`;

// eslint-disable-next-line no-undef
export default Footer;