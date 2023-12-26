import styled from "styled-components";


function User(){
    return <UserImg src="/images/user.png" alt="user" />
};

const UserImg = styled.img`
  width:70px;
  height: 70px;

`;

export default User;