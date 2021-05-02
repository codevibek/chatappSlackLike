import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={() => auth.signOut()}>
          <img src={user?.photoURL} alt={user?.displayName.split("")[0]} />
        </HeaderAvatar>
        <TimeIcon>⌚</TimeIcon>
      </HeaderLeft>
      <HeaderSearch>
        🔍
        <input placeholder="Search" />
      </HeaderSearch>
      <HeaderRight>
        <HeaderHelp>❔</HeaderHelp>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const HeaderAvatar = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  > img {
    border-radius: 50%;
  }
`;
const TimeIcon = styled.p`
  margin-left: auto;
  margin-right: 30px;
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px gray solid;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    width: 100%;
    outline: 0;
    color: white;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
`;
const HeaderHelp = styled.p`
  margin-left: auto;
  margin-right: 20px;
`;
