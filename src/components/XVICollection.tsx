"use client"
import Image from "next/image"
import { products1 } from "../data/Products"
import {
  PageContainer,
  Header,
  Logo,
  NavContainer,
  FilterNav,
  FilterButton,
  SortContainer,
  ProductGrid,
  ProductCard,
  ProductImageContainer,
  SaleTag,
  ProductInfo,
  ProductCategory,
  ProductName,
  ProductPrice,
  ShowMoreButton,
  ChevronDown
} from "../styles/XVICollection"

export default function CollectionsPage() {
  return (
    <PageContainer>
      <Header>
        <Logo>
          XIV<br />
          COLLECTIONS<br />
          23-24
        </Logo>
      </Header>

      <NavContainer>
        <FilterNav>
          <FilterButton>ALL</FilterButton>
          <FilterButton>Men</FilterButton>
          <FilterButton>Women</FilterButton>
          <FilterButton>KID</FilterButton>
        </FilterNav>

        <SortContainer>
          <div>Filter(s+)</div>
          <div>Sort(s-)
            <div>Less to more</div>
            <div>More to Less</div>
          </div>
        </SortContainer>
      </NavContainer>

      <ProductGrid>
        {products1.map((product) => (
          <ProductCard key={product.id}>
            <ProductImageContainer>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
              />
              {/* {product.onSale && (
                <SaleTag>{product.salePrice}</SaleTag>
              )} */}
            </ProductImageContainer>

            <ProductInfo>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>

      <ShowMoreButton>
        More
        <ChevronDown />
      </ShowMoreButton>
    </PageContainer>
  );
}