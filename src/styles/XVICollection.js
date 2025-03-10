import styled from "styled-components";

// Page Layout
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

// Header Components
export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.2;
  margin: 0;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Navigation Components
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FilterNav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 576px) {
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
`;

export const FilterButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem 0;
  color: ${props => props.active ? '#000' : '#777'};
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
    opacity: ${props => props.active ? 1 : 0};
  }
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

// Product Grid Components
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    border-color: #aaa;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const SaleTag = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #3162ff;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  z-index: 2;
`;

export const ProductInfo = styled.div`
  padding: 0.75rem 0;
`;

export const ProductCategory = styled.div`
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 0.25rem;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.25rem 0;
`;

export const ProductPrice = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

// Show More Button
export const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  gap: 0.5rem;
`;

export const ChevronDown = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:after {
    content: "";
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #000;
  }
`;