import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewContainer = styled.div`
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

const ReviewCards = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const ReviewCard = styled.div`
  background: ${props => props.bgColor || '#f8f9fa'};
  border-radius: 8px;
  padding: 20px;
  min-width: 250px;
  margin-right: 15px;
  flex-shrink: 0;
  position: relative;
  
  &:last-child {
    margin-right: 0;
  }
`;

const QuoteIcon = styled.div`
  color: rgba(0,0,0,0.1);
  font-size: 1.8rem;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ReviewContent = styled.p`
  margin: 0 0 15px 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #444;
  position: relative;
  z-index: 1;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewerImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  margin-right: 10px;
`;

const ReviewerDetails = styled.div``;

const ReviewerName = styled.p`
  margin: 0 0 3px 0;
  font-weight: bold;
  font-size: 0.9rem;
`;

const ReviewerRating = styled.div`
  display: flex;
  color: #FFD700;
  font-size: 0.8rem;
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

const Reviews = () => {
  // 评价数据
  const reviews = [
    {
      id: 1,
      content: '医生态度非常好，耐心解答我的问题，为我的猫咪制定了合理的治疗方案，很满意！',
      name: '王先生',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      bgColor: '#E3F2FD'
    },
    {
      id: 2,
      content: '预约系统很方便，不用排队等待，医院环境也很干净。医生的治疗很有效，推荐！',
      name: '李女士',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      bgColor: '#FFF3E0'
    },
    {
      id: 3,
      content: '价格合理，服务周到，我家的狗狗很喜欢这里。医生的专业知识很丰富，值得信赖。',
      name: '张先生',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4,
      bgColor: '#E8F5E9'
    },
    {
      id: 4,
      content: '专业的医疗团队，设备先进，提供全面的宠物健康服务。医护人员都很有爱心！',
      name: '刘女士',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 5,
      bgColor: '#E0F7FA'
    }
  ];

  // 生成评分星星
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    return stars;
  };

  return (
    <ReviewContainer>
      <SectionTitle>客户评价</SectionTitle>
      
      <ReviewCards>
        {reviews.map(review => (
          <ReviewCard key={review.id} bgColor={review.bgColor}>
            <QuoteIcon>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </QuoteIcon>
            <ReviewContent>{review.content}</ReviewContent>
            <ReviewerInfo>
              <ReviewerImage image={review.image} />
              <ReviewerDetails>
                <ReviewerName>{review.name}</ReviewerName>
                <ReviewerRating>
                  {renderStars(review.rating)}
                </ReviewerRating>
              </ReviewerDetails>
            </ReviewerInfo>
          </ReviewCard>
        ))}
      </ReviewCards>
      
      <ViewAllButton>查看所有评价</ViewAllButton>
    </ReviewContainer>
  );
};

export default Reviews;
