import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faShieldAlt,
  faGlobe,
  faBoxOpen,
  faSearch,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ProductModal from "./ProductModal";

const ProductSection = styled.section`
  padding: 80px 0;
  background-color: #fff;
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
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #f0834c;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  margin-top: 40px;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 60px;
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;
  position: relative;
`;

const ProductGrid = styled.div`
  display: flex;
  gap: 20px;
  transition: ${(props) =>
    props.noTransition
      ? "none"
      : "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"};
  transform: translateX(${(props) => props.translateX}px);
  padding: 20px 0;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #f0834c, #ff6b35);
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 10;
  box-shadow: 0 8px 25px rgba(240, 131, 76, 0.3);
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, #ff6b35, #f0834c);
    transform: translateY(-50%) scale(1.15);
    box-shadow: 0 12px 35px rgba(240, 131, 76, 0.4);
  }

  &:active {
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
    box-shadow: 0 4px 15px rgba(240, 131, 76, 0.2);
  }

  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    ${(props) => (props.direction === "left" ? "left: 5px;" : "right: 5px;")}
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 320px;
  min-width: 320px;
  position: relative;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* 默认状态 - 侧边卡片 */
  transform: scale(0.85) translateY(20px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  opacity: 0.7;

  /* 中心聚焦状态 */
  ${(props) =>
    props.isFocused &&
    `
    transform: scale(1) translateY(0);
    box-shadow: 0 20px 40px rgba(240, 131, 76, 0.15);
    opacity: 1;
    z-index: 2;

    &::before {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      background: linear-gradient(135deg, #f0834c, #ff6b35);
      border-radius: 18px;
      z-index: -1;
      opacity: 0.6;
      animation: glow 2s ease-in-out infinite alternate;
    }

    @keyframes glow {
      from {
        box-shadow: 0 0 20px rgba(240, 131, 76, 0.4);
      }
      to {
        box-shadow: 0 0 30px rgba(240, 131, 76, 0.6);
      }
    }
  `}

  &:hover {
    transform: ${(props) =>
      props.isFocused
        ? "scale(1.02) translateY(-5px)"
        : "scale(0.9) translateY(10px)"};
    box-shadow: ${(props) =>
      props.isFocused
        ? "0 25px 50px rgba(240, 131, 76, 0.2)"
        : "0 12px 30px rgba(0, 0, 0, 0.12)"};
  }

  @media (max-width: 768px) {
    flex: 0 0 280px;
    min-width: 280px;

    transform: scale(0.9) translateY(15px);

    ${(props) =>
      props.isFocused &&
      `
      transform: scale(1) translateY(0);
    `}
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  ${ProductCard}:hover &::before,
  ${ProductCard}:hover &::after {
    opacity: 1;
  }
`;

const ViewIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  color: #f0834c;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s;

  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductName = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #333;
`;

const ProductDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ProductFeatures = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const FeatureTag = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #555;
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  font-size: 0.8rem;
  color: #f0834c;
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 8px;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.active ? "#f0834c" : "rgba(240, 131, 76, 0.3)"};

  &:hover {
    background: ${(props) =>
      props.active ? "#f0834c" : "rgba(240, 131, 76, 0.6)"};
    transform: scale(1.2);
  }
`;

const CatalogButton = styled.button`
  display: block;
  text-align: center;
  margin: 50px auto 0;
  color: #f0834c;
  background: transparent;
  border: 2px solid #f0834c;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 12px 30px;
  border-radius: 30px;
  transition: all 0.3s;
  max-width: 250px;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    background: #f0834c;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(240, 131, 76, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(240, 131, 76, 0.2);
  }
`;

const ProductShowcase = () => {
  // 模拟产品数据
  const products = [
    {
      id: 1,
      name: "Interactive Treat Puzzle",
      description:
        "Engage your dog's mental abilities with this challenging treat puzzle toy. Perfect for smart breeds.",
      image: require("../../assets/001.jpg"),
      features: ["Interactive", "Durable", "Non-Toxic"],
      category: "dogs",
    },
    {
      id: 2,
      name: "Feather Wand Teaser",
      description:
        "Keep your cat entertained for hours with this colorful feather wand. Promotes exercise and play.",
      image: require("../../assets/002.jpg"),
      features: ["Interactive", "Natural Materials", "Replaceable Parts"],
      category: "cats",
    },
    {
      id: 3,
      name: "Rubber Chew Ball",
      description:
        "Durable rubber ball with unique texture to clean teeth and massage gums while your dog plays.",
      image: require("../../assets/003.jpg"),
      features: ["Durable", "Dental Care", "Bouncy"],
      category: "dogs",
    },
    {
      id: 4,
      name: "Pet birthday cake",
      description:
        "Hot selling custom eco-friendly puppy birthday plush custom toys",
      image: require("../../assets/004.png"),
      features: ["Eco-friendly", "Customizable", "Party Essential"],
      category: "dogs",
    },
    {
      id: 5,
      name: "Deluxe pet cart",
      description:
        "Fashionable pet cart, foldable, customizable color",
      image: require("../../assets/005.png"),
      features: ["Foldable", "Portable", "Stylish Design"],
      category: "travel",
    },
    {
      id: 6,
      name: "Comfortable pet backpack",
      description:
        "Hot pet portable bag, universal for cats and dogs, with waterproof cushion pet bag",
      image: require("../../assets/006.png"),
      features: ["Waterproof", "Breathable", "Universal Fit"],
      category: "travel",
    },
    {
      id: 7,
      name: "Luxurious and comfortable kennel",
      description:
        "High quality plush pet bed, kennel, removable, cleanable",
      image: require("../../assets/007.png"),
      features: ["Removable Cover", "Plush Material", "Easy Clean"],
      category: "home",
    },
    {
      id: 8,
      name: "Breathable traction rope",
      description:
        "Luxury dog strap, adjustable strap,with air cushion",
      image: require("../../assets/008.png"),
      features: ["Adjustable", "Air Cushioned", "Durable"],
      category: "accessories",
    },
    {
      id: 9,
      name: "Comfortable hemp rope cat climbing frame",
      description:
        "Luxurious, modern, multi-story cat crawler, solid wood frame, with sisal grinding claws",
      image: require("../../assets/009.png"),
      features: ["Sisal Rope", "Solid Wood", "Multi-level"],
      category: "cats",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(4); // Start at index 4 (first real product in center)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [noTransition, setNoTransition] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  // Open product detail modal
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close product detail modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Create infinite loop array by duplicating products
  // We need more clones to ensure smooth infinite scrolling
  const extendedProducts = [
    ...products.slice(-4), // Last 4 products at the beginning
    ...products,
    ...products.slice(0, 4), // First 4 products at the end
  ];

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3500); // Change slide every 3.5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Pause auto play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    // Clear any pending infinite loop transitions when user hovers
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Handle catalog download
  const handleDownloadCatalog = () => {
    const link = document.createElement("a");
    link.href = "/ChinaPeTToy.pdf";
    link.download = "China_PetToy_Catalog.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Carousel navigation functions
  const cardWidth = 340; // 320px card + 20px gap
  const visibleCards = 3; // Number of cards visible at once
  const centerIndex = Math.floor(visibleCards / 2); // Index of center card (1 for 3 cards)
  const cloneCount = 4; // Number of clones on each side

  // Handle infinite loop transitions with improved logic
  useEffect(() => {
    // Clear any existing transition timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    // Set transitioning state
    setIsTransitioning(true);

    // Reset transitioning state after transition completes
    const transitionEndTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    // Handle infinite loop reset only after transition completes
    const handleInfiniteLoop = () => {
      // If we're at the beginning clones, jump to the real end
      if (currentIndex <= cloneCount - 1) {
        setNoTransition(true);
        setCurrentIndex(products.length + cloneCount - 1);
        // Use double requestAnimationFrame for smoother transition
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoTransition(false);
          });
        });
      }
      // If we're at the end clones, jump to the real beginning
      else if (currentIndex >= products.length + cloneCount) {
        setNoTransition(true);
        setCurrentIndex(cloneCount);
        // Use double requestAnimationFrame for smoother transition
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoTransition(false);
          });
        });
      }
    };

    // Only handle infinite loop if we're in clone zones
    if (
      currentIndex <= cloneCount - 1 ||
      currentIndex >= products.length + cloneCount
    ) {
      transitionTimeoutRef.current = setTimeout(handleInfiniteLoop, 820); // Slightly longer than CSS transition
    }

    return () => {
      clearTimeout(transitionEndTimer);
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [currentIndex, products.length, cloneCount]);

  const handlePrevious = () => {
    // Pause auto play temporarily when user interacts
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    // Resume auto play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const handleNext = () => {
    // Pause auto play temporarily when user interacts
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    // Resume auto play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  // Handle indicator click
  const handleIndicatorClick = (index) => {
    setIsAutoPlaying(false); // Pause auto play when user interacts
    setCurrentIndex(index + cloneCount); // Add cloneCount to account for the cloned items at the beginning
    setTimeout(() => setIsAutoPlaying(true), 6000); // Resume after 6 seconds
  };

  // Calculate translateX to center the focused card
  const translateX = -(currentIndex - centerIndex) * cardWidth;

  // Function to determine if a card should be focused (center position)
  const getCardFocusState = (index) => {
    return index === currentIndex;
  };

  // Get the actual product index for indicators
  const getActualProductIndex = () => {
    if (currentIndex < cloneCount) {
      return products.length - (cloneCount - currentIndex);
    }
    if (currentIndex >= products.length + cloneCount) {
      return currentIndex - products.length - cloneCount;
    }
    return currentIndex - cloneCount;
  };

  // 特性图标映射
  const featureIcons = {
    Interactive: faPaw,
    Durable: faShieldAlt,
    "Non-Toxic": faShieldAlt,
    "Natural Materials": faGlobe,
    "Replaceable Parts": faBoxOpen,
    "Dental Care": faShieldAlt,
    Bouncy: faPaw,
    "Catnip Filled": faPaw,
    Realistic: faPaw,
    "Soft Material": faPaw,
    Squeaky: faPaw,
    "Machine Washable": faShieldAlt,
    "Multiple Textures": faPaw,
    Electronic: faPaw,
    "Automatic Timer": faPaw,
    "Battery Included": faBoxOpen,
  };

  return (
    <ProductSection id="products">
      <SectionContainer>
        <SectionTitle>Our Product Range</SectionTitle>
        <CarouselContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavigationButton direction="left" onClick={handlePrevious}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavigationButton>

          <CarouselWrapper ref={carouselRef}>
            <ProductGrid translateX={translateX} noTransition={noTransition}>
              {extendedProducts.map((product, index) => (
                <ProductCard
                  key={`${product.id}-${index}`}
                  isFocused={getCardFocusState(index)}
                  onClick={() => handleOpenModal(product)}
                >
                  <ProductImage image={product.image}>
                    <ViewIcon icon={faSearch} />
                  </ProductImage>
                  <ProductInfo>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>
                      {product.description}
                    </ProductDescription>
                    <ProductFeatures>
                      {product.features.map((feature, featureIndex) => (
                        <FeatureTag key={featureIndex}>
                          <FeatureIcon icon={featureIcons[feature] || faPaw} />
                          {feature}
                        </FeatureTag>
                      ))}
                    </ProductFeatures>
                  </ProductInfo>
                </ProductCard>
              ))}
            </ProductGrid>
          </CarouselWrapper>

          <NavigationButton direction="right" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </NavigationButton>
        </CarouselContainer>

        <IndicatorContainer>
          {products.map((_, index) => (
            <Indicator
              key={index}
              active={index === getActualProductIndex()}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </IndicatorContainer>

        <CatalogButton onClick={handleDownloadCatalog}>
          Download Full Catalog
        </CatalogButton>
      </SectionContainer>

      {/* Product detail modal */}
      <ProductModal
        isOpen={showModal}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </ProductSection>
  );
};

export default ProductShowcase;
