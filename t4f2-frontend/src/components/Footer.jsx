import styled from "styled-components";

const Footer = ({ onClick }) => {
  return <Container onClick={onClick} />;
};

const Container = styled.div`
  height: 20px;
  background: linear-gradient(to right, #a4308b, #16b0c5);
  cursor: pointer;
  margin-bottom: 0px;
  margin-top: auto;
`;

// eslint-disable-next-line no-undef
export default Footer;
