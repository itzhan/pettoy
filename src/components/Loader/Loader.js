import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  opacity: ${props => props.isLoading ? 1 : 0};
  visibility: ${props => props.isLoading ? 'visible' : 'hidden'};
  transition: opacity 0.6s ease, visibility 0.6s ease;
  animation: ${props => props.fadeOut ? fadeOut : 'none'} 0.8s ease forwards;
`;

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoaderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color || '#f0834c'};
  border-radius: 50%;
  margin: 0 8px;
  animation: ${bounce} 0.7s infinite ${props => props.delay || '0s'} ease-in-out;
`;

const LoaderText = styled.div`
  margin-top: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const LoaderSubtext = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #666;
`;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 模拟加载时间
    const loadingTimer = setTimeout(() => {
      setFadeOut(true);
      
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 1500);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <LoaderOverlay isLoading={isLoading} fadeOut={fadeOut}>
      <LoaderContent>
        <LoaderIcon>
          <LoaderDot color="#f0834c" delay="0s" />
          <LoaderDot color="#f0834c" delay="0.2s" />
          <LoaderDot color="#f0834c" delay="0.4s" />
        </LoaderIcon>
        <LoaderText>China PetToy</LoaderText>
        <LoaderSubtext>Loading amazing pet toys...</LoaderSubtext>
      </LoaderContent>
    </LoaderOverlay>
  );
};

export default Loader;
