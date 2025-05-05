import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCertificate, faHandshake, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

const AboutSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #f0834c;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    margin-top: 30px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const AboutContent = styled.div`
  @media (max-width: 768px) {
    order: 0;
  }
`;

const AboutText = styled.p`
  margin-bottom: 25px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #555;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  color: #f0834c;
  font-size: 1.2rem;
  margin-right: 15px;
`;

const FeatureText = styled.span`
  font-size: 1rem;
  color: #333;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
  min-width: 120px;
  margin-bottom: 30px;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #f0834c;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const AboutUs = () => {
  return (
    <AboutSection id="about">
      <SectionContainer>
        <SectionTitle>About China PetToy</SectionTitle>
        
        <AboutGrid>
          <AboutContent>
            <AboutText>
              Founded in 2015, China PetToy has been dedicated to designing and manufacturing
              high-quality pet toys that promote physical activity, mental stimulation, and boundless joy
              for pets around the globe.
            </AboutText>
            <AboutText>
              Our team consists of pet lovers, veterinarians, and product designers who understand
              the unique needs of different pets. We combine innovation with safety to create
              products that both pets and their owners love.
            </AboutText>
            
            <FeatureList>
              <FeatureItem>
                <FeatureIcon icon={faCheckCircle} />
                <FeatureText>All products tested and approved by veterinarians</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon icon={faCertificate} />
                <FeatureText>Made with non-toxic, pet-safe materials</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon icon={faHandshake} />
                <FeatureText>Trusted by pet supply retailers in over 30 countries</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon icon={faGlobeAsia} />
                <FeatureText>Fast and reliable global shipping options</FeatureText>
              </FeatureItem>
            </FeatureList>
          </AboutContent>
          
          <AboutImageWrapper>
            <AboutImage src="https://images.unsplash.com/photo-1604848698030-c434ba08ece1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="China PetToy Factory" />
          </AboutImageWrapper>
        </AboutGrid>
        
        <StatsContainer>
          <StatItem>
            <StatNumber>8+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>200+</StatNumber>
            <StatLabel>Product Varieties</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>30+</StatNumber>
            <StatLabel>Countries Served</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>1M+</StatNumber>
            <StatLabel>Happy Pets</StatLabel>
          </StatItem>
        </StatsContainer>
      </SectionContainer>
    </AboutSection>
  );
};

export default AboutUs;
