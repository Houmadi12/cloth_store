import styled from "styled-components";
import Link from "next/link";

export const SectionContainer = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  margin-top: 1rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Beatrice Deck Trial';
  text-transform: uppercase;
  line-height: 40px;
  letter: 2px;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CountBadge = styled.span`
  font-family: 'Beatrice Deck Trial';
  font-size: 1.25rem;
  color: #000E8A;
  margin-left: 0.5rem;
`;

export const SeeAllLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  padding-top: 70px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
  border: 1px solid #eee;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background-color: #f5f6fa;
  border: 1px solid #d5dbdb;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductInfo = styled.div`
  padding: 0.5rem 0;
`;

export const ProductCategory = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.25rem 0;
`;

export const ProductPrice = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const ColorOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ColorVariant = styled.div`
  font-size: 0.75rem;
  color: #999;
  background-color: #f0f0f0;
  padding: 0.1rem 0.3rem;
`;

export const NavigationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const FlexRowBetween = styled.div`
  display: flex;
  gap: 6px;
  justify-content: space-between;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0 0.25rem;

  &:hover {
    border-color: #999;
  }
`;