import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  background-color: white;
  color: #333;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #f0834c;
`;

const LogoIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #f0834c;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin-left: 30px;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #f0834c;
  }
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-size: 1.2rem;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

// 语言按钮已移除

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon icon={faPaw} />
        China PetToy
      </Logo>
      <Navigation>
        <NavLinks>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#products">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </NavLinks>
        <NavButton>
          <FontAwesomeIcon icon={faBars} />
        </NavButton>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
