import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  background-color: #f0834c;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  z-index: 999;
  
  &:hover {
    transform: translateY(-3px);
    background-color: #e67430;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // 监听滚动事件，控制按钮显示/隐藏
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    // 清除事件监听
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  
  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <ScrollButton 
      isVisible={isVisible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </ScrollButton>
  );
};

export default ScrollToTop;
