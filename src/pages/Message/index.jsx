// ChatList.tsx
import React from "react";
import styled from "styled-components";

import Navbar from "../../components/NavBar";

const Container = styled.div`
  padding-bottom: 60px; /* Espaço para a navbar fixa */
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.div`
  background-color: #318069;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatListContainer = styled.div`
  padding: 15px;
`;

const ChatItem = styled.div`
  background-color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.div`
  margin-right: 10px;
`;

const ChatDetails = styled.div`
  flex-grow: 1;
`;

const Name = styled.div`
  font-weight: bold;
`;

const LastMessage = styled.div`
  font-size: 12px;
  color: #666;
`;

const Badge = styled.div`
  border-radius: 12px;
  padding: 3px 8px;
  font-size: 12px;
  color: #333;
`;

const ChatList= () => {
  return (
    <>

    <Container>
      <Header>
        <span>Nome e Logo</span>
        <span>🔍</span>
      </Header>

      <ChatListContainer>
        {/* Nome do Chatbot */}
        <ChatItem>
          <Avatar>
            <img
              src="link-para-avatar.png"
              alt="Avatar"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          </Avatar>
          <ChatDetails>
            <Name>Nome do Chatbot</Name>
            <LastMessage>Tem como você reiniciar o comput...</LastMessage>
          </ChatDetails>
        </ChatItem>

        {/* Ícaro Baliza */}
        <ChatItem>
          <Avatar>
            <img
              src="link-para-avatar-icaro.png"
              alt="Ícaro"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          </Avatar>
          <ChatDetails>
            <Name>Ícaro Baliza <Badge type="mentor">Mentor</Badge></Name>
            <LastMessage>Tem como você reiniciar o comput...</LastMessage>
          </ChatDetails>
        </ChatItem>

        {/* InfoJr */}
        <ChatItem>
          <Avatar>
            <img
              src="link-para-avatar-infojr.png"
              alt="InfoJr"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          </Avatar>
          <ChatDetails>
            <Name>InfoJr. <Badge type="duvida">Dúvida</Badge></Name>
            <LastMessage>Tem como você reiniciar o comput...</LastMessage>
          </ChatDetails>
        </ChatItem>
      </ChatListContainer>
    </Container>
    <Navbar/>
    </>
  );
};

export default ChatList;
