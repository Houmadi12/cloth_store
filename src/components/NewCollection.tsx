"use client"
import React, { useState } from "react"
import NewCollectionTitle from "./NewCollectionTitle"
import ProductImage from "./ProductImg"
import ShopButton from "./ButtonShop"
import CarouselNavigation from "./NavigationCarous";
import { products2 } from "../data/Products"
import { 
  HeroContainer,
  LeftSection,
  CenterSection, 
  RightSection,
  NavigationWrapper,
  Pagination
} from '../styles/NewCollection';



export default function NewCollectionHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products2.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products2.length - 1 ? 0 : prev + 1))
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
        <ProductImage src={products2[currentIndex].image} alt={products2[currentIndex].alt} />
      </CenterSection>

      <RightSection>
        <ProductImage src={products2[currentIndex+1].image} alt={products2[currentIndex].alt} />
      </RightSection>

    </HeroContainer>
  )
}