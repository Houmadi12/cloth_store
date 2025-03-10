import React from 'react';
import styled from 'styled-components';

// Styled components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem;
  background-color: #e5e7eb;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  background-color: #e5e7eb;
  padding: 2px;
`;

const ProductImage = styled.img`
  height: 420px;
  width: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 0.75rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const ProductCategory = styled.span`
  color: #4b5563;
  font-size: 0.875rem;
`;

const ColorOptions = styled.div`
  display: flex;
  align-items: center;
`;

const ColorBox = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
`;

const ColorCount = styled.span`
  color: #6b7280;
  font-size: 0.75rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const PriceContainer = styled.div`
  text-align: right;
`;

const Price = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
`;

// Component avec props
const ProductCard = ({ 
  imageSrc = "/api/placeholder/400/480", 
  imageAlt = "Product image",
  category = "", 
  colorCount = 0, 
  title = "", 
  price = 0 
}) => {
  return (
    <Card>
      <ImageContainer>
        <ProductImage 
          src={imageSrc} 
          alt={imageAlt || title} 
        />
      </ImageContainer>
      
      <ContentContainer>
        <InfoRow>
          <ProductCategory>{category}</ProductCategory>
          {colorCount > 0 && (
            <ColorOptions>
              <ColorBox />
              <ColorCount>+{colorCount}</ColorCount>
            </ColorOptions>
          )}
        </InfoRow>
        
        <ProductTitle>{title}</ProductTitle>
        
        <PriceContainer>
          <Price>$ {price}</Price>
        </PriceContainer>
      </ContentContainer>
    </Card>
  );
};

export default ProductCard;