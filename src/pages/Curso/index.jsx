// TutorialPage.tsx
import React from "react";
import styled from "styled-components";

import Navbar from "../../components/NavBar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

const Header = styled.div`
  background-color: #318069;
  color: white;
  padding: 15px;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const BackIcon = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const TutorialList = styled.div`
  flex: 1;
  padding: 10px;
`;

const TutorialItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
`;

const TutorialImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 15px;
`;

const TutorialContent = styled.div`
  flex: 1;
`;

const TutorialTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  color: #000;
`;

const TutorialDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0;
`;

const TimeLabel = styled.div`
  font-size: 12px;
  color: #888;
  align-self: flex-start;
`;



const Curso = () => {
  return (
    <PageContainer>
      <Header>
        <BackIcon>←</BackIcon>
        Tutoriais
      </Header>

      <TutorialList>
        <TutorialItem>
          <TutorialImage src="./office.svg" alt="Tutorial 1" />
          <TutorialContent>
            <TutorialTitle>Como baixar o pacote office completo</TutorialTitle>
            <TutorialDescription>Word, Excel e Powerpoint</TutorialDescription>
          </TutorialContent>
          <TimeLabel>34 min.</TimeLabel>
        </TutorialItem>

        <TutorialItem>
          <TutorialImage src="./aplicativo.svg" alt="Tutorial 2" />
          <TutorialContent>
            <TutorialTitle>Como personalizar o celular</TutorialTitle>
            <TutorialDescription>Altere para a foto de sua preferência</TutorialDescription>
          </TutorialContent>
          <TimeLabel>34 min.</TimeLabel>
        </TutorialItem>

        <TutorialItem>
          <TutorialImage src="./aplicativo.svg" alt="Tutorial 3" />
          <TutorialContent>
            <TutorialTitle>Como excluir um aplicativo de forma fácil</TutorialTitle>
            <TutorialDescription>Altere para a foto de sua preferência</TutorialDescription>
          </TutorialContent>
          <TimeLabel>34 min.</TimeLabel>
        </TutorialItem>
      </TutorialList>

      <Navbar/>
    </PageContainer>
  );
};

export default Curso;
