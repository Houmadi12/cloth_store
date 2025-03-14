"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import FilterProducts from "@/components/FilterProducts";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/Products"; // Gardons uniquement le type
import Link from "next/link";

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 0 12px 0 50px;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  color: #666;
`;

const BreadcrumbLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 4px;
`;

const Layout = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  display: flex;
  padding-top: 130px;

  @media (min-width: 768px) {
    width: 240px;
  }
`;

const MainContent = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const SidebarTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  display: flex;
  gap: 5%;
`;

const SearchInput = styled.input`
  width: 30%;
  padding: 8px;
  text-align: end;
  font-size: 24px;
  padding-right: 2%;
  background-color: #d9d9d9;
  border: 1px solid #e0e0e0;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #a0a0a0;
    box-shadow: 0 0 0 1px #a0a0a0;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SearchIconContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
  color: #666;

  @media (max-width: 768px) {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const CategoryButton = styled.button`
  padding: 4px;
  text-align: center;
  border: 1px solid #d0d0d0;
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const ListProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Header = styled.div``;

const ProductCardLink = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  color: #666;
  text-align: center;
  padding: 40px 0;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  color: #e74c3c;
  text-align: center;
  padding: 40px 0;
`;

const ProductsFilter: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Catégories disponibles
  const categories = [
    { id: "new", label: "NEW" },
    { id: "shirts", label: "SHIRTS" },
    { id: "polo-shirts", label: "POLO SHIRTS" },
    { id: "shorts", label: "SHORTS" },
    { id: "suits", label: "SUITS" },
    { id: "best-sellers", label: "BEST SELLERS" },
    { id: "t-shirts", label: "T-SHIRTS" },
    { id: "jeans", label: "JEANS" },
    { id: "jackets", label: "JACKETS" },
    { id: "coats", label: "COATS" },
  ];

  // Récupérer les produits depuis l'API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrer les produits en fonction de la recherche et de la catégorie
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

  // Gérer le clic sur une catégorie
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <Container>
      <Layout>
        <Sidebar>
          <SidebarTitle>Filters</SidebarTitle>
          <FilterProducts />
        </Sidebar>

        <MainContent>
          <Header>
            <Breadcrumb>
              <Link href="/" passHref legacyBehavior>
                <BreadcrumbLink>Home</BreadcrumbLink>
              </Link>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <span>Products</span>
            </Breadcrumb>
            <Title>PRODUCTS</Title>

            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
              />
              <SearchIconContainer>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </SearchIconContainer>

              <CategoryGrid>
                {categories.map((category) => (
                  <CategoryButton 
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    style={{
                      backgroundColor: selectedCategory === category.id ? '#f0f0f0' : 'transparent',
                      borderColor: selectedCategory === category.id ? '#a0a0a0' : '#d0d0d0'
                    }}
                  >
                    {category.label}
                  </CategoryButton>
                ))}
              </CategoryGrid>
            </SearchContainer>
          </Header>

          {loading ? (
            <LoadingMessage>Loading products...</LoadingMessage>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <ListProducts>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product: Product, index) => (
                  <Link
                    href={`/products/detailProducts?id=${product.id}`}
                    key={product.id}
                    passHref
                    legacyBehavior
                  >
                    <ProductCardLink>
                      <ProductCard
                        key={product.id || index}
                        imageSrc={product.image}
                        category={product.category}
                        colorCount={product.colors || product.Colors || 0}
                        title={product.name}
                        price={product.price}
                        quantity={1}
                        onUpdateQuantity={() => {}}
                        onRemove={() => {}}
                      />
                    </ProductCardLink>
                  </Link>
                ))
              ) : (
                <div>No products found matching your criteria.</div>
              )}
            </ListProducts>
          )}
        </MainContent>
      </Layout>
    </Container>
  );
};

export default ProductsFilter;