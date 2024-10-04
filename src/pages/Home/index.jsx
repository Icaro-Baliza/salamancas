// MuralPage.tsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const CourseList = styled.div`
  flex: 1;
  padding: 10px;
`;

const CourseItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
`;

const CourseImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 15px;
`;

const CourseContent = styled.div`
  flex: 1;
`;

const CourseTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  color: #000;
`;

const CourseDateLocation = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0;
`;



const MuralPage = () => {
  const navigate = useNavigate();  // Hook de navegação

  return (
    <PageContainer>
      <Header>
        <BackIcon onClick={() => navigate(-1)}>←</BackIcon> {/* Navegar para a página anterior */}
        Mural
      </Header>

      <CourseList>
        <CourseItem>
          <CourseImage src="./iniciacao.svg" alt="Curso de Iniciação à Informática" />
          <CourseContent>
            <CourseTitle>Curso de iniciação à informática</CourseTitle>
            <CourseDateLocation>Segunda - 28/10 - Salvador, Bahia</CourseDateLocation>
          </CourseContent>
        </CourseItem>

        <CourseItem>
          <CourseImage src="./excel.svg" alt="Excel Avançado" />
          <CourseContent>
            <CourseTitle>Excel avançado</CourseTitle>
            <CourseDateLocation>Segunda - 28/10 - Salvador, Bahia</CourseDateLocation>
          </CourseContent>
        </CourseItem>
      </CourseList>

      <Navbar/>
    </PageContainer>
  );
};

export default MuralPage;
