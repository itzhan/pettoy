import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerContainer = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }

  /* Override carousel indicators for mobile */
  .carousel .control-dots {
    bottom: 10px;

    @media (max-width: 480px) {
      bottom: 8px;
    }
  }

  .carousel .control-dots .dot {
    width: 8px;
    height: 8px;
    margin: 0 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 480px) {
      width: 6px;
      height: 6px;
      margin: 0 3px;
    }

    &.selected {
      background: #f0834c;
    }
  }
`;

const BannerImage = styled.div`
  height: 180px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

  @media (max-width: 1024px) {
    height: 160px;
    padding: 18px;
  }

  @media (max-width: 768px) {
    height: 140px;
    padding: 15px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    height: 120px;
    padding: 12px;
    border-radius: 6px;
  }

  @media (max-width: 360px) {
    height: 100px;
    padding: 10px;
  }
`;

const BannerTitle = styled.h3`
  margin: 0 0 5px 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0 0 4px 0;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 0 0 3px 0;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const BannerDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  max-width: 80%;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 85%;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    max-width: 90%;
    line-height: 1.3;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
    max-width: 95%;
  }
`;

const banners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Spring Pet Health Check",
    description: "20% discount until the end of May",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Pet SPA Care",
    description: "Professional care services for your beloved pets",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "New Customer Special",
    description: "Free pet bath with your first visit",
  },
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
        interval={4000} // Slightly faster for mobile
        swipeable={true}
        emulateTouch={true}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        dynamicHeight={false}
        centerMode={false}
        centerSlidePercentage={100}
        showIndicators={true}
      >
        {banners.map((banner) => (
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
