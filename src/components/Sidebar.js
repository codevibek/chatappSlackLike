import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  console.log(channels);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2> daiko channel</h2>
          <h3>😂 {user?.displayName}</h3>
        </SidebarInfo>
        <CreateIocn>✏️</CreateIocn>
      </SidebarHeader>
      <SidebarOption Icon="😀" title="Threads" />
      <SidebarOption Icon="😋" title="Mentions and reactions" />
      <SidebarOption Icon="😛" title="Saved items" />

      <SidebarOption Icon="😿" title="Show less" />
      <hr />
      <SidebarOption Icon="😿" title="Channels" />
      <hr />
      <SidebarOption Icon="😥" title="Add Channel" addChannelOption />
      {channels?.docs.map((doc) => {
        console.log(doc);
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 43px;

  > hr {
    margin-top: 10px;
    max-width: 260px;
    border: 1px solid #49274b;
  }
`;
const CreateIocn = styled.div``;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
`;
