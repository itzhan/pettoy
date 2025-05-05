import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faShieldAlt, faGlobe, faBoxOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductModal from './ProductModal';

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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
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
    content: '';
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

const CategorySection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 15px;
`;

const CategoryButton = styled.button`
  background: ${props => props.active ? '#f0834c' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 2px solid ${props => props.active ? '#f0834c' : '#eee'};
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: #f0834c;
    color: ${props => props.active ? 'white' : '#f0834c'};
  }
`;

const CatalogButton = styled.a`
  display: block;
  text-align: center;
  margin-top: 50px;
  color: #f0834c;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 12px 30px;
  border: 2px solid #f0834c;
  border-radius: 30px;
  transition: all 0.3s;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  
  &:hover {
    background: #f0834c;
    color: white;
  }
`;

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Open product detail modal
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  
  // Close product detail modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  // 模拟产品数据
  const products = [
    {
      id: 1,
      name: "Interactive Treat Puzzle",
      description: "Engage your dog's mental abilities with this challenging treat puzzle toy. Perfect for smart breeds.",
      image: require("../../assets/001.jpg"),
      features: ["Interactive", "Durable", "Non-Toxic"],
      category: "dogs"
    },
    {
      id: 2,
      name: "Feather Wand Teaser",
      description: "Keep your cat entertained for hours with this colorful feather wand. Promotes exercise and play.",
      image: require("../../assets/002.jpg"),
      features: ["Interactive", "Natural Materials", "Replaceable Parts"],
      category: "cats"
    },
    {
      id: 3,
      name: "Rubber Chew Ball",
      description: "Durable rubber ball with unique texture to clean teeth and massage gums while your dog plays.",
      image: require("../../assets/003.jpg"),
      features: ["Durable", "Dental Care", "Bouncy"],
      category: "dogs"
    }
  ];

  // 特性图标映射
  const featureIcons = {
    "Interactive": faPaw,
    "Durable": faShieldAlt,
    "Non-Toxic": faShieldAlt,
    "Natural Materials": faGlobe,
    "Replaceable Parts": faBoxOpen,
    "Dental Care": faShieldAlt,
    "Bouncy": faPaw,
    "Catnip Filled": faPaw,
    "Realistic": faPaw,
    "Soft Material": faPaw,
    "Squeaky": faPaw,
    "Machine Washable": faShieldAlt,
    "Multiple Textures": faPaw,
    "Electronic": faPaw,
    "Automatic Timer": faPaw,
    "Battery Included": faBoxOpen
  };

  return (
    <ProductSection id="products">
      <SectionContainer>
        <SectionTitle>Our Product Range</SectionTitle>
        <ProductGrid>
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              onClick={() => handleOpenModal(product)}
            >
              <ProductImage image={product.image}>
                <ViewIcon icon={faSearch} />
              </ProductImage>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductFeatures>
                  {product.features.map((feature, index) => (
                    <FeatureTag key={index}>
                      <FeatureIcon icon={featureIcons[feature] || faPaw} />
                      {feature}
                    </FeatureTag>
                  ))}
                </ProductFeatures>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
        
        <CatalogButton href="#contact">Download Full Catalog</CatalogButton>
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
