// Navbar.tsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #FFF;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
  color: #318069;
  text-align: center;
  font-size: 14px;

  &:hover {
    cursor: pointer; 
  }

  & img {
    display: block;
    margin: 0 auto 5px;
    height: 24px;
  }
`;
const Navbar = () => {
 const navigate = useNavigate();
  return (
    <NavbarContainer>
      <NavItem onClick={() => navigate('/')}>
        <img src="./assets/home.svg" alt="Início" />
        Início
      </NavItem>
      <NavItem onClick={() => navigate('/mensagens')}>
        <img src="./assets/chat.svg" alt="Mensagens" />
        Mensagens
      </NavItem>
      <NavItem onClick={() => navigate('/cursos')}>
        <img src="./assets/contacts.svg" alt="Cursos" />
        Cursos
      </NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
