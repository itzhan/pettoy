import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ProductImageSection = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  
  @media (min-width: 768px) {
    height: 400px;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  padding: 15px;
  gap: 10px;
  justify-content: center;
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid ${props => props.isActive ? '#f0834c' : 'transparent'};
`;

const ProductDetails = styled.div`
  flex: 1;
  padding: 30px;
  
  @media (max-width: 767px) {
    padding-top: 10px;
  }
`;

const ProductCategory = styled.div`
  color: #f0834c;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 5px;
`;

const ProductTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 15px 0;
  color: #333;
`;

const ProductCode = styled.div`
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  margin: 30px 0 15px 0;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  color: #f0834c;
  margin-right: 10px;
  margin-top: 2px;
`;

const FeatureText = styled.span`
  color: #555;
  line-height: 1.4;
`;

const SpecificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const SpecItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px 15px;
`;

const SpecLabel = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 3px;
`;

const SpecValue = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #f0834c;
  color: white;
  border: none;
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: #f0834c;
  border: 2px solid #f0834c;
`;

const ProductModal = ({ isOpen, onClose, product }) => {
  // 声明state - 在条件语句之前
  const [selectedImage, setSelectedImage] = React.useState(0);
  
  // If product is not defined, don't render
  if (!product) return null;
  
  // Sample multiple product images
  const productImages = [
    product.image,
    require("../../assets/001.jpg"),
    require("../../assets/002.jpg"),
  ];
  
  const specifications = [
    { label: "Material", value: "Non-toxic rubber & polyester" },
    { label: "Dimensions", value: "15 x 10 x 5 cm" },
    { label: "Weight", value: "200g" },
    { label: "Color Options", value: "Blue, Red, Green" },
    { label: "Age Range", value: "All ages" },
    { label: "Pet Size", value: "Small to Medium" }
  ];
  
  const features = [
    "Durable construction withstands heavy chewing and play",
    "Made with pet-safe, non-toxic materials",
    "Easy to clean - simply rinse with warm water",
    "Designed for interactive play between pets and owners",
    "Helps reduce anxiety and boredom in pets",
    "Available in multiple size and color options"
  ];
  
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        
        <ProductImageSection>
          <MainImage image={productImages[selectedImage]} />
          <ThumbnailContainer>
            {productImages.map((image, index) => (
              <Thumbnail 
                key={index} 
                image={image} 
                isActive={selectedImage === index}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </ThumbnailContainer>
        </ProductImageSection>
        
        <ProductDetails>
          <ProductCategory>{product.category === 'dogs' ? 'Dog Toys' : 'Cat Toys'}</ProductCategory>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductCode>SKU: PTW-{product.id.toString().padStart(4, '0')}</ProductCode>
          
          <ProductDescription>
            {product.description} Our premium quality pet toys are designed with your furry friends in mind,
            providing hours of fun while also promoting healthy play and exercise. Each toy is thoroughly
            tested to meet the highest safety standards.
          </ProductDescription>
          
          <SectionTitle>Key Features</SectionTitle>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon icon={faCheckCircle} />
                <FeatureText>{feature}</FeatureText>
              </FeatureItem>
            ))}
          </FeatureList>
          
          <SectionTitle>Product Specifications</SectionTitle>
          <SpecificationsGrid>
            {specifications.map((spec, index) => (
              <SpecItem key={index}>
                <SpecLabel>{spec.label}</SpecLabel>
                <SpecValue>{spec.value}</SpecValue>
              </SpecItem>
            ))}
          </SpecificationsGrid>
        </ProductDetails>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductModal;
