import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #4A90E2;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const DoctorCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const DoctorImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin-right: 20px;
  flex-shrink: 0;
`;

const DoctorInfo = styled.div`
  flex: 1;
`;

const DoctorName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 1.1rem;
`;

const DoctorTitle = styled.p`
  margin: 0 0 5px 0;
  color: #4A90E2;
  font-size: 0.9rem;
`;

const DoctorRating = styled.div`
  color: #FFD700;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const DoctorSpecialty = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
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

const DoctorList = () => {
  // 医生数据
  const doctors = [
    {
      id: 1,
      name: '王医生',
      title: '主任医师',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 5,
      specialty: '擅长小动物内科疾病、外科手术'
    },
    {
      id: 2,
      name: '李医生',
      title: '副主任医师',
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.5,
      specialty: '擅长宠物皮肤病、寄生虫病的诊断与治疗'
    },
    {
      id: 3,
      name: '张医生',
      title: '主治医师',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.5,
      specialty: '擅长宠物口腔疾病、营养调理'
    }
  ];

  // 根据评分生成星星
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} />);
    }
    
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalfAlt} />);
    }
    
    return stars;
  };

  return (
    <DoctorContainer>
      <SectionTitle>专业医师团队</SectionTitle>
      
      {doctors.map(doctor => (
        <DoctorCard key={doctor.id}>
          <DoctorImage image={doctor.image} />
          <DoctorInfo>
            <DoctorName>{doctor.name}</DoctorName>
            <DoctorTitle>{doctor.title}</DoctorTitle>
            <DoctorRating>
              {renderRating(doctor.rating)}
            </DoctorRating>
            <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
          </DoctorInfo>
        </DoctorCard>
      ))}
      
      <ViewAllButton>查看全部医生</ViewAllButton>
    </DoctorContainer>
  );
};

export default DoctorList;
