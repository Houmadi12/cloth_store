"use client"
import Image from "next/image"
import { BiChevronLeft, BiChevronRight, BiPlus } from "react-icons/bi"
import { products } from "../data/Products"
import {
  SectionContainer,
  SectionHeader,
  Title,
  CountBadge,
  SeeAllLink,
  ProductGrid,
  ProductCard,
  ProductImageContainer,
  AddButton,
  ProductInfo,
  ProductCategory,
  ProductName,
  ProductPrice,
  ColorOptions,
  ColorVariant,
  NavigationControls,
  FlexRow,
  FlexRowBetween,
  NavButton
} from "../styles/NewThisWeek"

export default function NewThisWeek() {
  return (
    <SectionContainer>
      <SectionHeader>
        <Title>
          NEW <br/>
          THIS WEEK
          <CountBadge>(50)</CountBadge>
        </Title>

        <SeeAllLink href="/collections/new">See All</SeeAllLink>
      </SectionHeader>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImageContainer>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                sizes="(max-width: 100%) 100vw, (max-width: 100%) 33vw, 25vw"
                style={{ 
                    objectFit: "contain"}}
              />
              <AddButton aria-label="Add to cart">
                <BiPlus size={24} />
              </AddButton>
            </ProductImageContainer>

            <ProductInfo>
              <FlexRow>
                <ProductCategory>{product.category}</ProductCategory>
                {product.variants && (
                  <ColorOptions>
                    <ColorVariant>{product.variants}</ColorVariant>
                  </ColorOptions>
                )}
              </FlexRow>

              <FlexRowBetween>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </FlexRowBetween>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>

      <NavigationControls>
        <NavButton aria-label="Previous page">
          <BiChevronLeft size={20} />
        </NavButton>
        <NavButton aria-label="Next page">
          <BiChevronRight size={20} />
        </NavButton>
      </NavigationControls>
    </SectionContainer>
  )
}