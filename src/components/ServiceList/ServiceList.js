import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faCut, faStethoscope, faMedkit, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

const ServiceContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`;

const ServiceTitle = styled.h2`
  color: #4A90E2;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.bgColor || '#f8f9fa'};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: ${props => props.iconColor || '#4A90E2'};
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
`;

const ServiceName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1rem;
  color: #333;
`;

const ServiceDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
`;

const ViewAllButton = styled.button`
  background: transparent;
  border: 2px solid #4A90E2;
  color: #4A90E2;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    background: #4A90E2;
    color: white;
  }
`;

const ServiceList = () => {
  // 服务项目数据
  const services = [
    {
      id: 1,
      name: '宠物疫苗',
      description: '定期疫苗接种，保护宠物健康',
      icon: faSyringe,
      bgColor: '#E3F2FD',
      iconColor: '#1E88E5'
    },
    {
      id: 2,
      name: '宠物美容',
      description: '专业宠物SPA和美容服务',
      icon: faCut,
      bgColor: '#FFF3E0',
      iconColor: '#FF9800'
    },
    {
      id: 3,
      name: '健康体检',
      description: '全面体检，早发现早治疗',
      icon: faStethoscope,
      bgColor: '#E8F5E9',
      iconColor: '#43A047'
    },
    {
      id: 4,
      name: '疾病治疗',
      description: '各类宠物疾病的专业治疗',
      icon: faMedkit,
      bgColor: '#FFEBEE',
      iconColor: '#E53935'
    },
    {
      id: 5,
      name: '宠物保健',
      description: '维护宠物日常健康的保健服务',
      icon: faShieldAlt,
      bgColor: '#E0F7FA',
      iconColor: '#00ACC1'
    },
    {
      id: 6,
      name: '健康管理',
      description: '长期健康跟踪与管理方案',
      icon: faChartLine,
      bgColor: '#F3E5F5',
      iconColor: '#8E24AA'
    }
  ];

  return (
    <ServiceContainer>
      <ServiceTitle>我们的服务</ServiceTitle>
      <ServicesGrid>
        {services.map(service => (
          <ServiceCard key={service.id} bgColor={service.bgColor}>
            <ServiceIcon iconColor={service.iconColor}>
              <FontAwesomeIcon icon={service.icon} />
            </ServiceIcon>
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
      <ViewAllButton>查看所有服务</ViewAllButton>
    </ServiceContainer>
  );
};

export default ServiceList;
