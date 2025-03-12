"use client"

import Link from "next/link"
import React, { useState } from "react"
import styled from "styled-components"

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: 80px auto 0 auto;
  background-color: #f9f9f9;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 130px auto 0 auto;
  }
`

const ImageGalleryContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 60%;
    margin-bottom: 0;
  }
`

const MainImageContainer = styled.div`
  flex: 1;
  background-color: #f0f1f5;
  border-radius: 2px;
  width: 100%;
  max-width: 350px;
  height: 350px;

  @media (min-width: 768px) {
    height: 400px;
  }
`

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const ThumbnailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 15px;
  overflow-x: auto;
  width: 100%;
  max-width: 350px;
  padding-bottom: 5px;

  @media (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    margin-left: 10px;
    width: auto;
    overflow-x: visible;
  }
`

const ThumbnailButton = styled.button`
  min-width: 60px;
  height: 60px;
  flex-shrink: 0;
  padding: 0;
  border: 1px solid ${(props) => (props.active ? "#000" : "#ddd")};
  background: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2px;
  position: relative;
  
  @media (min-width: 768px) {
    width: 70px;
    height: 63px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: ${(props) => (props.active ? 0 : 0.6)};
    transition: opacity 0.2s ease;
  }
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ProductInfoContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 2px;
  padding: 15px;

  @media (min-width: 768px) {
    width: 40%;
    padding: 20px;
  }
`

const ProductTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 10px 0;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin: 0 0 15px 0;
  }
`

const ProductPrice = styled.div`
  font-size: 1rem;
  margin-bottom: 5px;
`

const ProductTaxInfo = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`

const ProductDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`

const SectionTitle = styled.div`
  font-size: 0.9rem;
  margin-bottom: 10px;
`

const ColorOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`

const ColorOption = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.selected ? "#000" : "#ddd")};
  background-color: ${(props) => props.color};
  cursor: pointer;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`

const SizeOption = styled.button`
  min-width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.selected ? "#000" : "#ddd")};
  background-color: white;
  cursor: pointer;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    min-width: 40px;
    height: 40px;
  }
`

const SizeGuideLink = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 20px;
  gap: 10px;
  flex-wrap: wrap;
  
  a {
    text-decoration: underline;
    color: #000;
  }

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }
`

const AddToCartButton = styled.button`
  width: 100%;
  background-color: #e5e5e5;
  border: none;
  padding: 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (min-width: 768px) {
    padding: 15px;
  }

  &:hover {
    background-color: #d5d5d5;
  }
`

const ProductDetailPage = () => {
    const [selectedColor, setSelectedColor] = useState("black")
    const [selectedSize, setSelectedSize] = useState("M")
    const [selectedImage, setSelectedImage] = useState(0)

    // Images de produit en utilisant picsum.photos
    const images = [
        "https://picsum.photos/id/1/350/400", // Image principale
        "https://picsum.photos/id/20/350/400", // Vue arrière
        "https://picsum.photos/id/30/350/400", // Vue latérale
        "https://picsum.photos/id/40/350/400", // Détail
        "https://picsum.photos/id/50/350/400", // Variante orange
        "https://picsum.photos/id/60/350/400", // Vue détaillée
    ]

    // Options de couleur
    const colors = [
        { name: "light-gray", code: "#e0e0e0" },
        { name: "gray", code: "#a0a0a0" },
        { name: "black", code: "#000000" },
        { name: "mint", code: "#a8e6cf" },
        { name: "white", code: "#ffffff" },
        { name: "lavender", code: "#b5b3ff" },
    ]

    // Tailles disponibles
    const sizes = ["XS", "S", "M", "L", "XL", "2X"]

    const handleAddToCart = () => {
        window.location.href = '/products/checkoutPage';
    }

    return (
        <ProductContainer>
            <ImageGalleryContainer>
                <MainImageContainer>
                    <MainImage src={images[selectedImage]} alt="Abstract Print Shirt" />
                </MainImageContainer>

                <ThumbnailsContainer>
                    {images.map((image, index) => (
                        <ThumbnailButton
                            key={index}
                            active={selectedImage === index}
                            onClick={() => setSelectedImage(index)}
                        >
                            <ThumbnailImage src={image} alt={`Thumbnail ${index + 1}`} />
                        </ThumbnailButton>
                    ))}
                </ThumbnailsContainer>
            </ImageGalleryContainer>

            <ProductInfoContainer>
                <ProductTitle>ABSTRACT PRINT SHIRT</ProductTitle>
                <ProductPrice>$99</ProductPrice>
                <ProductTaxInfo>MRP incl. of all taxes</ProductTaxInfo>

                <ProductDescription>
                    Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.
                </ProductDescription>

                <SectionTitle>Color</SectionTitle>
                <ColorOptions>
                    {colors.map((color) => (
                        <ColorOption
                            key={color.name}
                            color={color.code}
                            selected={selectedColor === color.name}
                            onClick={() => setSelectedColor(color.name)}
                        />
                    ))}
                </ColorOptions>

                <SectionTitle>Size</SectionTitle>
                <SizeOptions>
                    {sizes.map((size) => (
                        <SizeOption
                            key={size}
                            selected={selectedSize === size}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </SizeOption>
                    ))}
                </SizeOptions>

                <SizeGuideLink>
                    <span>FIND YOUR SIZE</span> | <a href="#">MEASUREMENT GUIDE</a>
                </SizeGuideLink>

                <AddToCartButton onClick={handleAddToCart}>  ADD </AddToCartButton>
            </ProductInfoContainer>
        </ProductContainer>
    )
}

export default ProductDetailPage