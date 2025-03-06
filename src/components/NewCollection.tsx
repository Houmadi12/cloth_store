"use client"
import React, { useState } from "react"
import NewCollectionTitle from "./NewCollectionTitle"
import ProductImage from "./ProductImg"
import ShopButton from "./ButtonShop"
import CarouselNavigation from "./NavigationCarous"
import { 
  HeroContainer,
  LeftSection,
  CenterSection, 
  RightSection,
  NavigationWrapper,
  Pagination
} from '../styles/NewCollection';

// Sample product data
const products = [
  {
    id: 1,
    image: "/images/img1.jpeg",
    alt: "Model wearing white outfit with tan boots",
  },
  {
    id: 2,
    image: "/images/img2.jpeg",
    alt: "Model wearing black t-shirt with white design",
  },
  // Add more products as needed
]

export default function NewCollectionHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  return (
    <HeroContainer>
      <LeftSection>
        <NewCollectionTitle />

        <Pagination>
          <ShopButton />
          <NavigationWrapper>
            <CarouselNavigation onPrevious={handlePrevious} onNext={handleNext} />
          </NavigationWrapper>
        </Pagination>
      </LeftSection>

      <CenterSection>
        <ProductImage src={products[currentIndex].image} alt={products[currentIndex].alt} />
      </CenterSection>

      <RightSection>
        <ProductImage src={products[currentIndex+1].image} alt={products[currentIndex].alt} />
      </RightSection>

    </HeroContainer>
  )
}