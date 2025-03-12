import React, { useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { BiRefresh } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

// Styled Components
const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f3f3f3;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  height: 320px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SideControls = styled.div`
  position: absolute;
  right: 8px;
  top: 90px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px; 
`;

const SizeIndicator = styled.div`
  width: 28px; 
  height: 28px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid rgb(56, 53, 53);
  font-weight: 500;
  margin-bottom: 6px; 
`;

const ColorBox = styled.div`
  width: 28px; 
  height: 28px; 
  background-color: black;
  border: 1px solid rgb(56, 53, 53);
`;

const ControlButton = styled.button`
  width: 28px; 
  height: 28px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  border: 1px solid rgb(56, 53, 53);
  cursor: pointer;
`;

const QuantityDisplay = styled.div`
  width: 28px; 
  height: 28px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  border: 1px solid #f3f3f3;
`;

const ProductDetails = styled.div`
  padding: 10px; 
  background-color: #f2f3f8;
`;

const ProductType = styled.div`
  color: #6b7280;
  font-size: 13px; 
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px; 
`;

const ProductName = styled.div`
  font-weight: 500;
  font-size: 15px; 
`;

const ProductPrice = styled.div`
  font-weight: 700;
  font-size: 15px; 
`;

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  return (
    <CardContainer>
      <ImageContainer>
        <ProductImage 
          src="/images/img13.jpeg" 
          alt="Cotton T Shirt" 
        />
        <CloseButton>
          <IoClose size={18} color="#333" />
        </CloseButton>
      </ImageContainer>
      
      <SideControls>
        <SizeIndicator>L</SizeIndicator>
        <ColorBox />
        <ControlButton onClick={increaseQuantity}>
          <IoMdAdd size={14} />
        </ControlButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <ControlButton onClick={decreaseQuantity}>
          <IoMdRemove size={14} />
        </ControlButton>
        <ControlButton style={{ marginTop: '3px' }}>
          <BiRefresh size={14} />
        </ControlButton>
      </SideControls>
      
      <ProductDetails>
        <ProductType>Cotton T Shirt</ProductType>
        <DetailsRow>
          <ProductName>Full Sleeve Zipper</ProductName>
          <ProductPrice>$99</ProductPrice>
        </DetailsRow>
      </ProductDetails>
    </CardContainer>
  );
};

export default ProductCard;