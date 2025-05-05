import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 600px;
  background-image: url('https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  padding: 0 5%;

  @media (max-width: 768px) {
    height: 400px;
    text-align: center;
    justify-content: center;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin: 0 0 20px 0;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 0 0 30px 0;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  background-color: #f0834c;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: #e67430;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle>High-Quality Pet Toys for Every Furry Friend</HeroTitle>
        <HeroSubtitle>
          We're dedicated to creating innovative, safe, and durable toys that bring joy to pets around the world.
          Our products are designed with both pets and their owners in mind.
        </HeroSubtitle>
        <HeroButton href="#products">Explore Our Products</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
