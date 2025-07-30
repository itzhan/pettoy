import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background: #222;
  color: #fff;
  padding: 60px 0 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  color: #f0834c;
  margin-right: 10px;
`;

const LogoText = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
`;

const FooterAbout = styled.p`
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FooterTitle = styled.h4`
  color: #fff;
  font-size: 1.2rem;
  margin: 0 0 20px 0;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 10px;
  
  a {
    color: #aaa;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: #f0834c;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #aaa;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #f0834c;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 20px 0;
  border-top: 1px solid #444;
  display: flex;
  justify-content: space-between;
  color: #777;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
`;

// Language selector removed

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <LogoIcon icon={faPaw} />
            <LogoText>China PetToy</LogoText>
          </FooterLogo>
          <FooterAbout>
            We're a leading manufacturer of high-quality pet toys for the global market. 
            All our products are designed with your pets' joy, safety, and well-being in mind.
          </FooterAbout>
          <ContactItem>
            <ContactIcon icon={faEnvelope} />
            Gracezhao1177@outlook.com
            18917879302@163.com
          </ContactItem>
          <ContactItem>
            <ContactIcon icon={faPhone} />
            +86 151 9022 2399
          </ContactItem>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#home">Home</a></FooterLink>
            <FooterLink><a href="#products">Products</a></FooterLink>
            <FooterLink><a href="#about">About Us</a></FooterLink>
            <FooterLink><a href="#contact">Contact</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Products</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#products">For Dogs</a></FooterLink>
            <FooterLink><a href="#products">For Cats</a></FooterLink>
            <FooterLink><a href="#products">Bestsellers</a></FooterLink>
            <FooterLink><a href="#products">New Arrivals</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Business</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#contact">Become a Distributor</a></FooterLink>
            <FooterLink><a href="#contact">Bulk Orders</a></FooterLink>
            <FooterLink><a href="#contact">Custom Products</a></FooterLink>
            <FooterLink><a href="#contact">Download Catalog</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>© {new Date().getFullYear()} China PetToy. All Rights Reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
