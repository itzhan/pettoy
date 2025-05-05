import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerContainer = styled.div`
  margin-bottom: 20px;
`;

const BannerImage = styled.div`
  height: 180px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
`;

const BannerTitle = styled.h3`
  margin: 0 0 5px 0;
  font-size: 1.5rem;
`;

const BannerDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  max-width: 80%;
`;

const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Spring Pet Health Check',
    description: '20% discount until the end of May'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Pet SPA Care',
    description: 'Professional care services for your beloved pets'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'New Customer Special',
    description: 'Free pet bath with your first visit'
  }
];

const Banner = () => {
  return (
    <BannerContainer>
      <Carousel 
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
        emulateTouch={true}
      >
        {banners.map(banner => (
          <BannerImage key={banner.id} image={banner.image}>
            <BannerTitle>{banner.title}</BannerTitle>
            <BannerDescription>{banner.description}</BannerDescription>
          </BannerImage>
        ))}
      </Carousel>
    </BannerContainer>
  );
};

export default Banner;
